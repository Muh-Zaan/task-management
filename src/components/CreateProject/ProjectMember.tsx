import React from "react";
import { Minus, Plus, Search } from "react-feather";

const ProjectMember = () => {
  return (
    <div className="w-full h-full flex gap-10">
      <div className="w-1/3 h-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2 h-[66px]">
          <p className="text-sm font-semibold text-black/70">Member Project</p>
          <div className="w-full relative">
            <input
              className="px-4 py-2 text-sm font-medium border rounded-lg outline-none w-full"
              placeholder="Search name user"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Search size={18} />
            </div>
          </div>
          {/* User sudah dipilih */}
          {/* <div className="w-full hg=-full border px-4 py-4 rounded-lg flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <p className="font-medium">Burhanudin Balapan</p>
              <div className="px-2 py-1 bg-gradient-to-tl from-blue-700 to-blue-500 rounded-full">
                <p className="text-white font-medium text-xs">Project Leader</p>
              </div>
            </div>
            <div className="p-1 bg-gray-300 rounded-full cursor-pointer">
              <Minus size={14} />
            </div>
          </div> */}
          {/* END USER SUDAH DIPIPIH */}
        </div>
        {/* Ini muncul kalo udah milih user */}
        {/* <div className="w-full flex flex-col gap-2 mt-4">
          <p className="text-sm font-semibold text-black/70">User Role</p>
          <select className="px-4 py-2 text-sm font-medium border rounded-lg outline-none w-full">
            <option>Member</option>
            <option>Project Leader</option>
            <option>QA Testing</option>
            <option>Designer</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button className="text-white text-sm bg-black px-6 py-2 rounded-lg">
            Add Member
          </button>
        </div> */}
        {/* END MUNCUL MILIH USER */}
        <div
          className="w-full border-2 border-dashed rounded-lg p-6"
          style={{
            height: "calc(100% - 66px)",
          }}
        >
          {/* Default */}
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-base text-black/70">
              Please input name of user first
            </p>
          </div>
          {/* End Default */}
          {/* Before Search User */}
          {/* <div className="w-full flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <p className="font-medium">Burhanudin Balapan</p>
            </div>
            <div className="p-1 bg-black rounded-full">
              <Plus size={18} color="white" />
            </div>
          </div> */}
          {/* End After Search User */}
        </div>
      </div>
    </div>
  );
};

export default ProjectMember;
