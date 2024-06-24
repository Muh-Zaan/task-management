import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { BookOpen, Clipboard, Home, LogOut } from "react-feather";

const Sidebar = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-20 flex justify-center items-center">
        <div className="h-6 w-6 rotate-45 bg-black rounded"></div>
      </div>
      <div
        className="w-full px-8 py-4"
        style={{
          height: "calc(100% - 80px - 128px)",
        }}
      >
        <p className="text-sm text-slate-400 font-medium">List Menu</p>
        <div className="w-full mt-3 flex flex-col gap-2">
          <Link href={"/dashboard"}>
            <button className="flex justify-start items-center gap-3 px-4 py-3 rounded w-full">
              <Home size={18} strokeWidth={2} />
              <span className="font-medium">Dashboard</span>
            </button>
          </Link>
          <button className="flex justify-start items-center gap-3 px-4 py-3 rounded w-full">
            <Clipboard size={18} strokeWidth={2} />
            <span className="font-medium">My Task</span>
          </button>
          <Link href={"/project"}>
            <button className="flex justify-start items-center gap-3 px-4 py-3 rounded w-full">
              <BookOpen size={18} strokeWidth={2} />
              <span className="font-medium">Project</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-32 px-8 pb-8 flex flex-col justify-end">
        <button
          className="flex justify-start items-center gap-3 bg-gray-100 hover:bg-gray-300 px-4 py-3 rounded duration-200"
          onClick={() => signOut()}
        >
          <LogOut size={18} strokeWidth={2.5} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
