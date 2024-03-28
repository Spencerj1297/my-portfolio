import React, { useEffect, useRef, useState } from "react";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandPython,
  IconDiamond,
  IconHtml,
  IconBrandCss3,
  IconBrandCSharp,
  IconSql,
  IconBrandAws,
} from "@tabler/icons-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";

export const SkillsSections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  let { scrollYProgress } = useScroll();
  const [animateComplete, setAnimateComplete] = useState<boolean>(false);

  const frontendSkills = [
    {
      language: "React.js",
      icon: <IconBrandReact color="white"/>,
    },
    {
      language: "TypeScript",
      icon: <IconBrandTypescript color="white"/>,
    },
    {
      language: "Next.js",
      icon: <IconBrandNextjs color="white"/>,
    },
    {
      language: "Python",
      icon: <IconBrandPython color="white"/>,
    },
    {
      language: "Ruby",
      icon: <IconDiamond color="white"/>,
    },
    {
      language: "HTML",
      icon: <IconHtml color="white"/>,
    },
    {
      language: "CSS",
      icon: <IconBrandCss3 color="white"/>,
    },
  ];

  const backendSkills = [
    {
      language: "Python",
      icon: <IconBrandPython color="white"/>,
    },
    {
      language: "C++",
      icon: <IconBrandTypescript color="white"/>,
    },
    {
      language: "C#",
      icon: <IconBrandCSharp color="white"/>,
    },
    {
      language: "Rails",
      icon: <IconBrandPython color="white"/>,
    },
    {
      language: "AWS",
      icon: <IconBrandAws color="white"/>,
    },
    {
      language: "SQL",
      icon: <IconSql color="white"/>,
    },
    {
      language: "SQL",
      icon: <IconSql color="white"/>,
    },
  ];

  useEffect(() => {
    if(isInView){
      setTimeout(() => {
        setAnimateComplete(true);
      }, 1700)
    }else{
      setAnimateComplete(false)
    }
  }, [isInView]);
 

  return (
    <div ref={ref} className="flex justify-center items-center h-screen w-screen mt-32 rounded-2xl">
      {/* NOT SURE IF I WANT HEADER OR NOT*/}
      {/* <h1 className="text-white text-9xl mt-72 lg:transform lg:absolute lg:left-44 lg:mb-44 border-b">skills</h1> */}
      <div className={`flex ${animateComplete ? "glowing-shadow rounded-2xl" : ""}`}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 1, delay: 0.75 }}
        className={`flex flex-col p-8 lg:p-16 rounded-l-2xl h-4/5 max-w-44 lg:max-w-none`}
      >
        <h2 className="text-white text-center text-3xl lg:text-6xl">Frontend</h2>
        <div className="mt-16">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center p-4"
            >
              {/* <p className="flex flex-row text-elegantPink"><span className="mr-2">{skill.icon}</span>{skill.language}</p> */}
              <span className="mr-2">{skill.icon}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 1, delay: 0.75 }}
        className={`flex flex-col p-8 lg:p-16 rounded-r-2xl h-4/5 max-w-44 lg:max-w-none`}
      >
        <h2 className="text-white text-center text-3xl lg:text-6xl">Backend</h2>
        <div className="mt-16">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4"
            >
              {/* <p className="text-elegantPink flex flex-row"><span className="mr-2">{skill.icon}</span> {skill.language} </p> */}
              <span className="mr-2">{skill.icon}</span>
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
};
