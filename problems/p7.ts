import { prisma } from "./prisma";

// get average score for a user
export const getAverageScoreForUser = async (userId: number) => {
  const data = await prisma.starRating.aggregate({
    _avg: {
      score: true,
    },
    where: {
      userId: userId,
    },
  });
  return data._avg.score;
};
