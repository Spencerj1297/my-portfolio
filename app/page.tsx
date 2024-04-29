'use client'
import { Projects } from "./component/Projects";
import { IntroSection } from "./component/IntroSection";
import { SkillsSections } from "./component/SkillsSections";
import { useEffect, useState } from "react";


export default function Home() {
  const [theme, setTheme] = useState<string>("aqua");

  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme") ?? "aqua"; 
      setTheme(newTheme);
    };
  
    window.addEventListener("storage", handleThemeChange);
    const value = localStorage.getItem("theme") ?? "aqua"; 
    setTheme(value);
  
    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);
  

  return (
    <main className={`flex min-h-screen min-w-screen flex-col items-center justify-center lg:p-16 ${theme === "crazy" ? "bg-gradient-summer" : ""}`}>
      <IntroSection />
      <div 
      className={`flex justify-center items-center w-screen ${theme === "cyber" ? "bg-gradient-cyber": "bg-gradient-custom"} pb-8 lg:pb-0`}
      id="projectSection">
        <Projects theme={theme}/>
      </div>
      <SkillsSections />
    </main>
  );
}
