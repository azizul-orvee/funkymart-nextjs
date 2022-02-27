import { useEffect, useState } from "react";
import {
  About,
  DonutSlider,
  FunkyMart,
  HomeWelcome,
  PlaneLanding,
  SliderSlick,
  Village,
} from "../components/pages/Home";

export default function Home() {
  return (
    <div>
      <div className="scroll">
        <section className="one">
          <PlaneLanding />
        </section>
        <section>
          <HomeWelcome />
        </section>
        <section>
          <Village />
        </section>
        <section>
          <About />
        </section>
        <section>
          <FunkyMart />
        </section>
        <section>
          <DonutSlider />
        </section>
      </div>
    </div>
  );
}
