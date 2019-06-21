import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async (_, args) =>
      prisma.users({
        where: {
          OR: [
            { userName_contains: args.term },
            { belongTo_contains: args.term }
          ]
        }
      })
  }
};
