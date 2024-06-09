import { useInView, motion } from "framer-motion";
import React, { FC, useEffect, useRef } from "react";
import Link from "next/link";

interface Props{
  theme: string
}
export const Projects: FC<Props> = ({theme}) => {
  const projectRef = useRef(null);
  const projectsInView = useInView(projectRef);

  const projects = [
    { title: "Zoee", video: "/home/zoee-video.mp4", link: "zoee" },
    { title: "devStuff", video: "/home/devstuff-video.mp4", link: "devstuff" },
    { title: "Flow State", video: "/home/flow-video.mp4", link: "flowstate" },
    { title: "Yum", video: "/home/yum-video.mp4", link: "yum" },
  ];

  return (
    <motion.div
      className="lg:mt-32 lg:mb-96"
      animate={{ opacity: projectsInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-customGrey text-6xl text-center lg:text-left lg:text-[150px] md:mt-72 lg:transform lg:-rotate-90 lg:absolute lg:-left-28 p-2">
        MY WORK
      </h1>
      <div></div>
      <div
        ref={projectRef}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <Link href={`/${project.link}`} key={index}>
            <div className="relative flex items-end justify-center h-72 w-72 md:h-96 md:w-96">
              {project.video ? (
                   <video
                   autoPlay
                   playsInline
                   loop
                   muted
                   className="absolute inset-0 w-full h-full object-cover z-10"
                 >
                   <source src={`${project.video}`} type="video/mp4" />
                   Sorry, your browser doesn&apost support videos.
                 </video>
              ):(
                  <>
                  </>
              )}
             
              <div className={`transform hover:scale-102 transition duration-300 ease-in-out flex justify-center items-center h-44 min-w-44 opacity-0 hover:opacity-100 bg-opacity-60 p-8 rounded-full mb-24 z-20 ${theme === "cyber" ? "bg-elegantPink" : "bg-aqua"}`}>
                <h2 className="text-black text-2xl font-bold">
                  {project.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
