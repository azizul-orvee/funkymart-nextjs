import {
  About,
  DonutSlider,
  FunkyMart,
  HomeWelcome,
  PlaneLanding,
  Village,
} from "../components/pages/Home";

export default function Home() {
  return (
    <div>
      <div>
        <PlaneLanding />
        <HomeWelcome />
        <Village />
        <About />
        <FunkyMart />
        {/* <DonutSlider /> */}
      </div>
    </div>
  );
}
