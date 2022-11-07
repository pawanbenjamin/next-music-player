import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "./prisma";
import { User } from "./types";

interface JwtPayload {
  id: number;
}

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { next_player_token: token } = req.cookies;
    if (token) {
      let user: User | null;
      try {
        const { id } = jwt.verify(token, "hello") as JwtPayload;
        user = await prisma.user.findUnique({
          where: {
            id,
          },
        });
        if (!user) {
          throw new Error("Not a real user");
        }
      } catch (error) {
        res.status(401);
        res.send({ error: "Not Authorized" });
        return;
      }
      delete user.password;
      return handler(req, res, user);
    }
    res.status(401);
    res.send({ error: "Not Authorized" });
  };
};

export const validateToken = (token: string) => {
  const user = jwt.verify(token, "hello");
  return user;
};
