"use client";
import SummaryCard from "@/components/SummaryCard";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { BookOpen, ChevronRight, Clipboard, Info } from "react-feather";
import DashboardImage from "./../../../../public/assets/image/dashboard.jpg";
import moment from "moment";
import ListProject from "@/components/ListProject";
import TableListTask from "@/components/TableListTask";
import { TaskType } from "@/types/taks";
import TablePagination from "@/components/TablePagination";

const DashboardPage = () => {
  const { data: session } = useSession();

  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const summaryData = [
    {
      title: "Joined Project",
      subTitle: "50 Projects",
      icon: (
        <BookOpen
          className="text-primary group-hover:text-secondary duration-200"
          size={20}
        />
      ),
    },
    {
      title: "Task Assigned",
      subTitle: "405 Tasks",
      icon: (
        <Clipboard
          className="text-primary group-hover:text-secondary duration-200"
          size={20}
        />
      ),
    },
    {
      title: "Pending Task",
      subTitle: "40 Tasks",
      icon: (
        <Clipboard
          className="text-primary group-hover:text-secondary duration-200"
          size={20}
        />
      ),
    },
  ];

  const dummyTable: TaskType[] = [
    {
      id: "1",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "pending",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "2",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "done",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "3",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "pending",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "4",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "on-going",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "5",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "pending",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "6",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "done",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "7",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "done",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "8",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "pending",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "9",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "on-going",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "10",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "pending",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
    {
      id: "11",
      description: "BUATKAN CANDI DALAM 1 JAM SEBANYAK 10 CANDI",
      checkpoint: "6/10",
      expected_deadline: "2024-06-21T23:12:16.678Z",
      created_datetime: "2024-06-21T23:12:16.678Z",
      status: "pending",
      project_name: "Membangun Candi Secepatnya",
      leader: "Muhhamad Burhanudin",
    },
  ];

  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-7 gap-6">
      <div className="col-span-2 row-span-1 w-full h-full grid grid-cols-3 gap-6">
        {summaryData.map((result) => (
          <SummaryCard
            key={result.title}
            title={result.title}
            subTitle={result.subTitle}
            icon={result.icon}
          />
        ))}
      </div>
      <div className="col-span-1 row-span-7 w-full h-full grid grid-rows-4 gap-6">
        <div className="w-full h-full bg-white flex justify-between items-center rounded-xl px-4 gap-8 row-span-1">
          <div>
            <h1 className="text-lg font-bold">
              {moment(new Date()).format("dddd, MMMM DD, YYYY")}
            </h1>
            <p className="text-sm">Dont forget to enjoy & happy!</p>
          </div>
          <Image
            src={DashboardImage}
            width={200}
            sizes="300"
            priority
            alt="image"
          />
        </div>
        <div className="row-span-3 w-full h-full bg-white rounded-xl p-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex gap-2 items-center">
              <h1 className="text-sm text-slate-400 font-medium">
                Joined Project
              </h1>
              <div className="relative group">
                <Info
                  size={12}
                  className="mt-0.5 text-slate-400 cursor-pointer"
                />
                <div className="w-32 absolute -right-36 top-1/2 -translate-y-1/2 invisible group-hover:visible duration-200">
                  <div className="w-full h-full bg-white border rounded-md py-1 px-4 relative">
                    <div className="flex gap-2 items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-xs">On Going</p>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-xs">Done Project</p>
                    </div>
                    <div className="absolute w-4 h-4 top-1/2 -translate-y-1/2 -left-2 rotate-45 border"></div>
                    <div className="w-3 h-[19px] absolute -left-0.5 top-1/2 -translate-y-1/2 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <select className="w-36 px-2 border text-xs py-1.5 font-medium outline-none rounded-md text-start">
              <option>All Project</option>
              <option>On Going</option>
              <option>Done Project</option>
            </select>
          </div>
          <div
            className="overflow-y-auto no-scroll flex flex-col gap-6 pt-4"
            style={{
              height: "calc(100% - 64px)",
            }}
          >
            {array.map((result) => (
              <ListProject key={result} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-6 w-full h-full bg-white rounded-xl p-6">
        <div className="flex justify-between items-center h-10">
          <h1 className="text-xl font-bold">Assigned Taskss</h1>
          <div className="flex gap-4 items-center">
            <input
              className="border px-4 py-2 w-80 rounded-lg text-sm outline-none"
              placeholder="Search task list..."
            />
            <select className="p-2 w-32 border rounded-lg text-sm outline-none">
              <option>All Project</option>
            </select>
            <select className="p-2 w-32 border rounded-lg text-sm outline-none">
              <option>All Status</option>
            </select>
          </div>
        </div>
        <div
          className="w-full mt-6 bg-red-500 overflow-y-auto"
          style={{
            height: "calc(100% - 128px)",
          }}
        >
          <TableListTask data={dummyTable} />
        </div>
        <div className="w-full h-16">
          <TablePagination />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
