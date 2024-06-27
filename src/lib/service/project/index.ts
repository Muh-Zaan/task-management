import { PrismaClient } from "@prisma/client";
import { addAttachmentProject } from "../attachment_project";
import { addMemberProject } from "../member_project";

type ProjectAttachment = {
  name: string;
  url: string;
};

type MemberProject = {
  user: string;
  role: string;
};

type ParamsCreateProject = {
  project_name: string;
  project_description: string;
  user_id: string;
  attachment: ProjectAttachment[];
  member: MemberProject[];
};

const prisma = new PrismaClient();

export const createProject = async ({
  project_name,
  project_description,
  attachment,
  member,
  user_id,
}: ParamsCreateProject) => {
  try {
    const data = await prisma.project.create({
      data: {
        project_name,
        project_description,
        created_by: user_id,
      },
    });

    member.map(async (result) => {
      await addMemberProject({
        role: result.role,
        user: result.user,
        project: data.id,
      });
    });

    attachment.map(async (result) => {
      await addAttachmentProject({
        name: result.name,
        url: result.url,
        projectId: data.id,
      });
    });

    return data;
  } catch (error) {
    return error;
  }
};
