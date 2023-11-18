import { Hero } from "../components/Hero";
import { Quote } from "../components/Quote";
import { FeaturedVehicles } from "../components/FeaturedVehicles";
import { GetRewards } from "../components/GetRewards";
import { ScrollRestoration } from "react-router-dom";

export function Home() {
  return (
    <>
      <ScrollRestoration />
      <Hero />
      <Quote />
      {/* <Features /> */}
      <GetRewards />
      <FeaturedVehicles />
    </>
  );
}
