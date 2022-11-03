import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "../pages/api/signup";
import prisma from "./prisma";
import { User } from "./types";

export const validateRoute = (hander: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { next_player_token: token } = req.cookies;
    if (token) {
      let user: User | null;
      try {
        const { id } = jwt.verify(token, "hello");
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
  };
};

export const validateToken = (token: string) => {
  const user = jwt.verify(token, "hello");
  return user;
};
