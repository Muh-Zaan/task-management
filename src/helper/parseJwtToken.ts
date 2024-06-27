import jwt from "jsonwebtoken";

type JwtPayload = {
  id: string;
  email: string;
  iat: number;
  exp: number;
};

export const ParseJwtToken = (token: string) => {
  const jwtToken = token.split(" ")[1];

  try {
    const decoded = jwt.verify(jwtToken, "82hy27i12") as JwtPayload;
    return decoded;
  } catch (error) {
    throw new Error("Token tidak valid");
  }
};

export const JwtTokenGenerate = (data: { id: string; email: string }) => {
  const jwtToken = jwt.sign(data, "82hy27i12", {
    expiresIn: "2h",
  });
  return jwtToken;
};
