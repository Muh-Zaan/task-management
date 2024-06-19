"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1>Hallo Users!</h1>
      <div className="flex gap-4 items-center">
        <button
          className="bg-black text-white px-8 py-2 rounded-full"
          onClick={() => signIn()}
        >
          Lets start the world!
        </button>
        <button
          className="bg-black text-white px-8 py-2 rounded-full"
          onClick={() => router.push("/dashboard")}
        >
          Go to dashboard!
        </button>
      </div>
    </div>
  );
}
