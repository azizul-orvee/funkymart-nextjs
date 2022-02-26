import {
  About,
  FunkyMart,
  HomeWelcome,
  PlaneLanding,
  Village,
} from '../components/pages/Home';

export default function Home() {
  return (
    <div>
      <div>
        <PlaneLanding />
        <HomeWelcome />
        <Village />
        <About />
        <FunkyMart />
      </div>
    </div>
  );
}
