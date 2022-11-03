import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req: any) {
  const token = req.cookies.next_player_token;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/", "/playlist", "/library"],
};
