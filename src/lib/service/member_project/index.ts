import { STATUS_SUCCESS_CREATE, SUCCESS_CREATE } from "@/context/response";
import { PrismaClient } from "@prisma/client";

type ParamsAddMember = {
  role: string;
  user: string;
  project: string;
};

const prisma = new PrismaClient();

export const addMemberProject = async ({
  role,
  user,
  project,
}: ParamsAddMember) => {
  try {
    await prisma.member_project.create({
      data: {
        role,
        userId: user,
        projectId: project,
      },
    });

    return {
      status: STATUS_SUCCESS_CREATE,
      message: SUCCESS_CREATE,
    };
  } catch (error) {
    console.log(error);
  }
};
