import { NOT_FOUND } from "@/context/response";
import { updatePasswordController } from "@/lib/controller/user";
import { sendEmail } from "@/lib/nodemailer";
import { ResponseApi } from "@/types/responseApi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { email } = data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return Response.json(
        {
          error: NOT_FOUND,
          message: `${email} has not register`,
        },
        { status: 404 }
      );
    }

    await sendEmail({ to: email, id: user.id });

    return Response.json(
      {
        message: `Email send to ${email}`,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(error);
  }
};

export const PUT = async (req: Request) => {
  try {
    const data = await req.json();
    const { id, password } = data;

    const response = (await updatePasswordController(
      id,
      password
    )) as ResponseApi;

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
