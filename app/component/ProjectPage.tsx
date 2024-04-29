"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion, useScroll, useTransform } from "framer-motion";
import "@splidejs/react-splide/css/sea-green";
// @ts-ignore
import { FC, useEffect, useState } from "react";

type Tech = {
  title: string;
  icon: JSX.Element | string;
};

interface Props {
  tech: Tech[];
  pageTitle: string;
  pageDescription: string;
  pagePersonalGrowth: string;
  pageVideo: string;
  pageLink?: string;
}

export const ProjectPage: FC<Props> = ({
  tech,
  pageTitle,
  pageDescription,
  pagePersonalGrowth,
  pageVideo,
  pageLink,
}) => {
  const [theme, setTheme] = useState<string | null>(null);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    wheelMinThreshold: 30,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    wheel: true,
    height: "15rem",
  };

  const handleSkills = () => {
    return (
      <Splide
        className="lg:w-3/6 flex justify-center items-center "
        options={options}
        aria-label="My Favorite Images"
      >
        {tech.map((tech, index: number) => (
          <SplideSlide
            interval="1000"
            className={`flex justify-center items-center w-32 gap-4 ${
              theme === "cyber" ? "text-elegantPink" : "text-aqua"
            }`}
            key={index}
          >
            <p className="text-center text-4xl">{tech.title}</p>
            <i>{tech.icon}</i>
          </SplideSlide>
        ))}
      </Splide>
    );
  };

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

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
    <div
      className={`min-h-screen p-4 lg:py-24 lg:px-44 flex flex-col gap-16 ${
        theme === "cyber" ? "bg-gradient-cyber" : "bg-gradient-custom"
      }`}
    >
      <div className="w-full h-3/6 flex justify-center">
        <motion.div style={{ y }} className="w-6/6 lg:w-4/6 z-0 ">
          <video
            autoPlay
            playsInline
            loop
            muted
            className={`w-full object-cover z-10 opacity-20 ${
              theme === "cyber" ? "cyber-shadow" : "glowing-shadow"
            }`}
          >
            <source src={pageVideo} type="video/mp4" />
            Sorry, your browser doesn&apost support videos.
          </video>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 -mt-32 lg:-mt-96 z-10">
        <h1 className="text-6xl text-customGrey text-center">{pageTitle}</h1>
        <div
          className={`w-full border-2 lg:mt-16 ${
            theme === "cyber"
              ? "cyber-box-shadow border-elegantPink"
              : "skill-box-shadow border-aqua"
          }`}
        ></div>
        <div className="flex justify-center items-center flex-col lg:flex-row w-full text-3xl text-customGrey lg:mt-16">
          <p className="lg:w-3/6 bg-black bg-opacity-20 lg:p-8 rounded-xl">
            {pageDescription}
            <br />
            <br />
            {pageLink && (
              <a
                href={pageLink}
                target="_blank"
                rel="noopener noreferrer"
                className={` ${
                  theme === "cyber"
                    ? "text-elegantPink hover:text-aqua"
                    : "text-aqua hover:text-elegantPink"
                }`}
              >
                view site
              </a>
            )}
          </p>
          {handleSkills()}
        </div>
        <div
          className={`w-full border-2 lg:mt-16 ${
            theme === "cyber"
              ? "cyber-box-shadow border-elegantPink"
              : "skill-box-shadow border-aqua"
          }`}
        ></div>
        <div className="flex gap-2 w-full mt-32 text-2xl">
          <div className="flex flex-col ">
            <h2 className="text-4xl text-customGrey mb-4 font-bold">
              PATH OF PERSONAL GROWTH
            </h2>
            <p className="bg-customGrey p-4 rounded-xl black-box-shadow">
              {pagePersonalGrowth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
