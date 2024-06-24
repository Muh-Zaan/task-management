import Link from "next/link";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-14 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Project Joined</h1>
        <Link href={"/project/create"}>
          <button className="px-6 py-2 rounded-md text-white bg-gradient-to-tl from-primary to-sky-500">
            Create project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
