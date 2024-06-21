import React from "react";
import { BookOpen, Icon } from "react-feather";

type Props = {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
};

const SummaryCard = ({ icon, title, subTitle }: Props) => {
  return (
    <div className="w-full h-full px-6 rounded-xl flex justify-start items-center bg-white gap-4 cursor-pointer group">
      <div className="w-14 h-14 bg-secondary flex rounded-full justify-center items-center group-hover:bg-gradient-to-tl group-hover:from-primary group-hover:to-sky-500">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-400">{title}</p>
        <h1 className="text-xl font-bold">{subTitle}</h1>
      </div>
    </div>
  );
};

export default SummaryCard;
