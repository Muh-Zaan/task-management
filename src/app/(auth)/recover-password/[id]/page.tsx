"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const RecoverPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const id = usePathname().split("/")[2];

  const submitUpdate = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = {
        id,
        password: newPassword,
      };
      const response = await axios.put("/api/v1/recovery-password", data);
      if (response.status == 200) {
        alert("success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Recover Password</h1>
      <p className="mt-1 font-medium text-black/70">
        Fill in your new password, AND DONT FORGET IT
      </p>
      <form
        className="w-full flex flex-col gap-5 mt-10"
        onSubmit={submitUpdate}
      >
        <div className="flex flex-col gap-1">
          <p className="font-medium">
            New Password<span className="text-red-500">*</span>
          </p>
          <input
            value={newPassword}
            placeholder="Please input new password"
            type="password"
            className="border py-2 px-4 outline-none rounded-md"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setNewPassword(event.target.value);
            }}
          />
        </div>
        <button className="text-white bg-black py-2 rounded-md font-medium">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default RecoverPassword;
