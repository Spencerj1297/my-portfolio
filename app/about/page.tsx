"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import programmer from "../assets/programmer.jpeg";
import me from "../assets/me.png";
import "@splidejs/react-splide/css/sea-green";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChatButton } from "../component/ChatButton";
import { IconBrandInstagram } from "@tabler/icons-react";

type Photos = {
  photo: StaticImageData;
  altText: string;
};

export default function About() {
  const [displayedMessage, setDisplayedMessage] = useState("");

  // const photos: Photos[] = [
  //   { photo: programmer, altText: "fdsaf" },
  //   { photo: me, altText: "fdsa" },
  //   { photo: programmer, altText: "fdsa" },
  //   { photo: me, altText: "fdsa" },
  // ];

  // const options = {
  //   type: "loop",
  //   gap: "1rem",
  //   autoplay: true,
  //   wheelMinThreshold: 30,
  //   pauseOnHover: false,
  //   resetProgress: false,
  //   arrows: false,
  //   wheel: true,
  //   height: "20rem",
  // };

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
        {`${displayedMessage}`}
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

  return (
    <main className="min-h-screen bg-gradient-custom">
      <div className="h-screen w-screen fixed top-0 z-20 flex flex-col justify-center items-center gap-8 px-8 lg:px-8">
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
          <p className="text-white hover:text-elegantPink">
            <IconBrandInstagram size={48} />
          </p>
        </motion.div>
      </div>
      <video
        autoPlay
        playsInline
        loop
        muted
        className="w-screen h-screen object-cover z-10 opacity-20 glowing-shadow"
      >
        <source src={"home/video.mp4"} type="video/mp4" />
        Sorry, your browser doesn&apost support videos.
      </video>
      {/* <Splide className="flex opacity-50" options={options} aria-label="My Favorite Images">
        {photos.map((photo, ind) => (
          <SplideSlide
            // interval="1000"
            className=""
            key={ind}
          >
            <Image
              className=""
              height={300}
              width={300}
              src={photo.photo}
              alt={photo.altText}
            />
          </SplideSlide>
        ))}
      </Splide> */}
    </main>
  );
}
