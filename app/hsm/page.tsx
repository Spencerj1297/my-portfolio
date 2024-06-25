import {
    IconBrandReact,
    IconBrandTailwind,
    IconBrandCss3
  } from "@tabler/icons-react";
  import { ProjectPage } from "../component/ProjectPage";
  
  type Tech = {
    title: string;
    icon: JSX.Element | string;
  };
  
  export default function HSM() {
    const hsmTitle = "HSM-75";
  
    const hsmDescription = `Welcome to the official homepage of HSM-75 Helicopter Strike Squadron, your comprehensive portal to all things related to the "Wolfpack." This website offers detailed insights into the squadron's history, mission, and achievements, along with up-to-date news and events. Visitors can explore the capabilities of our cutting-edge MH-60R Seahawk helicopters, meet our dedicated team, and stay informed about our operational deployments and community engagements. Designed with both service members and the public in mind, our site aims to foster a deeper understanding and appreciation of the vital role HSM-75 plays in naval aviation and national defense.`;
  
    const hsmTech: Tech[] = [
      { title: "React.js", icon: <IconBrandReact /> },
      { title: "Tailwind", icon: <IconBrandTailwind /> },
      { title: "CSS", icon: <IconBrandCss3 /> },
    ];
  
    const hsmPersonalGrowth = `I created this project out of a love for my former naval service. I noticed my old squadron did not have a cool website to call their own, so I sought to fix that. Due to my love of using Tailwind, it has been quite some time since I created CSS in the old-fashioned way. I used the project to brush up on those skills and introduce new techniques I hadn't used before. The strength of the pack is the wolf, and the strength of the wolf is the pack!`;
  
    const hsmVideo = "/home/hsm.mp4";
  
    return (
      <main>
        <ProjectPage
          tech={hsmTech}
          pageTitle={hsmTitle}
          pageDescription={hsmDescription}
          pagePersonalGrowth={hsmPersonalGrowth}
          pageVideo={hsmVideo}
        />
      </main>
    );
  }
  