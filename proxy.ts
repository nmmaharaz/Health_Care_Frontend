import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import envVars from "./config/env";
import { getDefaultDashboardRoute, getRouteOwner, isAuthRoute, UserRole } from "./utils/auth-utils";


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