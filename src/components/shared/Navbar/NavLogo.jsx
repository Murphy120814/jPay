"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import jusPayLogo from "@/assets/logo.png";

function NavLogo() {
  const logoRef = useRef(null);
  const textRefs = useRef({});

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo Animation
    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        x: 70,
      },
      {
        opacity: 1,
        rotation: -360,
        x: 24,
        duration: 2,
        repeat: 0,
        yoyo: false,
        delay: 3.5,
        ease: "power1.inOut",
      }
    );

    // Staggered Text Animation (starts slightly before the logo animation ends)
    tl.fromTo(
      textRefs.current.sp,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.15, ease: "power3.out" },
      "-=0.15" // Start this animation 0.15 seconds before the logo animation ends
    )
      .fromTo(
        textRefs.current.ju,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.15, ease: "power3.out" },
        "-=0.1" // Start this animation 0.1 seconds after "SP" begins
      )
      .fromTo(
        textRefs.current.ay,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.15, ease: "power3.out" },
        "-=0.1" // Start this animation 0.1 seconds after "JU" begins
      );
  }, []);

  return (
    <div className="flex items-center cursor-pointer">
      <div
        ref={logoRef}
        className="max-sm:w-[25px] max-sm:h-[25px] md:w-[37px] md:h-[37px]">
        <img
          className="w-full h-full"
          alt="JusPay Logo Image"
          src={jusPayLogo}
        />
      </div>
      <div className="flex items-center ml-[30px] md:text-[25px] lg:text-[30px] font-semibold">
        <span ref={(el) => (textRefs.current.ju = el)} className="text-white ">
          JU
        </span>
        <span ref={(el) => (textRefs.current.sp = el)} className="text-white ">
          SP
        </span>
        <span ref={(el) => (textRefs.current.ay = el)} className="text-white ">
          AY
        </span>
      </div>
    </div>
  );
}

export default NavLogo;
