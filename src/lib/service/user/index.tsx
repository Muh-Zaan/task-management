import {
  FAILED,
  STATUS_BAD_REQUEST,
  STATUS_SUCCESS_CREATE,
  SUCCESS_CREATE,
} from "@/context/response";
import { hashPassword } from "@/helper/hashPassword";
import { PrismaClient } from "@prisma/client";

type GetUserByUnique = {
  id?: string;
  email?: string;
  username?: string;
};

type ParamsRegister = {
  email: string;
  username: string;
  password: string;
};

const prisma = new PrismaClient();

export const getUserUniqueService = async ({
  id,
  email,
  username,
}: GetUserByUnique) => {
  try {
    if (id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    }
    if (email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      return user;
    }
    if (username) {
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });
      return user;
    }
  } catch (error) {
    return error;
  }
};

export const registerService = async ({
  email,
  username,
  password,
}: ParamsRegister) => {
  try {
    const hashedPassword = await hashPassword(password);
    if (!hashedPassword) {
      return {
        error: FAILED,
        message: "Failed to hash password",
      };
    }
    const res = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        photo_profile: "",
      },
    });

    return {
      status: STATUS_SUCCESS_CREATE,
      message: SUCCESS_CREATE,
      data: {
        id: res.id,
        username: res.username,
        email: res.email,
      },
    };
  } catch (error) {
    return error;
  }
};
