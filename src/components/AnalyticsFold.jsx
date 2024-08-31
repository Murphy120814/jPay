import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AdvancedScrollingContainer = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  const menuItems = [
    "List Item 1",
    "List Item 2",
    "List Item 3",
    "List Item 4",
  ];

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      yPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.offsetHeight * (sections.length - 1),
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (sections.length - 1));
          setActiveSection(newIndex);
        },
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="h-screen flex w-full" ref={containerRef}>
        <div className="w-1/4 bg-gray-800 p-6 text-white">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`mb-4 cursor-pointer ${
                  activeSection === index ? "text-blue-400" : ""
                }`}
                onClick={() => {
                  const targetY =
                    window.scrollY +
                    containerRef.current.getBoundingClientRect().top +
                    index * window.innerHeight;
                  window.scrollTo({ top: targetY, behavior: "smooth" });
                }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 overflow-hidden">
          {menuItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="h-screen p-6"
              style={{ backgroundColor: `hsl(${index * 60}, 70%, 80%)` }}>
              <h2 className="text-2xl font-bold mb-4">{item}</h2>
              <p>Content for {item} goes here.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen bg-gray-200 p-6 w-full">
        <h2 className="text-2xl font-bold">Content after scrollable section</h2>
        <p>
          This content appears after youve scrolled through all the sections
          above.
        </p>
      </div>
    </div>
  );
};

export default AdvancedScrollingContainer;
