import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Sirf simple matcher rakho, complex wala Next 16 me fail hota hai
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};