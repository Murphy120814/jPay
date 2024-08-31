import React, { useEffect, useRef } from "react";
import { BiChevronRight } from "react-icons/bi";
import { gsap } from "gsap";

function CTAPrimaryButton({ startAnimation = true }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      {
        width: 0,
        opacity: 0,
      },
      {
        width: "auto",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 5.5,
        onStart: () => {
          buttonRef.current.style.overflow = "hidden";
        },
        onComplete: () => {
          buttonRef.current.style.overflow = "visible";
        },
      }
    );
  }, []);

  return (
    <div
      ref={buttonRef}
      className="flex items-center space-x-1 w-fit h-[65px] justify-center gap-2 shrink-0 px-10 py-5 rounded-[86px] z-10 mt-[50px] lg:mt-[64px] bg-customGradient cursor-pointer  ">
      <span className="text-[#FFF] text-lg not-italic font-semibold leading-[120%] overflow-hidden text-nowrap">
        Schedule a demo
      </span>
      <BiChevronRight className="text-white" />
    </div>
  );
}

export default CTAPrimaryButton;
