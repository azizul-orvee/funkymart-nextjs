import Image from "next/image";
import React from "react";
import header1 from "../../../../assets/images/header1.png";
import header2 from "../../../../assets/images/header2.png";

export const HomeWelcome = () => {
  return (
    <div className="flex justify-between max-h-screen bg-[#97b0ff]">
      <div>
        <Image src={header1} alt="Welcome" width={600} height={940} />
      </div>
      <div className="flex flex-col text-center justify-center">
        <div className="font-promobold text-[#ffd9e0] text-[70px] text-center">
          Welcome to the Donutville!
        </div>
        <div className="font-poppinsregular text-[#2f3292]">
          Explore our fun & magical donut village and find out more about our
          tasty Funky Donut NFT’s!
        </div>
      </div>
      <div>
        <Image src={header2} alt="Welcome" width={600} height={940} />
      </div>
    </div>
  );
};
