import Image from "next/image";
import React from "react";
import AuthImage from "./../../../public/assets/image/auth.jpg";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen px-40 py-28 bg-[#eaeaea]">
      <div className="w-full h-full flex bg-white rounded-xl overflow-hidden shadow-xl">
        <div className="w-2/4 p-20">{children}</div>
        <div className="w-2/4 relative">
          <Image
            src={AuthImage}
            fill
            alt="auth-image..."
            sizes="1000px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
