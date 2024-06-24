import Link from "next/link";
import React from "react";
import { Edit, Eye, File, Loader, Trash2, UploadCloud } from "react-feather";

const ProjectAttachment = () => {
  return (
    <div className="w-full h-full flex gap-10">
      <div className="w-1/3 h-full">
        <form className="w-full h-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-black/70">Upload File</p>
            <div className="w-full h-80 border-2 border-dashed rounded-lg gap-3 flex flex-col justify-center items-center">
              <label htmlFor="file-upload" className="w-full h-full">
                <div className="w-full h-full rounded-lg gap-3 flex flex-col justify-center items-center cursor-pointer">
                  <UploadCloud size={32} className="text-gray-600" />
                  <div className="text-center">
                    <p className="text-base text-black/70">
                      Click here to upload file
                    </p>
                    <p className="text-xs text-black/60">
                      can only save files in the format (.pdf .docx .doc)
                    </p>
                  </div>
                </div>
              </label>
              {/* <Loader /> */}
            </div>
            <input id="file-upload" type="file" className="hidden" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-black/70">File Name</p>
            <input
              className="px-4 py-2 text-sm font-medium border rounded-lg outline-none"
              placeholder="Input file name"
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
        <div className="w-full mt-2 flex justify-between items-center border-b pb-4">
          <div className="w-full flex items-center gap-4">
            <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-tl from-gray-200 to-gray-100 rounded-lg">
              <File size={22} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">PRD moodule Project</p>
              <Link
                href={"/"}
                target="_blank"
                className="text-xs text-black/50 font-medium"
              >
                https://linknya-disini-harusnya
              </Link>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Edit size={18} />
            <Eye size={18} />
            <Trash2 size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAttachment;
