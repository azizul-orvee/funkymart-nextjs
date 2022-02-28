import React from "react";
import funkumartlottiee from "../../../../assets/lotties/funkymart.json";
import Lottie from "react-lottie-player";

export const FunkyMart = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col gap-3">
        <div className="font-promobold text-[#ffd9e0] text-[70px] text-center outline-black">
          Funky Mart
        </div>
        <div className="font-poppinsregular text-[#2f3292]">
          The Funky Mart is a place where you can buy new <br /> accessories for
          your Funky Donuts. Whether you want
          <br /> a special hat, glasses or a rare item all of these will be
          <br /> available to buy here using STX or $FUN tokens!
        </div>
        <div>
          {" "}
          <button className="connect-wallet-btn font-PoppinsRegular">
            Connect Wallet
          </button>
        </div>
      </div>
      <div>
        <Lottie play animationData={funkumartlottiee} />
      </div>
    </div>
  );
};
