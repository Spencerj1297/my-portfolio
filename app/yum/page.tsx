import {
  IconBrandReact,
  IconBrandCss3,
  IconDiamond,
} from "@tabler/icons-react";
import { ProjectPage } from "../component/ProjectPage";

type Tech = {
  title: string;
  icon: JSX.Element | string;
};

export default function Yum() {
  const yumTitle = "YUM";

  const yumDescription = `Blending the flavors of React for the frontend and Ruby on Rails for the backend. YUM isn't just about food; it's a showcase of my skills in creating a seamless user experience with full CRUD capabilities and a secure login system. Join me as I explore the art of coding, one recipe at a time.`;

  const yumTech: Tech[] = [
    { title: "React.js", icon: <IconBrandReact /> },
    { title: "Ruby on Rails", icon: <IconDiamond /> },
    { title: "CSS3", icon: <IconBrandCss3 /> },
  ];

  const yumPersonalGrowth = `YUM marked my initiation into a collaborative development team, where I delved into the intricacies of merging front-end and back-end elements seamlessly. It was here that I gained valuable experience in integrating external APIs to infuse our website with dynamic functionality. This project also became my platform for cultivating an organized CSS environment and refining existing code structures.`;

  const yumVideo = "/home/yum-video.mp4";

  return (
    <main className="min-h-screen p-4 lg:py-24 lg:px-44 flex flex-col gap-16 bg-gradient-custom">
      <ProjectPage
        tech={yumTech}
        pageTitle={yumTitle}
        pageDescription={yumDescription}
        pagePersonalGrowth={yumPersonalGrowth}
        pageVideo={yumVideo}
      />
    </main>
  );
}
