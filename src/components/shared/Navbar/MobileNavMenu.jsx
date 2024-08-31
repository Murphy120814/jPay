import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HoverCardHoc from "@/components/higherOrderComp/HoverCardHoc";
import mapSvg from "../../../assets/maps.svg";
import hamburgerSvg from "../../../assets/hamburger.svg";
import { BiChevronRight } from "react-icons/bi";
import DropdownCard from "@/components/DropdownCard";
import MenuBarCardHoc from "@/components/higherOrderComp/MenuBarCardHoc";
// import { MenubarItem, MenubarSeparator } from "@/components/ui/menubar";
import closeIconSvg from "../../../assets/cross.svg";
function MobileNavMenu() {
  const navMenuRef = useRef(null);
  //   const [isOpen, setIsOpen] = useState(false);

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

  {
    /* <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem> */
  }
  //   const CardContent = () => {
  //     return (
  //       <div className="w-full flex flex-col items-start">
  //         <p className="cursor-pointer px-3 hover:text-[#0B65E3] font-medium hover:font-semi  bold">
  //           About Us
  //         </p>

  //         <p className="cursor-pointer px-3 hover:text-[#0B65E3] font-medium hover:font-semibold">
  //           Docs
  //         </p>

  //         <p className="cursor-pointer px-3 hover:text-[#0B65E3] font-medium hover:font-semibold">
  //           Integration
  //         </p>

  //         <button className="bg-transparent font-bold rounded-full  py-2 text-blue-500 hover:text-[#0B65E3] flex items-center ">
  //           <span>Contact us</span>
  //           <BiChevronRight className="text-blue-500 group-hover:text-[#0B65E3] " />
  //         </button>
  //       </div>
  //     );
  //   };
  const CardContent = () => {
    return (
      <div className="w-full flex flex-col items-start space-y-4 py-4">
        <p className="cursor-pointer px-4 hover:text-[#0B65E3] font-medium hover:font-semibold transition-colors">
          About Us
        </p>
        <p className="cursor-pointer px-4 hover:text-[#0B65E3] font-medium hover:font-semibold transition-colors">
          Docs
        </p>
        <p className="cursor-pointer px-4 hover:text-[#0B65E3] font-medium hover:font-semibold transition-colors">
          Integration
        </p>
        <button className="bg-transparent font-bold rounded-full px-4 py-2 text-blue-500 hover:text-[#0B65E3] flex items-center transition-colors">
          <span>Contact us</span>
          <BiChevronRight className="ml-1 text-blue-500 group-hover:text-[#0B65E3]" />
        </button>
      </div>
    );
  };
  return (
    <div
      ref={navMenuRef}
      className="flex items-center gap-2 text-md text-[#f4f4f4] lg:hidden ">
      <MenuBarCardHoc CardContent={DropdownCard}>
        <img src={mapSvg} alt="maps svg" className="w-10 h-10"></img>
      </MenuBarCardHoc>

      <MenuBarCardHoc CardContent={CardContent}>
        <img src={hamburgerSvg} alt="maps svg" className="w-9 h-9 "></img>
      </MenuBarCardHoc>
    </div>
  );
}

export default MobileNavMenu;
