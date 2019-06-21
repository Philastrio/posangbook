import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { userName, email, position, belongTo, Rank = "" } = args;
      const user = await prisma.createUser({
        userName,
        email,
        position,
        belongTo,
        Rank
      });
      return user;
    }
  }
};
