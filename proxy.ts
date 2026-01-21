import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import envVars from "./config/env";

export type RouteConfig = {
    exact: string[],
    patterns: RegExp[],
}

export type UserRole = "ADMIN" | "DOCTOR" | "PATIENT";

export const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];

export const isAuthRoute = (pathname: string) => {
    return authRoutes.some((route: string) => route === pathname);
}


export const commonProtectedRoutes: RouteConfig = {
    exact: ["/my-profile", "/settings"],
    patterns: [], // [/password/change-password, /password/reset-password => /password/*]
}

export const doctorProtectedRoutes: RouteConfig = {
    patterns: [/^\/doctor/], // Routes starting with /doctor/* , /assitants, /appointments/*
    exact: [], // "/assistants"
}

export const adminProtectedRoutes: RouteConfig = {
    patterns: [/^\/admin/], // Routes starting with /admin/*
    exact: [], // "/admins"
}

export const patientProtectedRoutes: RouteConfig = {
    patterns: [/^\/dashboard/], // Routes starting with /dashboard/*
    exact: [], // "/dashboard"
}

export const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
    if (routes.exact.includes(pathname)) {
        return true
    }
    for (const pattern of routes.patterns) {
        if (pattern.test(pathname)) {
            return true
        }
    }
    return false
}

export const getRouteOwner = (pathname: string): "ADMIN" | "DOCTOR" | "PATIENT" | "COMMON" | null => {
    if (isRouteMatches(pathname, adminProtectedRoutes)) {
        return "ADMIN";
    }
    if (isRouteMatches(pathname, doctorProtectedRoutes)) {
        return "DOCTOR";
    }
    if (isRouteMatches(pathname, patientProtectedRoutes)) {
        return "PATIENT";
    }
    if (isRouteMatches(pathname, commonProtectedRoutes)) {
        return "COMMON";
    }
    return null;
}

export const getDefaultDashboardRoute = (role: UserRole): string => {
    if (role === "ADMIN") {
        return "/admin/dashboard";
    }
    if (role === "DOCTOR") {
        return "/doctor/dashboard";
    }
    if (role === "PATIENT") {
        return "/dashboard";
    }
    return "/";
}


export const proxy = async (req: NextRequest) => {
    const cookieStore = await cookies()
    const pathname = req.nextUrl.pathname;

    const accessToken = req.cookies.get("accessToken")?.value || null
    console.log("Access Token:", accessToken);

    let userRole: UserRole | null = null

    if (accessToken) {
        const verifiedToken: string | jwt.JwtPayload = jwt.verify(accessToken, envVars.jwt.jwt_access_secret)

        if (typeof verifiedToken === "string") {
            cookieStore.delete("accessToken");
            cookieStore.delete("refreshToken");
            return NextResponse.redirect(new URL("/login", req.url))
        }
        userRole = verifiedToken.role
    }

    const routerOwner = getRouteOwner(pathname);
    const isAuth = isAuthRoute(pathname)

    if (accessToken && isAuth) {
        return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), req.url))
    }

    if (routerOwner === null) {
        return NextResponse.next();
    }
    // console.log("Access Token:", accessToken);
    if (!accessToken) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("redirect", pathname);    
        return NextResponse.redirect(loginUrl);
    }

    if (routerOwner === "COMMON") {
        return NextResponse.next();
    }

    if (routerOwner === "ADMIN" || routerOwner === "DOCTOR" || routerOwner === "PATIENT") {
        if (userRole !== routerOwner) {
            return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), req.url))
        }
    }

    return NextResponse.next();
}



export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ],
}