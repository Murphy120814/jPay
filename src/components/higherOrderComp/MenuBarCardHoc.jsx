import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function MenuBarCardHoc({ children, CardContent }) {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="bg-[#2d2d2d] border-none outline-none text-white font-semibold mt-1">
        <CardContent />
      </PopoverContent>
    </Popover>
  );
}

export default MenuBarCardHoc;
