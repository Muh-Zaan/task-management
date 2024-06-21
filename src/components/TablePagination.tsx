import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "react-feather";

const TablePagination = () => {
  return (
    <div className="w-full h-full flex justify-end items-center pt-8 pr-0.5">
      <div className="flex items-center rounded-md overflow-hidden gap-2">
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Rows per page:</p>
            <select className="border px-1 rounded py-1 text-sm border-gray-300 outline-none">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-sm font-medium">1-10 of 20</p>
            <div className="flex items-center justify-center gap-1">
              <button className="w-8 h-8 border flex justify-center items-center rounded-full">
                <ChevronLeft size={20} />
              </button>
              <button className="w-8 h-8 border flex justify-center items-center rounded-full">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
