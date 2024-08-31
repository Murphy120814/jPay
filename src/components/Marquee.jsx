import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import {
  agoda,
  amazon,
  burgerKing,
  flipkart,
  google,
  indigo,
  lenskart,
  mcdonald,
  microsoft,
  onePlus,
  startbucks,
  urbanCompany,
  xiomi,
} from "@/assets/index";
const brands = [
  agoda,
  amazon,
  burgerKing,
  flipkart,
  google,
  indigo,
  lenskart,
  mcdonald,
  microsoft,
  onePlus,
  startbucks,
  urbanCompany,
  xiomi,
];

const Marquee = () => {
  const marqueeRef = useRef(null);
  const brandsContainerRef = useRef(null);

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;
    const brandsContainer = brandsContainerRef.current;

    if (!marquee || !brandsContainer) return;

    const imagePromises = Array.from(brandsContainer.children).map((img) => {
      return new Promise((resolve) => {
        if (img.complete) resolve();
        else img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      const brandElements = brandsContainer.children;
      const totalWidth = Array.from(brandElements).reduce(
        (acc, brand) => acc + brand.offsetWidth,
        0
      );

      const tl = gsap.timeline({ repeat: -1 });

      gsap.set(brandsContainer, { x: 0 });

      tl.to(brandsContainer, {
        duration: 15,
        x: -totalWidth,
        ease: "none",
        onComplete: () => {
          gsap.set(brandsContainer, { x: 0 });
        },
      });

      gsap.set(marquee, {
        mask: "linear-gradient(90deg, transparent, black 30%, black 70%, transparent)",
      });
    });

    return () => {
      gsap.killTweensOf(brandsContainer);
    };
  }, []);
  return (
    <div
      className="max-w-[1720px] w-full bg-transparent mt-6 overflow-hidden relative px-4 lg:px-20 py-12"
      ref={marqueeRef}>
      <div
        className="flex gap-16 items-center justify-around "
        ref={brandsContainerRef}>
        {brands.map((brand, index) => (
          <img
            src={brand}
            key={index}
            className="h-8 md:h-10 lg:h-12 max-w-[unset]"></img>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
