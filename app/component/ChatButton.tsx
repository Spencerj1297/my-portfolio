"use client";
import React, { useEffect, useState } from "react";

export const ChatButton = () => {
  const [theme, setTheme] = useState<string | null>(null);



  // let { scrollYProgress } = useScroll();
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme");
      setTheme(newTheme);
    };

    window.addEventListener("storage", handleThemeChange);

    // Immediately update theme state on mount
    const value = localStorage.getItem("theme");
    setTheme(value);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex justify-center items-center mt-8">
        <a href="mailto:spencerfullstckdev@gmail.com">
          <button className={`${theme === "crazy" ? "btn-summer btn-summer-one": "btn btn-one"}`}>Let's chat</button>
        </a>
      </div>
    </div>
  );
};
