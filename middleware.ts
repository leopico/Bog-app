import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { JWT } from 'next-auth/jwt';

// Helper function to extract the role from the token
const getRoleFromToken = (token: JWT | null) => {
  if (token && token.role) {
    return token.role;
  }
  return null;
};

export default withAuth(
  async function middleware(req) {
        if (
            req.nextUrl.pathname === '/admin' ||
            req.nextUrl.pathname === '/admin/new-post' ||
            req.nextUrl.pathname === '/admin/users')
        {
      const token = req.nextauth?.token;
      const role = getRoleFromToken(token);

      if (role !== 'admin') {
        return new NextResponse("You are not authorized", { status: 401 });
      }
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token; // check if token exists
      },
    },
  }
);

export const config = { matcher: ["/admin/:path*"] };
