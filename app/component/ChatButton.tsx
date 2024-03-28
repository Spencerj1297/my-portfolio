"use client";
// ChatButton.js
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export const ChatButton = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex justify-center items-center mt-8">
        <button className="btn btn-one" onClick={handleClick}>
          Let&apos;s chat
        </button>
      </div>
    </div>
  );
};
