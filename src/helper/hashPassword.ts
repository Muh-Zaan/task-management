import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const saltRounds = 12;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    return error;
  }
};

export const comparePassword = async (hash: string, password: string) => {
  try {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  } catch (error) {
    return error;
  }
};
