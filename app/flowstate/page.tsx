import {
    IconBrandNextjs,
    IconBrandMongodb,
    IconBrandTailwind,
  } from "@tabler/icons-react";
  import { ProjectPage } from "../component/ProjectPage";
  
  type Tech = {
    title: string;
    icon: JSX.Element | string;
  };
  
  export default function FlowState() {
    const flowTitle = "Flow State";
  
    const flowDescription = `Flow State is a tool to get organized and stay organized. During my job search, I found myself stressed with organization. Between job applications and carving out daily time to study and work on projects, I could quickly become lost. I created Flow State to bridge that gap. With big plans for the future, this application allows users to create task lists and prioritize them based on urgency. You can move the tasks along as they are completed to help untangle daily routines. I also found I wasn't a huge fan of switching between tabs to update my job application spreadsheet, so I created a simple way to track all the info needed for applying without the headache.`;
  
    const flowTech: Tech[] = [
      { title: "Next.js", icon: <IconBrandNextjs /> },
      { title: "MongoDB", icon: <IconBrandMongodb /> },
      { title: "Tailwind", icon: <IconBrandTailwind /> },
    ];
  
    const flowPersonalGrowth = `I chose to build this application with Next.js out of curiosity about version 14’s introduction of the new App Router. I quickly fell in love with the simplicity this update brings to pages and routing. I also thoroughly enjoy the ability to create a full-stack application with just Next.js. This, in my opinion, makes for clear and efficient code. For storage, I chose MongoDB. This is not typically my go-to as I prefer tables and rows over document-based data storage. However, with most platforms now introducing fees even for basic tiers, I felt like MongoDB’s free version was the way to go. It turns out I really love this approach, and it makes writing queries a breeze!`;
  
    const flowVideo = "/home/flow-video.mp4";
  
    return (
      <main>
        <ProjectPage
          tech={flowTech}
          pageTitle={flowTitle}
          pageDescription={flowDescription}
          pagePersonalGrowth={flowPersonalGrowth}
          pageVideo={flowVideo}
        />
      </main>
    );
  }
  