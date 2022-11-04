import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("next_player_token", "", {
      httpOnly: true,
      maxAge: -1,
      sameSite: "strict",
      path: "/",
      secure: process.env.NODE_ENV === "production",
    })
  );
  res.json({ message: "You are Logged Out!" });
}
