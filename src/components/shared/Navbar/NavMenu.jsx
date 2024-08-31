import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HoverCardHoc from "@/components/higherOrderComp/HoverCardHoc";
import mapSvg from "../../../assets/maps.svg";
import { BiChevronRight } from "react-icons/bi";
import DropdownCard from "@/components/DropdownCard";
function NavMenu() {
  const navMenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navMenuRef.current.children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 3,
      }
    );
  }, []);

  return (
    <div
      ref={navMenuRef}
      className="hidden lg:flex lg:items-center lg:gap-4 lg:text-lg text-[#f4f4f4] ">
      <p className="cursor-pointer px-3 hover:text-[#0B65E3] font-medium hover:font-semi  bold">
        About Us
      </p>

      <p className="cursor-pointer px-3 hover:text-[#0B65E3] font-medium hover:font-semibold">
        Docs
      </p>
      <p className="cursor-pointer px-3 hover:text-[#0B65E3] font-medium hover:font-semibold">
        Integration
      </p>
      <HoverCardHoc CardContent={DropdownCard}>
        <img src={mapSvg} alt="maps svg" className="w-12 h-12"></img>
      </HoverCardHoc>

      <button className="bg-transparent font-bold rounded-full  py-2 text-blue-500 hover:text-[#0B65E3] flex items-center space-x-1 ">
        <span>Contact us</span>
        <BiChevronRight className="text-blue-500 group-hover:text-[#0B65E3] " />
      </button>
    </div>
  );
}

export default NavMenu;
