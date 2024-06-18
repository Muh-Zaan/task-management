import React from "react";

const RecoverPassword = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Recover Password</h1>
      <p className="mt-1 font-medium text-black/70">
        Fill in your new password, AND DONT FORGET IT
      </p>
      <form className="w-full flex flex-col gap-5 mt-10">
        <div className="flex flex-col gap-1">
          <p className="font-medium">
            New Password<span className="text-red-500">*</span>
          </p>
          <input
            placeholder="Please input new password"
            type="password"
            className="border py-2 px-4 outline-none rounded-md"
          />
        </div>
        <button
          className="text-white bg-black py-2 rounded-md font-medium"
          type="submit"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default RecoverPassword;
