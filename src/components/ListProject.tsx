import moment from "moment";
import React from "react";

const ListProject = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex gap-2 items-center">
          <h1 className="text-lg font-semibold">Task Management App</h1>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-sm font-medium text-black/50">
          Started at:{" "}
          <span className="text-black/70">
            {moment(new Date()).format("dddd, MMMM DD, YYYY")}
          </span>
        </p>
      </div>
      <button className="flex justify-center items-center text-sm font-medium">
        Detail Project
      </button>
    </div>
  );
};

export default ListProject;
