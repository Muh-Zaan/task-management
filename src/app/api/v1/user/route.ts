import { STATUS_SUCCESS, SUCCESS_GET } from "@/context/response";
import { getAllController, searchUsers } from "@/lib/controller/user";
import { getUserUniqueService } from "@/lib/service/user";
import { ResponseApi } from "@/types/responseApi";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const data = req.nextUrl.searchParams;
    const username = data.get("name");

    if (username == null || username == "") {
      const users = (await getAllController()) as ResponseApi;
      return Response.json(
        {
          status: STATUS_SUCCESS,
          message: SUCCESS_GET,
          data: users,
        },
        {
          status: users.status,
        }
      );
    }

    const user = (await searchUsers(username)) as ResponseApi;
    return Response.json(
      {
        status: STATUS_SUCCESS,
        message: SUCCESS_GET,
        data: user,
      },
      {
        status: user.status,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        error,
      },
      { status: 500 }
    );
  }
};
