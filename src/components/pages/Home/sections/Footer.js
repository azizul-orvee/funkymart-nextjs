import React from 'react';

export const Footer = () => {
  return (
    <div className='flex justify-center'>
      <div className='bg-[#ffeef2] my-20 rounded-[20px] container align-middle'>
        <div className='flex justify-between p-24'>
          <div className='flex gap-14'>
            <div>funky logo</div>
            <div className='flex flex-col'>
              <div className='font-promomedium text-[#2f3292]'>About</div>
              <div className='font-promomedium text-[#2f3292]'>Explore</div>
              <div className='font-promomedium text-[#2f3292]'>My NFT's'</div>
            </div>

            <div className='flex flex-col'>
              <div className='font-promomedium text-[#2f3292]'>Donutville</div>
              <div className='font-promomedium text-[#2f3292]'>Funky Mart</div>
              <div className='font-promomedium text-[#2f3292]'>The Bakery</div>
              <div className='font-promomedium text-[#2f3292]'>Town Hall</div>
              <div className='font-promomedium text-[#2f3292]'>
                Funky Tavern
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='font-promomedium text-[#2f3292]'>FAQ</div>
              <div className='font-promomedium text-[#2f3292]'>Stacks</div>
              <div className='font-promomedium text-[#2f3292]'>Hiro Wallet</div>
            </div>
          </div>

          <div className='flex flex-col gap-12'>
            <div className='flex gap-5'>
              <div>twitter</div>
              <div>discord</div>
            </div>

            <button className='connect-wallet-btn font-PoppinsRegular'>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
