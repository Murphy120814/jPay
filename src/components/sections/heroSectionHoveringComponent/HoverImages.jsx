import React, { useState, useEffect, useCallback } from "react";

const HoverImages = ({ leftImage, rightImage }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Console log to check if props are received
  console.log("Left Image:", leftImage);
  console.log("Right Image:", rightImage);

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && windowWidth >= 1024) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [windowWidth, handleMouseMove, handleResize]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  if (windowWidth < 1024) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div>
        <div
          className="absolute w-[200px] h-[200px] rounded-3xl transition-all duration-300 ease-out bg-red-200 "
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            opacity: mousePosition.x < windowWidth / 2 ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${
              mousePosition.x < windowWidth / 2 ? 1 : 0.8
            })`,
          }}>
          <img
            src={leftImage}
            alt="Right hover image"
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="absolute w-[200px] h-[200px] rounded-3xl transition-all duration-300 ease-out bg-blue-200"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            opacity: mousePosition.x >= windowWidth / 2 ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${
              mousePosition.x >= windowWidth / 2 ? 1 : 0.8
            })`,
          }}>
          <img
            src={rightImage}
            alt="Right hover image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HoverImages;
