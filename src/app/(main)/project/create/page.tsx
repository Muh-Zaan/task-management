"use client";
import Detail from "@/components/CreateProject/Detail";
import ProjectAttachment from "@/components/CreateProject/ProjectAttachment";
import ProjectMember from "@/components/CreateProject/ProjectMember";
import TextRichEditor from "@/components/TextRichEditor";
import { addDetailProject } from "@/lib/features/create-project";
import { RootState, useAppDispatch } from "@/lib/store";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CreateProject = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<any>("");
  const [page, setPage] = useState<string>("detail");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const projectDetail = useSelector((state: RootState) => state.project.value);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [page]);

  const submitDetailProject = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(
        addDetailProject({
          project_title: projectTitle,
          project_body: projectDescription,
        })
      );

      setPage("attachment");
    } catch (error) {
      console.log(error);
    }
  };

  const changeProjectTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectTitle(event.target.value);
  };

  const handleContentChange = (newContent: any) => {
    setProjectDescription(newContent);
  };

  const cancelHandle = () => {
    dispatch(
      addDetailProject({
        project_title: "",
        project_body: "",
      })
    );

    router.push("/project");
  };

  return (
    <div className="w-full h-full bg-white p-6 rounded-xl">
      <h1 className="text-xl font-bold">Create Project</h1>
      <hr className="my-6" />
      <div
        className="w-full"
        style={{
          height: "calc(100% - 72px)",
        }}
      >
        <div className="w-full flex items-center border-b relative">
          <button
            className={`w-44 py-2 text-center cursor-pointer ${
              page == "detail" ? "border-b-2 border-blue-500" : "border-none"
            }`}
            onClick={() => setPage("detail")}
          >
            <span
              className={`text-sm ${
                page == "detail"
                  ? "text-blue-500 font-semibold"
                  : "text-black/60 font-normal"
              }`}
            >
              Project Detail
            </span>
          </button>
          <button
            className={`w-44 py-2 text-center cursor-pointer ${
              page == "attachment"
                ? "border-b-2 border-blue-500"
                : "border-none"
            }`}
            onClick={() => setPage("attachment")}
          >
            <span
              className={`text-sm ${
                page == "attachment"
                  ? "text-blue-500 font-semibold"
                  : "text-black/70 font-normal"
              }`}
            >
              Project Attachments
            </span>
          </button>
          <button
            className={`w-44 py-2 text-center cursor-pointer ${
              page == "member" ? "border-b-2 border-blue-500" : "border-none"
            }`}
            onClick={() => setPage("member")}
          >
            <span
              className={`text-sm ${
                page == "member"
                  ? "text-blue-500 font-semibold"
                  : "text-black/60 font-normal"
              }`}
            >
              Project Member
            </span>
          </button>
        </div>
        <div
          className="w-full  py-6"
          style={{
            height: "calc(100% - 50px)",
          }}
        >
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <p>Loading...</p>
            </div>
          ) : page == "detail" ? (
            <Detail
              projectTitle={projectTitle}
              projectDescription={projectDescription}
              projectDetail={projectDetail}
              submitDetailProject={submitDetailProject}
              changeProjectTitle={changeProjectTitle}
              changeProjectDescription={handleContentChange}
              handleCancelButton={cancelHandle}
            />
          ) : page == "attachment" ? (
            <ProjectAttachment />
          ) : page == "member" ? (
            <ProjectMember />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
