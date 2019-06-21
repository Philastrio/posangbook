import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) =>
      prisma.posts({
        where: {
          OR: [
            { prizeNum_contains: args.term },
            { winnerName_contains: args.term },
            { birth_contains: args.term },
            { address_contains: args.term },
            { prizeCategory_contains: args.term },
            { prizeRank_contains: args.term },
            { prizeDate_contains: args.term },
            { contribution_contains: args.term },
            { belongTo_contains: args.term }
          ]
        }
      })
  }
};
