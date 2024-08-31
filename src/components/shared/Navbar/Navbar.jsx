import React from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import MobileNavMenu from "./MobileNavMenu";
function Navbar() {
  return (
    <div className=" absolute top-0 px-10 w-full flex items-center justify-center pt-5 z-[9999]">
      <div className="flex items-center justify-between w-[390px] min-w-[288px] max-w-[390px] px-3 py-2 border-[1px] border-[#211f1f] rounded-[90px]  md:w-[690px] md:min-w-[650px] md:max-w-[690px] lg:w-[1392px] lg:min-w-[976px] lg:max-w-[1392px] lg:px-6 lg:py-3 lg:rounded-[61px] lg:pl-9 text-white">
        <NavLogo />
        <NavMenu />
        <MobileNavMenu />
      </div>
    </div>
  );
}

export default Navbar;
