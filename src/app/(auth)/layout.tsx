import Image from "next/image";
import React from "react";
import AuthImage from "./../../../public/assets/image/auth.jpg";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen px-28 py-20 bg-[#f1f1f1]">
      <div className="w-full h-full flex bg-white rounded-xl overflow-hidden shadow-xl">
        <div className="w-2/4 py-20 px-32">{children}</div>
        <div className="w-2/4 relative">
          <Image
            src={AuthImage}
            alt="auth-image..."
            sizes="1000px"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
