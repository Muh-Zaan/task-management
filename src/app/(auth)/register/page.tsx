"use client";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Welcome User!</h1>
      <p className="mt-1 font-medium text-black/70">
        Please input the form bellow to register account
      </p>
      <form className="w-full flex flex-col gap-5 mt-10" onSubmit={onSubmit}>
        <div className="flex flex-col gap-1">
          <p className="font-medium">
            Email<span className="text-red-500">*</span>
          </p>
          <input
            placeholder="Please input your email"
            type="text"
            className="border py-2 px-4 outline-none rounded-md"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">
            Password<span className="text-red-500">*</span>
          </p>
          <input
            placeholder="Please input your email"
            type="password"
            className="border py-2 px-4 outline-none rounded-md"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">
            Confirmation Password<span className="text-red-500">*</span>
          </p>
          <input
            placeholder="Please input your email"
            type="password"
            className="border py-2 px-4 outline-none rounded-md"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button
          className="text-white bg-black py-2 rounded-md font-medium"
          type="submit"
        >
          Register
        </button>
        <div className="flex justify-center gap-1">
          <p>Already have an account ?</p>
          <Link href={"/login"} className="text-blue-500 font-medium">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
