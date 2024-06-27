"use client";
import Detail from "@/components/CreateProject/Detail";
import ProjectAttachment from "@/components/CreateProject/ProjectAttachment";
import ProjectMember from "@/components/CreateProject/ProjectMember";
import TextRichEditor from "@/components/TextRichEditor";
import {
  addAttachmentData,
  addDetailProject,
  deleteAttachment,
} from "@/lib/features/create-project";
import { RootState, useAppDispatch } from "@/lib/store";
import { AttachmentData } from "@/types/project";
import { del, put } from "@vercel/blob";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CreateProject = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<any>("");
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [fileUploaded, setFileUploaded] = useState<string>("");
  const [urlFile, setUrlFile] = useState<string>("");
  const [page, setPage] = useState<string>("detail");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const projectDetail = useSelector((state: RootState) => state.project.value);
  const attachmentData = useSelector(
    (state: RootState) => state.project.value.project_attachment
  );

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [page]);

  useEffect(() => {
    if (page == "member") {
      
    }
  }, [page])

  const submitDetailProject = async (event: ChangeEvent<HTMLFormElement>) => {
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

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoadingFile(true);
    if (event.target.files) {
      const file = event.target.files[0];
      const { url } = await put(file.name, file, {
        access: "public",
        token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN,
      });

      if (url != "") {
        setUrlFile(url);
        setLoadingFile(false);
        setFileUploaded(file.name);
      }
    }
  };

  const submitAttachment = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = {
        name: fileName,
        url: urlFile,
      };

      dispatch(addAttachmentData(data));
      setFileName("");
      setUrlFile("");
      setFileUploaded("");
    } catch (error) {
      console.log(error);
    }
  };

  const removeAttachment = async (url: string) => {
    dispatch(
      deleteAttachment({
        url,
      })
    );
  };

  const changeProjectTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectTitle(event.target.value);
  };

  const handleContentChange = (newContent: any) => {
    setProjectDescription(newContent);
  };

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const handleNextAttachment = () => {
    setPage("member");
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

  const handleBack = () => {
    if (page == "attachment") {
      setPage("detail");
    } else if (page == "member") {
      setPage("attachment");
    }
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
            <ProjectAttachment
              dataAttachment={attachmentData}
              isLoading={loadingFile}
              fileName={fileName}
              fileUploaded={fileUploaded}
              changeName={changeName}
              uploadImage={uploadImage}
              submitData={submitAttachment}
              removeAttachment={removeAttachment}
              handleBack={handleBack}
              handleNextAttachment={handleNextAttachment}
            />
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

// const response = await axios.post("/api/v1/project", {
//   project_name: "Example Project",
//   project_description: "<p>Project Description</p>",
//   attachment: [
//     {
//       name: "PRD File",
//       url: "https://youtube.com",
//     },
//     {
//       name: "PRD File 2",
//       url: "https://youtube.com",
//     },
//   ],
//   member: [
//     {
//       role: "project_owner",
//       user: "0de4c154-7e66-4717-b486-a9fd8f8ad88d",
//     },
//     {
//       role: "project_leader",
//       user: "54726e0e-1807-4a32-88b6-0662db94523d",
//     },
//   ],
// });
// if (response.status == 200) {
// }
