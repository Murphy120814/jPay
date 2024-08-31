import React, { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import rightImage from "../../../assets/general-hover.svg";
import leftImage from "../../../assets/juspay-hover.svg";

const HoverImages = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (
      !containerRef.current ||
      !leftImageRef.current ||
      !rightImageRef.current
    )
      return;
    const element = document.elementFromPoint(e.clientX, e.clientY);
    const zIndex = element ? parseInt(getComputedStyle(element).zIndex, 10) : 0;
    const isRightSide = e.clientX >= window.innerWidth / 2;

    gsap.to([leftImageRef.current, rightImageRef.current], {
      x: e.clientX,
      y: e.clientY,
      opacity: zIndex != 50 ? 0 : 1,
      scale: zIndex != 50 ? 0.5 : 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.set(leftImageRef.current, { display: isRightSide ? "none" : "block" });
    gsap.set(rightImageRef.current, {
      display: isRightSide ? "block" : "none",
    });
  }, []);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && windowWidth >= 1024) {
      const timer = setTimeout(() => {
        window.addEventListener("mousemove", handleMouseMove);
      }, 5000);

      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowWidth, handleMouseMove, handleResize]);

  if (windowWidth < 1024) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <div
        ref={leftImageRef}
        className="absolute w-[150px] h-[150px] rounded-3xl"
        style={{ transform: "translate(-50%, -50%)", opacity: 0 }}>
        <img
          src={leftImage}
          alt="Left hover image"
          className="w-full h-full object-contain"
        />
      </div>
      <div
        ref={rightImageRef}
        className="absolute w-[150px] h-[150px] rounded-3xl"
        style={{ transform: "translate(-50%, -50%)", opacity: 0 }}>
        <img
          src={rightImage}
          alt="Right hover image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default HoverImages;
