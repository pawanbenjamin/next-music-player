import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "./auth";
import prisma from "./prisma";
import { User } from "./types";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: User) => {
    const playlistCount = await prisma.playlist.count({
      where: {
        userId: user.id,
      },
    });
    res.json({ ...user, playlistCount });
  }
);
