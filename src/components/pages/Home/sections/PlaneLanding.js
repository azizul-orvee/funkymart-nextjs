import { useState, useEffect } from 'react';
import plane from '../../../../assets/lotties/planeLanding.json';
import Lottie from 'react-lottie-player';

export const PlaneLanding = () => {
  const [goTo, setGoTo] = useState(55);
  const [play, setPlay] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    console.log(scroll);

  return (
    <div>
      <div className='bg-red-800 max-w-full h-screen overflow-hidden '>
        <Lottie play={play} goTo={goTo} animationData={plane} />
      </div>
      <input
        style={{ width: '100%' }}
        type='range'
        min='0'
        max='323'
        value={goTo}
        onChange={(e) => setGoTo(parseInt(e.target.value, 10))}
        step='1'
      />
    </div>
  );
};
