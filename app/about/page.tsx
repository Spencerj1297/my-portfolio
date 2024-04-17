"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import programmer from "../assets/programmer.jpeg";
import me from "../assets/me.png";
import "@splidejs/react-splide/css/sea-green";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import { motion } from "framer-motion";


type Photos = {
  photo: StaticImageData;
  altText: string;
};

export default function About() {

  const photos: Photos[] = [
    { photo: programmer, altText: "fdsaf" },
    { photo: me, altText: "fdsa" },
    { photo: programmer, altText: "fdsa" },
    { photo: me,  altText: "fdsa" },
  ];

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    wheelMinThreshold: 30,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    wheel: true,
    height: "20rem",
  };


  const getMessage = () => {
    const message = 'Thank you for checking out my site. Im Spencer, full-stack software developer, surfer, and most import husband to my awesome wife. Feel free to checkout my projects found on the homepage and message me with any question by hitting the button below'

     return message.split("").map((letter, ind) => (
      <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        transition={{  delay: ind / 10}}
        className="flex flex-row text-white"
      >
          {letter}
      </motion.div>
    ))

  }

  return (
    <main className="min-h-screen bg-gradient-custom">
      <div className="h-screen w-screen fixed top-0 z-20 flex justify-center items-center">
        <h1 className="text-white w-full flex ">
          {getMessage()}
        </h1>
      </div>
                <video
            autoPlay
            playsInline
            loop
            muted
            className="w-screen h-screen object-cover z-10 opacity-20 glowing-shadow"
          >
            <source src={'home/video.mp4'} type="video/mp4" />
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
