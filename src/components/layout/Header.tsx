import { useSession } from "next-auth/react";
import React from "react";
import { Bell, MessageCircle } from "react-feather";

const Header = () => {
  const { data: session } = useSession();
  const dataUser: any = session?.user;

  return (
    <div className="w-full h-full flex justify-between items-center px-8">
      <h1 className="text-xl">
        Welcome back, <span className="font-bold">{dataUser?.username}</span>
      </h1>
      <div className="flex justify-end items-center gap-8">
        <div className="flex gap-4 items-center">
          <MessageCircle size={20} />
          <Bell size={20} />
        </div>
        <div className="w-10 h-10 rounded-full bg-black"></div>
      </div>
    </div>
  );
};

export default Header;
