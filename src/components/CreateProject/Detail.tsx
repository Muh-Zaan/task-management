import React, { ChangeEvent } from "react";
import TextRichEditor from "../TextRichEditor";

type Props = {
  projectTitle: string;
  projectDescription: string;
  projectDetail: any;
  submitDetailProject: (_event: ChangeEvent<HTMLFormElement>) => void;
  changeProjectTitle: (_event: ChangeEvent<HTMLInputElement>) => void;
  changeProjectDescription: (_content: any) => void;
  handleCancelButton: () => void;
};

const Detail = ({
  projectTitle,
  projectDescription,
  projectDetail,
  submitDetailProject,
  changeProjectTitle,
  changeProjectDescription,
  handleCancelButton,
}: Props) => {
  return (
    <form onSubmit={submitDetailProject} className="w-full h-full">
      <div className="w-2/4 flex flex-col gap-4 h-[67px]">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-black/70">Project Title</p>
          <input
            value={
              projectDetail.project_title == ""
                ? projectTitle
                : projectDetail.project_title
            }
            className="border px-4 py-2 rounded-md text-sm outline-none"
            placeholder="Input project title"
            onChange={changeProjectTitle}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6 mb-4">
        <p className="text-sm font-semibold text-black/70">
          Project Description
        </p>
        <TextRichEditor
          id={String(process.env.NEXT_PUBLIC_ID_TINY_MCE_EDITOR)}
          initialValue={
            projectDetail.project_description == ""
              ? projectDescription
              : projectDetail.project_description
          }
          onChange={changeProjectDescription}
          apiKey={String(process.env.NEXT_PUBLIC_API_KEY_TINE)}
        />
      </div>
      <div className="flex justify-end gap-4 items-center">
        <button
          className="w-40  border py-1.5 text-black rounded-md"
          type="button"
          onClick={handleCancelButton}
        >
          Cancel
        </button>
        <button className="w-40  bg-black py-1.5 text-white rounded-md">
          Save & Next
        </button>
      </div>
    </form>
  );
};

export default Detail;
