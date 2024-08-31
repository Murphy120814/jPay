import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const characters = "£₣R$€¥₹";

const SlotMachineAnimation = ({ text, className, startAnimation }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (startAnimation) {
      const container = containerRef.current;
      const letters = container.querySelectorAll(".letter");

      letters.forEach((letter, index) => {
        const box = letter.querySelector(".box");
        const chars = gsap.utils.shuffle(characters.split("")).slice(0, 3);
        chars.push(text[index]);

        gsap.set(box, { y: "0%" });

        gsap.to(box, {
          y: "-75%",

          duration: 2,
          ease: "power4.out",
          delay: Math.random() * 0.7,
        });
      });
    }
  }, [text, startAnimation]);

  return (
    <div
      ref={containerRef}
      className={`container grad  text-transparent text-center text-[40px] lg:text-[94px] not-italic leading-[120%] tracking-[-0.05em] lg:tracking-[-0.048em]  font-[700] max-sm:leading-none max-sm:justify-center max-sm:items-center uppercase w-fit p-0 ${className}`}>
      {text.split("").map((char, index) => (
        <div
          key={index}
          className="letter relative overflow-hidden  inline-block w-fit"
          style={{
            height: "1.4em",
            width: "fit-content",
            marginLeft: "-0.035em",
          }}>
          {" "}
          <div className="box  w-full text-gradient" style={{ height: "400%" }}>
            {gsap.utils
              .shuffle(characters.split(""))
              .slice(0, 3)
              .map((c, i) => (
                <div key={i} className="h-1/4 max-sm:1/2 ">
                  {c}
                </div>
              ))}
            <div className="h-1/4 ">{char}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlotMachineAnimation;
