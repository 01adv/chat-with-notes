// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isPublicRoute = createRouteMatcher(["/", "/login"]);

// export default clerkMiddleware((auth, req) => {
//   const { userId } = auth();
//   const currentUrl = new URL(req.url);
//   const isPublicAccess = currentUrl.pathname === "/";

//   // If user is logged in and trying to access a sign in or signup, redirect to the home page
//   if (userId && isPublicRoute(req) && !isPublicAccess) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }
//   //not logged in
//   if (!userId) {
//     if (!isPublicRoute(req)) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }
//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', "/"])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}