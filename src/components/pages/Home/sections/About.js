import React from "react";
import aboutlottiee from "../../../../assets/lotties/about.json";
import Lottie from "react-lottie-player";

export const About = () => {
  return (
    <div className="flex justify-around items-center bg-[#97b0ff]">
      <div>
        <Lottie play animationData={aboutlottiee} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-promobold text-[#ffd9e0] text-[70px] text-center">
          About
        </div>
        <div className="font-poppinsregular text-[#2f3292]">
          Funky Donuts are a collection of 3,000 funky, fun & <br /> rather
          tasty donut NFT’s on the Stacks blockchain,
          <br /> secured by Bitcoin! They come in a variety of mouth-
          <br />
          watering flavours, toppings and 'funky' accessories!
        </div>
        <div>
          <button className="connect-wallet-btn">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};
