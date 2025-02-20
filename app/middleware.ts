import { NextResponse } from "next/server";

export function middleware() {
  const res = NextResponse.next();

  res.headers.set("Access-Control-Allow-Origin", "https://45.gitnasr.com");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set("Access-Control-Allow-Headers", "*");

  return res;
}

export const config = {
  matcher: "/api/:path*",
};
