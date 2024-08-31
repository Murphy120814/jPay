import React from "react";
import {
  latamSvg,
  northAmSvg,
  asiaSvg,
  indiaSvg,
  europeSvg,
} from "@/assets/index";

const mapOptionsObject = [
  { imageSrc: asiaSvg, region: "SouthEast Asia" },
  { imageSrc: latamSvg, region: "Latin America" },
  { imageSrc: northAmSvg, region: "North America" },
  { imageSrc: europeSvg, region: "Europe" },
  { imageSrc: indiaSvg, region: "India" },
];
function DropdownCard() {
  return (
    <div className="w-full">
      <div className="py-3 px-6 text-[#888888] text-sm">Region</div>
      <div className="w-full border-t border-[#3C3636]"></div>
      <div className="px-6 pt-4 pb-6 flex-col gap-6 flex">
        {mapOptionsObject.map((option, index) => {
          return (
            <div className="flex gap-6 items-center" key={index}>
              <img
                src={option.imageSrc}
                className="min-w-8 min-h-8 w-8 h-8 mt-1"></img>
              <div className=" cursor-pointer whitespace-nowrap text-lg text-white font-medium hover:text-[#0561E2]">
                {option.region}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DropdownCard;
