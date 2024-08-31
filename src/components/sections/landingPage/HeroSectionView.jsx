import React, { useEffect, useRef, useState } from "react";
import SlotMachineAnimation from "@/components/SlotMachineAnimation";
import gsap from "gsap";
import CTAPrimaryButton from "@/components/CTAPrimaryButton";
function HeroSectionView() {
  const heroContainerRef = useRef(null);
  const slotMachineContainerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  // const [startButtonAnimation, setStartButtonAnimation] = useState(false);
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      heroContainerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.in",
        delay: 1,
      }
    );

    timeline
      .fromTo(
        slotMachineContainerRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          delay: 2.5,
        }
      )
      .then(() => {
        setStartAnimation(true);
      });
  }, []);
  return (
    <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 lg:gap-[0px] items-center justify-center  w-full md:mt-6">
      <div
        className="flex w-full flex-col items-center justify-center  z-50 px-4"
        ref={heroContainerRef}>
        <h1 className=" text-[#F5F5F5] text-center text-[40px] lg:text-[94px] pb-2 font-medium not-italic lg:font-[500] leading-[120%] tracking-[-1.2px] lg:tracking-[-1.4px] overflow-hidden">
          {" "}
          Payments designed for{" "}
        </h1>
        <div
          className="flex max-sm:flex-col flex-row min-h-20 lg:min-h-24 gap-6 max-sm:gap-0 max-sm:mt-0 md:mt-2 lg:-mt-4"
          ref={slotMachineContainerRef}>
          <div className="max-sm:-mb-4">
            <SlotMachineAnimation
              text="GLOBAL"
              startAnimation={startAnimation}
            />{" "}
          </div>
          {/* <div className="w-full max-sm:-mt-4"> */}
          <SlotMachineAnimation
            text="OUTCOMES"
            startAnimation={startAnimation}
          />{" "}
          {/* </div> */}
        </div>
        <div className="hidden max-w-[642px] justify-center items-center lg:px-14 lg:pt-[115px] animate-delayVisibility text-center cursor-pointer lg:flex z-50">
          <h2 className="text-[#BCBCBF] text-[19.027px] not-italic font-normal  animate-slideFromBottom leading-[150%]">
            <span className="font-semibold text-[#FFF] ">Juspay</span> powers
            leading enterprises around the world, simplifying global coverage,
            orchestration, conversions, fraud reduction and seamless customer
            experiences.
          </h2>
        </div>

        <CTAPrimaryButton />
      </div>{" "}
    </div>
  );
}

export default HeroSectionView;
