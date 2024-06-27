import { ProjectController } from "@/lib/controller/project";
import { ResponseApi } from "@/types/responseApi";
import { headers } from "next/headers";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const reqHeader = headers();
    const token = reqHeader.get("authorization");

    if (!token) {
      return Response.json({
        message: "Authorization",
      });
    }

    const { project_name, project_description, attachment, member } = data;
    const projectData = {
      project_name,
      project_description,
      attachment,
      member,
      token: token,
    };

    (await ProjectController.addProject(projectData)) as ResponseApi;

    return Response.json({ message: "SUCCESS KAWAN" });
  } catch (error) {
    return Response.json(error);
  }
};
