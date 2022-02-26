import React from 'react';
import villageLottiee from '../../../../assets/lotties/Village.json';
import Lottie from 'react-lottie-player';

export const Village = () => {
  return (
    <div>
      <div className='bg-[#d9ef9d] max-w-full overflow'>
        <Lottie play animationData={villageLottiee} />
      </div>
    </div>
  );
};
