import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_COUNTRIES = ["PK", "GB"];

// Crawlers/verifiers (Google Ads landing-page checks, Search, Bing, etc.) must
// always be able to reach the site regardless of their crawl location, or ads
// get disapproved and pages drop out of search results.
const ALLOWED_BOT_UA = /googlebot|adsbot-google|google-inspectiontool|mediapartners-google|bingbot|bingpreview|duckduckbot|applebot/i;

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  if (ALLOWED_BOT_UA.test(userAgent)) {
    return NextResponse.next();
  }

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
