"use client";
import Modal from "@/components/Modal";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const accountData = localStorage.getItem("account-data");
    if (accountData != null) {
      const data = JSON.parse(accountData);
      setEmail(data.email);
      setPassword(data.password);
      setRemember(true);
    }
  }, []);

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    const account = localStorage.getItem("account-data");
    if (remember) {
      localStorage.setItem(
        "account-data",
        JSON.stringify({
          email,
          password,
        })
      );
    } else if (!remember && account) {
      localStorage.removeItem("account-data");
    }
    event.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then((response) => {
      if (response && response.ok) {
        router.push("/dashboard");
      } else {
        alert(response?.error);
      }
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Welcome back user!</h1>
      <p className="mt-1 font-medium text-black/70">
        Please input the form bellow to access your account
      </p>
      <form className="w-full flex flex-col gap-5 mt-10" onSubmit={onSubmit}>
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
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <input
              checked={remember}
              type="checkbox"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setRemember(event.target.checked);
              }}
            />
            <p className="text-sm font-medium">Remember Me</p>
          </div>
          <button className="text-sm font-medium" type="button">
            Forgot Password ?
          </button>
        </div>
        <button
          className="text-white bg-black py-2 rounded-md font-medium"
          type="submit"
        >
          Login
        </button>
        <div className="flex justify-center gap-1">
          <p>Dont have an account yet ?</p>
          <Link href={"/register"} className="text-blue-500 font-medium">
            Register
          </Link>
        </div>
      </form>
      <Modal />
    </div>
  );
};

export default LoginPage;
