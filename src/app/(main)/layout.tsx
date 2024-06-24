"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StoreProvider from "@/StoreProvider";
import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutDashboard = ({ children }: Props) => {
  return (
    <SessionProvider>
      <StoreProvider>
        <div className="w-screen h-screen flex">
          <div className="w-1/5 h-full">
            <Sidebar />
          </div>
          <div
            className="h-full"
            style={{
              width: "calc(100% - 20%)",
            }}
          >
            <div className="h-20 w-full">
              <Header />
            </div>
            <div
              className="w-full py-8 px-8 bg-gray-400/10 rounded-xl"
              style={{
                height: "calc(100% - 80px)",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </StoreProvider>
    </SessionProvider>
  );
};

export default LayoutDashboard;
