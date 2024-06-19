import {
  BAD_REQUEST,
  EMAIL_FOUND,
  NOT_FOUND,
  STATUS_BAD_REQUEST,
  STATUS_NOT_FOUND,
  STATUS_UNAUTHORIZED,
  WRONG_PASSWORD,
} from "@/context/response";
import { comparePassword } from "@/helper/hashPassword";
import {
  getUserUniqueService,
  loginService,
  registerService,
} from "@/lib/service/user";

type ParamsRegister = {
  email: string;
  username: string;
  password: string;
};

export const registerController = async ({
  email,
  username,
  password,
}: ParamsRegister) => {
  try {
    if (!email) {
      return {
        status: STATUS_BAD_REQUEST,
        error: BAD_REQUEST,
        message: "email is required!",
      };
    }
    if (!username) {
      return {
        status: STATUS_BAD_REQUEST,
        error: BAD_REQUEST,
        message: "username is required!",
      };
    }
    if (!password) {
      return {
        status: STATUS_BAD_REQUEST,
        error: BAD_REQUEST,
        message: "password is required!",
      };
    }

    const user = await getUserUniqueService({ email });
    if (user) {
      return {
        status: STATUS_BAD_REQUEST,
        error: EMAIL_FOUND,
        message: `${email} has been used, please use another email or login with this email`,
      };
    }

    const data = {
      email,
      username,
      password,
    };

    const service = await registerService(data);
    return service;
  } catch (error) {
    return error;
  }
};

export const loginConteoller = async (email: string, password: string) => {
  try {
    const user = await loginService(email);
    return user;
  } catch (error) {}
};