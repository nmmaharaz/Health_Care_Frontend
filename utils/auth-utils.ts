export type RouteConfig = {
    exact: string[],
    patterns: RegExp[],
}

export type UserRole = "ADMIN" | "DOCTOR" | "PATIENT";

export const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password", "/consultation"];

export const isAuthRoute = (pathname: string) => {
    return authRoutes.some((route: string) => route === pathname);
}


export const commonProtectedRoutes: RouteConfig = {
    exact: ["/my-profile", "/settings"],
    patterns: [], 
}

export const doctorProtectedRoutes: RouteConfig = {
    patterns: [/^\/doctor/], 
    exact: [], 
}

export const adminProtectedRoutes: RouteConfig = {
    patterns: [/^\/admin/], 
    exact: [], 
}

export const patientProtectedRoutes: RouteConfig = {
    patterns: [/^\/dashboard/], 
    exact: [], 
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

export const isValidRedirectForRole = (redirectPath: string, role: UserRole): boolean => {
    const routeOwner = getRouteOwner(redirectPath);

    if (routeOwner === null || routeOwner === "COMMON") {
        return true;
    }

    if (routeOwner === role) {
        return true;
    }

    return false;
}