import { User } from "@prisma/client";
import prisma from "../prisma";

/**
 * Creates user
 * @param user
 * @returns user
 */
const createUser = async (
  user: Omit<User, "id" | "createdAt" | "updatedAt">,
) => {
  try {
    const newUser = await prisma.user.create({
      data: user,
    });
    return newUser;
  } catch (e) {
    throw e;
  }
};

/**
 * Retrieves the user with the given username
 * @param username
 * @returns user
 */
const getUser = async (username: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @param username
 * @param userData
 * @returns the updated user
 */
const updateUser = async (
  username: string,
  userData: Omit<User, "id" | "createdAt" | "updatedAt">,
) => {
  try {
    const updateUser = await prisma.user.update({
      where: {
        username,
      },
      data: {
        ...userData,
      },
    });

    return updateUser;
  } catch (e) {
    throw e;
  }
};

export default {
  createUser,
  getUser,
  updateUser,
};
