import { registerController } from "@/lib/controller/user";
import { ResponseApi } from "@/types/responseApi";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { username, email, password } = data;
    const userData = {
      email,
      username,
      password,
    };

    const response = (await registerController(userData)) as ResponseApi;

    return Response.json(
      {
        response,
      },
      {
        status: response.status,
      }
    );
  } catch (error) {
    return Response.json(error);
  }
};
