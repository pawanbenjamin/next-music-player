import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie";
import prisma from "../../lib/prisma";
import { User, Data } from "../../lib/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        email: user.id,
        id: user.id,
        time: Date.now(),
      },
      "hello",
      { expiresIn: "8h" }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("next_player_token", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        sameSite: "strict",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      })
    );
    res.status(200).json(user);
  } else {
    res.status(401);
    res.json({ error: "Email or Password Incorrect" });
  }
}
