import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    userName: ({ id }) => prisma.post({ id }).userName()
  }
};
