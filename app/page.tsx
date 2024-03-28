"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import me from "./assets/me.png";
import { Projects } from "./component/Projects";
import { ChatButton } from "./component/ChatButton";
import { IntroSection } from "./component/IntroSection";
import { SkillsSections } from "./component/SkillsSections";
import { Contact } from "./component/Contact";

export default function Home() {
  // const [theme, setTheme] = useState("dark")
  // const [themeText, setThemeText] = useState("white")
  // const [themeOffset, setThemeOffset] = useState("customGrey")

  // const themes = [
  //   {
  //     "dark": {
  //         "backgroundColor": "black",
  //         "textColor": "white",
  //         "offsetColor": "customGrey"
  //     }
  //   },
  //   {
  //     "aqua": {
  //         "backgroundColor": "aquaDarkTurquoise",
  //         "textColor": "aquaTurquoise",
  //         "offsetColor": "aquaRed"
  //     }
  //   },
  //   {
  //     "elegant": {
  //         "backgroundColor": "elegantEggShell",
  //         "textColor": "elegantTan",
  //         "offsetColor": "elegantPink"
  //     }
  //   },

  // ]

  // const setUserTheme = () => {
  //   if(theme === "dark"){
  //     setThemeText("white")
  //     setThemeOffset("customGrey")
  //   }else if(theme === "aqua"){
  //     setThemeText("aquaTurquoise")
  //     setThemeOffset("aqauRed")
  //   }else if(theme === "elegant"){
  //     setThemeText("elegantTan")
  //     setThemeOffset("elegantPink")
  //   }
  // }

  // useEffect(() => {
  //   setUserTheme()
  // }, [theme])

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center lg:p-16 ">
      {/* <div className="bg-gradient-custom"> */}
        <IntroSection />
      {/* </div> */}
      <div id="projectSection">
        <Projects />
      </div>
      <SkillsSections />
      <div className="w-full" id="contactSection">
        <Contact />
      </div>
    </main>
  );
}
