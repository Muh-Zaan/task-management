import { BAD_REQUEST, STATUS_BAD_REQUEST } from "@/context/response";
import { ParseJwtToken } from "@/helper/parseJwtToken";
import { createProject } from "@/lib/service/project";

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
  token: string;
  attachment: ProjectAttachment[];
  member: MemberProject[];
};

export const ProjectController = {
  addProject: async ({
    project_name,
    project_description,
    attachment,
    member,
    token,
  }: ParamsCreateProject) => {
    try {
      if (!project_name) {
        return {
          status: STATUS_BAD_REQUEST,
          error: BAD_REQUEST,
          message: "project name is required!",
        };
      }
      if (!project_description) {
        return {
          status: STATUS_BAD_REQUEST,
          error: BAD_REQUEST,
          message: "project description is required!",
        };
      }
      if (!project_description) {
        return {
          status: STATUS_BAD_REQUEST,
          error: BAD_REQUEST,
          message: "add at least 1 attachment!",
        };
      }
      if (!project_description) {
        return {
          status: STATUS_BAD_REQUEST,
          error: BAD_REQUEST,
          message: "add at least 1 member!",
        };
      }

      const decodeToken = ParseJwtToken(token);

      const data = await createProject({
        project_name,
        project_description,
        attachment,
        member,
        user_id: decodeToken.id,
      });

      return data;
    } catch (error) {
      return error;
    }
  },
};
