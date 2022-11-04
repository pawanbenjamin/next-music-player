import { NextResponse } from "next/server";

export default function middleware(req: any) {
  const token = req.cookies.get("next_player_token")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/", "/playlist", "/library"],
};
