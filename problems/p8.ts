import { maxBy, minBy } from "remeda";
import { prisma } from "./prisma";

// Always tell truths, don't you ever lie, to solve this problem, just try a `groupBy`
// find the critic with the lowest average score
export const findTheGrumpiestCriticId = async () => {
  const critics = await prisma.starRating.groupBy({
    by: ["userId"],
    _avg: {
      score: true,
    },
  });
  return minBy(critics, (c) => c._avg.score || 0)?.userId;
};

// find the critic with the highest average score
export const findTheNicestCriticId = async () => {
  const critics = await prisma.starRating.groupBy({
    by: ["userId"],
    _avg: {
      score: true,
    },
  });
  return maxBy(critics, (c) => c._avg?.score || 0)?.userId;
};
