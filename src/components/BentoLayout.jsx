import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const BentoLayout = () => {
  const [expandedBox, setExpandedBox] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const boxRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.to(".bento-box", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  const boxes = [
    { id: 1, color: "bg-blue-100", content: "box 1" },
    { id: 2, color: "bg-green-100", content: "box 2" },
    { id: 3, color: "bg-yellow-100", content: "box 3" },
    { id: 4, color: "bg-pink-100", content: "box 4" },
    { id: 5, color: "bg-purple-100", content: "box 5" },
  ];

  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setExpandedBox(id);
      gsap.to(boxRefs.current[id - 1], {
        duration: 0.5,
        scale: 1.05,
        zIndex: 10,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setExpandedBox(null);
      gsap.to(".bento-box", {
        duration: 0.5,
        scale: 1,
        zIndex: 1,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {boxes.map((box) => (
          <div
            key={box.id}
            ref={(el) => (boxRefs.current[box.id - 1] = el)}
            className={`bento-box ${
              box.color
            } p-4 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer h-48 md:h-64
              ${expandedBox === box.id ? "md:col-span-2" : ""}
              ${expandedBox && expandedBox !== box.id ? "md:col-span-1" : ""}
            `}
            onMouseEnter={() => handleMouseEnter(box.id)}
            onMouseLeave={handleMouseLeave}>
            <div className="h-full w-full flex items-center justify-center text-lg md:text-xl font-bold text-gray-700">
              {box.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoLayout;
