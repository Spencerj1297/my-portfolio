import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import me from "../assets/me.png";
import { ChatButton } from "./ChatButton";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

export const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [loading, setLoading] = useState<Boolean>(false);
  const [theme, setTheme] = useState<string | null>(null);

  // let { scrollYProgress } = useScroll();
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  useEffect(() => {
    setLoading(true);
  }, []);

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
    <motion.div
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`h-screen mb-4 z-0`}
    >
      <div
        ref={ref}
        className="flex flex-col justify-center items-center md:items-start md:justify-start gap-8 pt-32 lg:pt-8 z-20"
      >
        <h1
          className={`text-6xl lg:text-[150px] ${
            theme === "crazy" ? "text-summerRed" : "text-customGrey"
          } mb-16`}
        >
          Welcome
        </h1>
        <h2
          className={`text-4xl lg:text-[60px] ${
            theme === "crazy" ? "text-summerRed" : "text-customGrey"
          }`}
        >
          I&apos;m Spencer,
          <br />
          <br />
          Software Developer{" "}
        </h2>
        <p
          className={`text-xl lg:text-2xl text-customGrey text-center md:text-start border-l-2  px-4 lg:max-w-3xl lg:mt-12 ${
            theme === "aqua"
              ? "border-aqua"
              : theme === "cyber"
              ? "border-elegantPink"
              : theme === "crazy"
              ? "border-summerPink text-summerRed"
              : "border-aqua"
          }`}
        >
          I specialize in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building accessible,
          human-centered products at Zoee Inc.{" "}
        </p>
      </div>
      <ChatButton />
      <Image
        className={`z-10 absolute top-0 lg:top-1/2 lg:left-32 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 opacity-20 ${
          theme === "crazy" ? "lg:opacity-30" : "lg:opacity-50"
        } rounded-4xl bg-opacity-0/`}
        src={me}
        alt="Picture of me. Spencer Johnson"
      />
      <div
        className={`hidden lg:flex z-10 h-[800px] w-[800px] absolute top-0 -right-96 rounded-full ${
          theme === "aqua"
            ? "glowing-shadow"
            : theme === "cyber"
            ? "cyber-shadow"
            : theme === "crazy"
            ? "crazy-shadow bg-summerYellow bg-opacity-50"
            : "glowing-shadow"
        }`}
      ></div>
    </motion.div>
  );
};
