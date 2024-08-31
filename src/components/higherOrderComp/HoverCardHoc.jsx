import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

import React from "react";

function HoverCardHoc({ children, CardContent }) {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent className="bg-[#2d2d2d] rounded-lg outline-none border-none">
        <CardContent />
      </HoverCardContent>
    </HoverCard>
  );
}

export default HoverCardHoc;
