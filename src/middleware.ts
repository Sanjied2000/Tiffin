import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId } =await auth();

  // Protected routes
  const protectedRoutes = ["/order", "/account", "/cart"];

  const currentPath = req.nextUrl.pathname;

  // Check if user tries to access a protected route
  const isProtected = protectedRoutes.some((route) =>
    currentPath.startsWith(route)
  );

  if (isProtected && !userId) {
    // redirect to home page ("/") if not signed in
    const redirectUrl = new URL("/", req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};