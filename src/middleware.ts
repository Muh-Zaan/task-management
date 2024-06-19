import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req, secret: "secret" });

  if (token == null) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard"],
};
