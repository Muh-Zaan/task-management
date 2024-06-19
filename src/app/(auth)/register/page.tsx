"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = {
        username,
        email,
        password,
      };

      const response = await axios.post("/api/v1/register", data);
      if (response.status == 201) {
        signIn();
      }
    } catch (error) {
      console.log(error);
    }
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
            Username<span className="text-red-500">*</span>
          </p>
          <input
            value={username}
            placeholder="Please input your username"
            type="text"
            className="border py-2 px-4 outline-none rounded-md"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">
            Email<span className="text-red-500">*</span>
          </p>
          <input
            value={email}
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
            value={password}
            placeholder="Please input your password"
            type="password"
            className="border py-2 px-4 outline-none rounded-md"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
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
