import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    allPosts: () => prisma.posts()
  }
};
