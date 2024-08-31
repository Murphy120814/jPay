import React from "react";
import Marquee from "./components/Marquee";
import gridDesktopImage from "@/assets/grid-lg.svg";
import gridMobileImage from "@/assets/gridMb.svg";
import gsap from "gsap";
import HeroSectionView from "./components/sections/landingPage/HeroSectionView";
import Navbar from "../src/components/shared/Navbar/Navbar";
function page() {
  return (
    <>
      <div className="w-full min-h-screen relative bg-[#121316] flex items-center justify-center">
        <Navbar />
        <HeroSectionView />
        <img
          src={gridDesktopImage}
          alt="lgGridImage"
          className="md:block max-sm:hidden"></img>
        <img
          src={gridMobileImage}
          alt="lgGridImage"
          className="md:hidden max-sm:block"></img>
      </div>
      <div className="w-full flex flex-col items-center bg-[#17181B] min-h-screen">
        <Marquee />
      </div>
    </>
  );
}

export default page;
