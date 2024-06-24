import { STATUS_SUCCESS_CREATE, SUCCESS_CREATE } from "@/context/response";
import { PrismaClient } from "@prisma/client";

type ParamsAddAttach = {
  name: string;
  url: string;
  projectId: string;
};

const prisma = new PrismaClient();

export const addAttachmentProject = async ({
  name,
  url,
  projectId,
}: ParamsAddAttach) => {
  try {
    await prisma.attachment_project.create({
      data: {
        attachment_name: name,
        url,
        projectId: projectId,
      },
    });

    return {
      status: STATUS_SUCCESS_CREATE,
      message: SUCCESS_CREATE,
    };
  } catch (error) {
    return error;
  }
};
