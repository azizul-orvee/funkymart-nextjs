import { useState, useEffect } from "react";
import plane from "../../../../assets/lotties/planeLanding.json";
import Lottie from "react-lottie-player";

export const PlaneLanding = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scroll / 4);
  const [play, setPlay] = useState(false);

  return (
    <div>
      <div className="w-full h-screen overflow-hidden">
        <Lottie play={play} goTo={scroll / 4} animationData={plane} />
      </div>
    </div>
  );
};
