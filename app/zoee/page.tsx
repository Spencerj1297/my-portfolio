"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "@splidejs/react-splide/css/sea-green";
// @ts-ignore
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandTailwind,
  IconBrandAws,
} from "@tabler/icons-react";

type Tech = {
  title: string;
  icon: JSX.Element | string; // Assuming icon can be either a JSX element or a string
};

export default function Zoee() {
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

  const techForZoee = () => {
    const zoeeTech: Tech[] = [
      { title: "React.js", icon: <IconBrandReact /> },
      { title: "TypeScript", icon: <IconBrandTypescript /> },
      { title: "Tailwind", icon: <IconBrandTailwind /> },
      { title: "Python", icon: <IconBrandPython /> },
      { title: "AWS", icon: <IconBrandAws /> },
      { title: "Cronofy", icon: "" },
      { title: "Stripe", icon: "" },
      { title: "Courier", icon: "" },
      { title: "Retool", icon: "" },
    ];

    return (
      <Splide
        className="lg:w-3/6 flex justify-center items-center "
        options={options}
        aria-label="My Favorite Images"
      >
        {zoeeTech.map((tech, index: number) => (
          <SplideSlide
            interval="1000"
            className="flex justify-center items-center w-32 gap-4 text-aqua"
            key={index}
          >
            <p className="text-center text-4xl">{tech.title}</p>
            <i>{tech.icon}</i>
          </SplideSlide>
        ))}
      </Splide>
    );
  };

  return (
    <main className="min-h-screen p-4 lg:py-24 lg:px-44 flex flex-col gap-16 bg-gradient-custom">
      <div className="w-full h-3/6 flex justify-center">
        <motion.div style={{ y }} className="w-6/6 lg:w-4/6 z-0 ">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="w-full object-cover z-10 opacity-20 glowing-shadow"
          >
            <source src="/home/zoee-video.mp4" type="video/mp4" />
            Sorry, your browser doesn&apost support videos.
          </video>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 -mt-32 lg:-mt-96 z-10">
        <h1 className="text-9xl text-customGrey text-center">Zoee</h1>
        <div className="w-full border-2 border-aqua lg:mt-16"></div>

        <div className="flex justify-center items-center flex-col lg:flex-row w-full text-3xl text-customGrey lg:mt-16">
          <p className="lg:w-3/6 bg-black bg-opacity-20 p-4 rounded-xl">
            &ldquo; Zoee is a gateway to connection through a powerful online
            experience. We take coaches into the future of coaching with a fully
            integrated virtual office including video chat, client management,
            communication tools (including live chat), custom programs, and
            seamless scheduling and billing &ldquo; <br />
            <br /> As my current place of employment you can find me using all
            of these technologies daily to create new features, improve the code
            base, and bring positivity to the team!
          </p>
          {techForZoee()}
        </div>
        <div className="flex gap-2 w-full mt-32 text-2xl">
          <div className="w-3/6 flex flex-col">
          <h2 className="text-4xl text-customGrey text-center">Path of Personal Growth</h2>
            <p className=" bg-customGrey p-4 rounded-xl ">
              Starting as an intern at Zoee, I was hired as a junior developer
              primarily focused on frontend aspects of the software, then
              quickly took on more challenging backend work. Along this journey,
              I contributed to key aspects of our software, from frontend API to
              backend solutions, and mentored newcomers to our team.
            </p>
          </div>
          <div className="w-3/6">
            <p className=" bg-customGrey p-4 rounded-xl ">
              Starting as an intern at Zoee, I was hired as a junior developer
              primarily focused on frontend aspects of the software, then
              quickly took on more challenging backend work. Along this journey,
              I contributed to key aspects of our software, from frontend API to
              backend solutions, and mentored newcomers to our team.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
