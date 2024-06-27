import {
  FAILED,
  STATUS_SUCCESS,
  STATUS_SUCCESS_CREATE,
  SUCCESS_CREATE,
  SUCCESS_EDIT,
  SUCCESS_SEND,
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

type ParamsRecoverPass = {
  email: string;
  password: string;
};

const prisma = new PrismaClient();

export const findAllUser = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      username: true,
      photo_profile: true,
      created_datetime: true,
      updated_datetime: true,
      password: false,
      member_project: true,
    },
  });
  return users;
};

export const searchUserService = async (search: string) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: search.toLowerCase(),
            },
          },
        ],
      },
    });

    return user;
  } catch (error) {
    return error;
  }
};

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
        password: hashedPassword as string,
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

export const loginService = async (email: string) => {
  try {
    const res = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const updatePassword = async ({
  email,
  password,
}: ParamsRecoverPass) => {
  try {
    const hashedPassword = await hashPassword(password);
    if (!hashedPassword) {
      return {
        error: FAILED,
        message: "Failed to hash password",
      };
    }

    const response = await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPassword,
      },
    });

    return {
      status: STATUS_SUCCESS,
      message: SUCCESS_EDIT,
      data: response,
    };
  } catch (error) {
    return error;
  }
};
