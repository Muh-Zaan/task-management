import { ProjectController } from "@/lib/controller/project";
import { ResponseApi } from "@/types/responseApi";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { project_name, project_description, attachment, member } = data;
    const projectData = {
      project_name,
      project_description,
      attachment,
      member,
    };

    (await ProjectController.addProject(projectData)) as ResponseApi;

    return Response.json({ message: "SUCCESS KAWAN" });
  } catch (error) {
    return Response.json(error);
  }
};
