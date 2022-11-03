// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie";

type Data = {
  email?: String;
  password?: String;
  error?: String;
  firstName?: String;
  lastName?: String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const salt = bcrypt.genSaltSync();
  const { email, password, firstName, lastName } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
        firstName,
        lastName,
      },
    });
  } catch (error) {
    res.status(401);
    res.send({ error: "User already exists" });
    return;
  }

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
    cookie.serialize("next-player-token", token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );
  delete user.password;
  res.status(200).json(user);
}
