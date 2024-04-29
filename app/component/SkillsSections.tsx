import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useAnimationControls,
} from "framer-motion";
import { skills } from "../component/skillsData";

export const SkillsSections = () => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [theme, setTheme] = useState<string | null>(null);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number | null>(
    null
  );

  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef);
  const cardContainer = useAnimationControls();
  const cardControls = useAnimationControls();
  const mobilecardControls = useAnimation();

  const handleSkillSelect = (ind: number) => {
    setSelectedSkillIndex(ind);
    setShowDescription(true);
  };

  useEffect(() => {
    if (isInView) {
      cardContainer.start({
        rotate: 360,
        transition: { delay: 8, type: "spring", restSpeed: 3, duration: 1.5 },
      });
      cardControls.start({
        opacity: 1,
      });
      mobilecardControls.start({
        scale: 1,
        opacity: 1,
        y: 0,
        rotate: 360,
      });
    } else {
      cardContainer.stop();
      cardControls.stop();
      mobilecardControls.stop();
    }
  }, [isInView]);



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
    <>
    <div className={`w-screen border-2 ${theme === "cyber" ? "border-elegantPink cyber-box-shadow" : "border-aqua skill-box-shadow"}`}></div>
    <div ref={skillsRef}>
      <motion.div
        animate={cardContainer}
        initial={{ rotate: -30 }}
        className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:mt-64"
      >
        {skills.map((skill, ind) => (
          <motion.button
            key={ind}
            onMouseEnter={() => handleSkillSelect(ind)}
            onMouseLeave={() => setShowDescription(false)}
            // onClick={() => handleSkillSelect(ind)}
            initial={{ opacity: 0 }}
            animate={cardControls}
            transition={{ delay: skill.transition }}
            className={`${
              skill.styling
            } flex justify-center items-center transition-transform transform hover:scale-125 hover:z-20 ${theme === "cyber" ? "cyber-box-shadow" : "skill-box-shadow"} rounded-lg ${
              ind % 2 === 0 ? "first-column-style" : ""
            }`}
          >
            {showDescription && selectedSkillIndex === ind ? (
              <p className="font-bold text-xs lg:text-sm p-2"> {skill.description}</p>
            ) : (
              <p>{skill.icon}</p>
            )}
          </motion.button>
        ))}
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 mt-8">
        {skills.map((skill, ind) => (
          <motion.button
            onClick={() => handleSkillSelect(ind)}
            key={ind}
            initial={{ scale: 0.5, opacity: 0, y: 100 }}
            animate={mobilecardControls}
            transition={{
              delay: skill.transition,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className={`${skill.styling} flex justify-center items-center transition-transform transform hover:scale-105 ${theme === "cyber" ? "cyber-box-shadow" : "skill-box-shadow"} last:mb-8`}
          >
            {showDescription && selectedSkillIndex === ind ? (
              <p className="font-bold text-xs lg:text-sm p-2"> {skill.description}</p>
            ) : (
              <p>{skill.icon}</p>
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
    </>
  );
};
