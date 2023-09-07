import { prisma } from "./prisma";

// find all movies that a user has watched
export const findAllMoviesThatAUserWatched = async (userId: number) => {
  const watchedMoviesId = await prisma.starRating.findMany({
    where: {
      userId: userId,
    },
    select: {
      movieId: true,
    },
  });
  return await prisma.movie.findMany({
    where: {
      id: {
        in: watchedMoviesId.map((movie) => movie.movieId),
      },
    }
  });
};
