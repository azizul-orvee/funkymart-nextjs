import { useEffect, useState } from "react";
import {
  About,
  DonutSlider,
  Footer,
  FunkyMart,
  HomeWelcome,
  Navbar,
  PlaneLanding,
  SliderSlick,
  Village,
} from "../components/pages/Home";

export default function Home() {
  return (
    <div>
      <div className="scroll">
        <section className="one">
          <Navbar />
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
          <Footer />
        </section>
      </div>
    </div>
  );
}
