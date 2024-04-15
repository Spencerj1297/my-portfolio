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
  IconBrandJavascript,
  IconBrandReactNative,
  IconBrandNodejs,
  IconBrandTailwind
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

  const languages = [
    {
      language: "Python",
      icon: <IconBrandPython height={150} width={150} />,
      styling: "text-pythonYellow bg-pythonBlue hover:text-pythonBlue hover:bg-pythonYellow ease-in-out duration-300 h-80 w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
    },
    {
      language: "C#",
      icon: <IconBrandCSharp height={150} width={150} />,
      styling: "text-white bg-cSharpPurple hover:text-cSharpPurple hover:bg-white ease-in-out duration-300 h-80 w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
    },
    {
      language: "Ruby on Rails",
      icon: <IconDiamond height={150} width={150} />,
      styling: "text-white bg-rubyRed hover:text-rubyRed hover:bg-white ease-in-out duration-300 h-80 w-72",
      position: "start",
      order: "order-1",
      textOrder: "order-2",
    },
    {
      language: "Javascript",
      icon: <IconBrandJavascript height={150} width={150} />,
      styling: "text-black bg-jsYellow hover:text-jsYellow hover:bg-black ease-in-out duration-300 h-80 w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
    },
    {
      language: "React.js",
      icon: <IconBrandReactNative height={150} width={150} />,
      styling: "text-reactBlue bg-reactGrey hover:text-reactGrey hover:bg-reactBlue ease-in-out duration-300 h-80 w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
    },
    {
      language: "Node.js",
      icon: <IconBrandNodejs height={150} width={150} />,
      styling: "text-nodeGreen bg-nodeBlue hover:text-nodeBlue hover:bg-nodeGreen ease-in-out duration-300 h-80 w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
    },
    {
      language: "AWS",
      icon: <IconBrandAws height={150} width={150} />,
      styling: "text-awsOrange bg-awsBlue hover:text-awsBlue hover:bg-awsOrange ease-in-out duration-300 h-80 w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
    },
    {
      language: "Tailwind",
      icon: <IconBrandTailwind height={150} width={150} />,
      styling: "text-tailWLightBlue bg-tailWBlue hover:text-tailWBlue hover:bg-tailWLightBlue ease-in-out duration-300 h-80 w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
    },
    {
      language: "SQL",
      icon: <IconSql height={150} width={150} />,
      styling: "text-white bg-sqlBlue hover:text-sqlBlue hover:bg-white ease-in-out duration-300 h-80 w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
    },
  ];

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setAnimateComplete(true);
      }, 1700);
    } else {
      setAnimateComplete(false);
    }
  }, [isInView]);

  return (
    <div className="grid grid-cols-3 gap-6 transform -rotate-[30deg] mt-96">
      {languages.map((lan, ind) => (
        <div className={`${lan.styling} flex justify-center items-center transition-transform transform hover:scale-105`}>
          {/* <p>{lan.language}</p> */}
          <p>{lan.icon}</p>
        </div>
      ))}
    </div>
  );
};
