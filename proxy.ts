import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_COUNTRIES = ["PK", "GB"];

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");

  if (country && !ALLOWED_COUNTRIES.includes(country)) {
    return new NextResponse("Access to this site is not available in your region.", {
      status: 403,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)"],
};
