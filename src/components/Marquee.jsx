import React from "react";
import "./marquee.css";
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
} from "@/assets/index"; // Assume assets are imported

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
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {brands.map((brand, index) => (
          <img
            src={brand}
            key={index}
            className="brand-logo"
            alt={`Brand ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
