import { AttachmentData } from "@/types/project";
import Link from "next/link";
import React, { ChangeEvent } from "react";
import { Edit, Eye, File, Loader, Trash2, UploadCloud } from "react-feather";

type Props = {
  dataAttachment: AttachmentData[];
  isLoading: boolean;
  fileName: string;
  fileUploaded: string;
  uploadImage: (_event: ChangeEvent<HTMLInputElement>) => void;
  changeName: (_event: ChangeEvent<HTMLInputElement>) => void;
  submitData: (_event: ChangeEvent<HTMLFormElement>) => void;
  removeAttachment: (_url: string) => void;
  handleBack: () => void;
  handleNextAttachment: () => void;
};

const ProjectAttachment = ({
  dataAttachment,
  isLoading,
  fileName,
  fileUploaded,
  uploadImage,
  changeName,
  submitData,
  removeAttachment,
  handleBack,
  handleNextAttachment,
}: Props) => {
  return (
    <div className="w-full h-full flex gap-10">
      <div className="w-1/3 h-full">
        <form
          className="w-full h-full flex flex-col gap-4"
          onSubmit={submitData}
        >
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-black/70">Upload File</p>
            <div className="w-full h-80 border-2 border-dashed rounded-lg gap-3 flex flex-col justify-center items-center">
              {isLoading ? (
                <Loader />
              ) : (
                <label htmlFor="file-upload" className="w-full h-full">
                  <div className="w-full h-full rounded-lg gap-3 flex flex-col justify-center items-center cursor-pointer">
                    <UploadCloud size={32} className="text-gray-600" />
                    <div className="text-center">
                      {fileUploaded == "" ? (
                        <>
                          <p className="text-base text-black/70">
                            Click here to upload file
                          </p>
                          <p className="text-xs text-black/60">
                            can only save files in the format (.pdf .docx .doc)
                          </p>
                        </>
                      ) : (
                        <p className="text-black/70 text-sm">{fileUploaded}</p>
                      )}
                    </div>
                  </div>
                </label>
              )}
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={uploadImage}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-black/70">File Name</p>
            <input
              value={fileName}
              className="px-4 py-2 text-sm font-medium border rounded-lg outline-none"
              placeholder="Input file name"
              onChange={changeName}
            />
          </div>
          <div className="flex justify-end items-center">
            <button className="text-white text-sm bg-black px-6 py-2 rounded-lg">
              Save File
            </button>
          </div>
        </form>
      </div>
      <div className="w-2/3">
        <p className="text-sm font-semibold text-black/70">Uploaded File</p>
        {dataAttachment.length != 0 ? (
          <>
            {dataAttachment.map((result) => (
              <div
                key={result.url}
                className="w-full mt-2 flex justify-between items-center border-b pb-4"
              >
                <div className="w-full flex items-center gap-4">
                  <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-tl from-gray-200 to-gray-100 rounded-lg">
                    <File size={22} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">{result.name}</p>
                    <Link
                      href={result.url}
                      target="_blank"
                      className="text-xs text-black/50 font-medium"
                    >
                      <p className="w-[80%] truncate">Preview File</p>
                    </Link>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <button onClick={() => removeAttachment(result.url)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            <div className="w-full flex justify-end items-center mt-6 gap-4">
              <button
                className="w-40  border py-1.5 text-black rounded-md"
                type="button"
                onClick={handleBack}
              >
                Cancel
              </button>
              <button
                className="w-40  bg-black py-1.5 text-white rounded-md"
                onClick={handleNextAttachment}
              >
                Save & Next
              </button>
            </div>
          </>
        ) : (
          <div className="w-full h-3/4 flex justify-center items-center border mt-2">
            <p className="text-black/70 font-medium text-sm">
              No file uploaded
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectAttachment;
