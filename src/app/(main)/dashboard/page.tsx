"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const DashboardPage = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="">
      <h1>Hallo Dashboard!</h1>
      <div className="flex gap-4 items-center">
        <button
          className="bg-black text-white px-8 py-2 rounded-full"
          onClick={() => signOut()}
        >
          Leave from world!
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
