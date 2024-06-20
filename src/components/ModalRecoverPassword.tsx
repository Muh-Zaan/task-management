import { sendEmail } from "@/lib/nodemailer";
import axios from "axios";
import React, { ChangeEvent } from "react";
import { MoreHorizontal, X } from "react-feather";

type Props = {
  email: string;
  loading: boolean;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
};

const ModalRecoverPassword = ({
  email,
  loading,
  onChangeEmail,
  onSubmit,
}: Props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center z-50 fixed top-0 left-0 bg-slate-100/50 backdrop-blur-sm">
      <div className="w-1/4 bg-gray-700 text-white rounded-lg">
        <div className="flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-semibold">Recover Password</h1>
          <button className="p-2 rounded-md hover:bg-gray-800 duration-200">
            <X size={20} />
          </button>
        </div>
        <hr />
        <div className="py-4 px-6">
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <div className="flex flex-col gap-1.5">
              <p className="font-medium">
                Email<span className="text-red-500">*</span>
              </p>
              <input
                value={email}
                placeholder="Please input your email"
                type="text"
                className="border border-gray-400 py-2 px-4 outline-none rounded-md bg-gray-600"
                onChange={onChangeEmail}
              />
            </div>
            <button className="bg-gray-800 py-2 rounded-md flex justify-center items-center">
              {!loading ? <span>Send Email</span> : <MoreHorizontal />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalRecoverPassword;
