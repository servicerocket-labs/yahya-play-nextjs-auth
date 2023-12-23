export { default } from "next-auth/middleware"

// Use middleware to authorize specific paths
export const config = { matcher: ["/custom-page        "] }
