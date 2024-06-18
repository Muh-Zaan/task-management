import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1>Hallo Users!</h1>
      <button className="bg-black text-white px-8 py-2 rounded-full">
        Lets start the world!
      </button>
    </div>
  );
}
