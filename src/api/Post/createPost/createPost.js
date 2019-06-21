import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const {
        userName,
        prizeNum,
        winnerName,
        birth,
        address,
        docNum,
        prizeCategory,
        prizeRank,
        prizeDate,
        contribution,
        belongTo
      } = args;

      const post = await prisma.createPost({
        userName: { connect: { id: user.id } },
        prizeNum,
        winnerName,
        birth,
        address,
        docNum,
        prizeCategory,
        prizeRank,
        prizeDate,
        contribution,
        belongTo
      });

      return post;
    }
  }
};
