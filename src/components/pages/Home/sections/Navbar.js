import React from 'react';

export const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center h-[88px] bg-white'>
        <div className='flex gap-10 p-28 items-center'>
          <div>Funky Logo</div>
          <div className='font-poppinsregular text-[#2f3292]'>About</div>
          <div className='font-poppinsregular text-[#2f3292]'>Explore</div>
          <div className='font-poppinsregular text-[#2f3292]'>Donutvile</div>
          <div className='font-poppinsregular text-gray-500'>My NFT's</div>
        </div>
        <div className='flex gap-10 p-28 items-center'>
          <div>twitter</div>
          <div>discord</div>
          <div>
            <button className='connect-wallet-btn font-PoppinsRegular'>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};
