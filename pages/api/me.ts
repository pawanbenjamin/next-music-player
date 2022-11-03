import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";
import { User } from "../../lib/types";

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
