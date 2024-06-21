import { TaskType } from "@/types/taks";
import moment from "moment";
import React from "react";

type Props = {
  data: TaskType[];
};

const TableListTask = ({ data }: Props) => {
  return (
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr className="border border-gray-300 block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
          <th className="bg-gray-200 p-2 text-gray-700 font-bold table-cell w-48 text-sm text-start">
            Project
          </th>
          <th className="bg-gray-200 p-2 text-gray-700 font-bold table-cell w-60 text-sm text-start">
            Task Title
          </th>
          <th className="bg-gray-200 p-2 text-gray-700 font-bold table-cell w-24 text-sm text-start">
            Checkpoint
          </th>
          <th className="bg-gray-200 p-2 text-gray-700 font-bold table-cell w-24 text-sm text-start">
            Assign At
          </th>
          <th className="bg-gray-200 p-2 text-gray-700 font-bold table-cell w-24 text-sm text-start">
            Deadline
          </th>
          <th className="bg-gray-200 p-2 text-gray-700 font-bold table-cell w-24 text-sm text-center">
            Status
          </th>
        </tr>
      </thead>
      {data.map((result) => (
        <tbody key={result.id} className="block md:table-row-group">
          <tr className="bg-white border border-gray-300 table-row">
            <td className="p-2  table-cell w-48">
              <div className="w-36">
                <h1 className="truncate text-sm font-medium">
                  {result.project_name}
                </h1>
                <p className="text-xs font-medium text-black/50">
                  {result.leader}
                </p>
              </div>
            </td>
            <td className="p-2  table-cell w-60">
              <p className="truncate w-56 text-sm">{result.description}</p>
            </td>
            <td className="p-2  text-center table-cell w-24 text-sm">
              {result.checkpoint}
            </td>
            <td className="p-2  text-center table-cell w-24">
              <p className="w-20 truncate text-sm">
                {moment(result.created_datetime).format("dddd, MMMM DD, YYYY")}
              </p>
            </td>
            <td className="p-2  text-center table-cell w-24">
              <p className="w-20 truncate text-sm">
                {moment(result.expected_deadline).format("dddd, MMMM DD, YYYY")}
              </p>
            </td>
            <td className="p-2  table-cell w-24" align="center">
              {result.status == "done" ? (
                <div className="w-16 py-0.5 text-xs bg-blue-500 rounded-full text-white font-medium flex justify-center items-center">
                  Done
                </div>
              ) : result.status == "on-going" ? (
                <div className="w-16 py-0.5 text-xs bg-green-500 rounded-full text-white font-medium flex justify-center items-center">
                  On Going
                </div>
              ) : result.status == "pending" ? (
                <div className="w-16 py-0.5 text-xs bg-gray-500 rounded-full text-white font-medium flex justify-center items-center">
                  Pending
                </div>
              ) : (
                <></>
              )}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TableListTask;
