import jwt from "jsonwebtoken";

export const ParseJwtToken = (token: string) => {
  return token;
};

export const JwtTokenGenerate = (data: { id: string; email: string }) => {
  const jwtToken = jwt.sign(data, "fdjlekw2321", { expiresIn: "2h" });
  return jwtToken;
};
