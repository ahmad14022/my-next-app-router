import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isLogin = true
    if(!isLogin) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    // if (request.nextUrl.pathname.startsWith("/about")) {
    //     if(!isLogin) {
    //         return NextResponse.redirect(new URL("/login", request.url))
    //     }
    //     // return NextResponse.rewrite(new URL("/product", request.url))
    // }
}

export const config = {
    matcher: ["/dashboard/:path*", "/about/:path*"]
}