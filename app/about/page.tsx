"use client";
import { StaticImageData } from "next/image";
import "@splidejs/react-splide/css/sea-green";
// @ts-ignore
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChatButton } from "../component/ChatButton";
import { IconBrandLinkedin } from "@tabler/icons-react";

type Photos = {
  photo: StaticImageData;
  altText: string;
};

export default function About() {

  const [theme, setTheme] = useState<string | null>(null);

  const getMessage = () => {
    const message = `Thank you for checking out my site. I\'m Spencer, full-stack software developer, surfer, and most importantly, husband to my awesome wife. Feel free to checkout my projects found on the homepage and message me with any questions by hitting the button below`;

    let letters = message.split("");
    let joinedMessage = "";
    const [displayedMessage, setDisplayedMessage] = useState("");
    

    const animateTyping = () => {
      if (letters.length > 0) {
        joinedMessage += letters.shift();
        setDisplayedMessage(joinedMessage);
        setTimeout(animateTyping, 50);
      }
    };

    useEffect(() => {
      animateTyping();
    }, []);

    return (
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-row text-white"
      >
        {displayedMessage}
        {/* <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            loop: Infinity,
            repeatDelay: 0.5,
          }}
        >
          _
        </motion.span> */}
      </motion.h2>
    );
  };

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
    <main className={`min-h-screen ${theme === "cyber" ? "bg-gradient-cyber" : "bg-gradient-custom"}`}>
      <div className="h-screen w-screen fixed top-0 z-10 flex flex-col justify-center items-center gap-8 px-8 lg:px-8">
        <div className="text-white text-2xl w-full lg:w-3/6 flex">
          {getMessage()}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 8.5,
          }}
        >
          <ChatButton />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 9.5,
          }}
        >
          <a
            href="https://www.linkedin.com/in/a-spencer-johnson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white hover:text-elegantPink">
              <IconBrandLinkedin size={48} />
            </p>
          </a>
        </motion.div>
      </div>
      <video
        autoPlay
        playsInline
        loop
        muted
        className="w-screen h-screen object-cover z-0 opacity-20 glowing-shadow"
      >
        <source src={"home/video.mp4"} type="video/mp4" />
        Sorry, your browser doesn&apost support videos.
      </video>
    </main>
  );
}
