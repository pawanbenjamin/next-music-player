// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

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
  const { email, password, firstName, lastName } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
    console.log({ user });
  } catch (error) {
    console.log(error);
    res.status(401);
    res.send({ error: "User already exists" });
    return;
  }

  res.status(200).json(user);
}
