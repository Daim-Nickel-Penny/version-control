import { File } from "@prisma/client";
import prisma from "../prisma";

const createFile = async (
  repoId: string,
  file: Omit<File, "id" | "createdAt" | "updatedAt" | "repoId">,
) => {
  try {
    const newFile = await prisma.file.create({
      data: {
        ...file,
        repo: {
          connect: {
            id: repoId,
          },
        },
      },
    });
    return newFile;
  } catch (e) {
    throw e;
  }
};

export default {
  createFile,
};
