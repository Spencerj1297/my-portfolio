'use client'
import { Projects } from "./component/Projects";
import { IntroSection } from "./component/IntroSection";
import { SkillsSections } from "./component/SkillsSections";


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center lg:p-16 ">
      <IntroSection />
      <div 
      className="flex justify-center items-center w-screen bg-gradient-custom mt-16 lg:mt-0"
      id="projectSection">
        <Projects />
      </div>
      <SkillsSections />
    </main>
  );
}
