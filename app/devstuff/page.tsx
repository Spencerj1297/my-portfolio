import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandTailwind,
  IconBrandAws,
  IconBrandCss3,
  IconDiamond,
  IconBrandNodejs,
} from "@tabler/icons-react";
import { ProjectPage } from "../component/ProjectPage";

type Tech = {
  title: string;
  icon: JSX.Element | string;
};

export default function DevStuff() {
  const devStuffTitle = "{ } devStuff";

  const devStuffDescription = `devStuff is a sleek and efficient ecommerce platform built with Next.js, offering a curated selection of simple and elegant mouse and keyboards. With its Node.js and Express backend powering the engine, devStuff delivers a seamless shopping experience. Explore our collection of tech essentials designed for developers and enthusiasts alike. From ergonomic designs to cutting-edge technology, devStuff brings innovation to your fingertips`;

  const devStuffTech: Tech[] = [
    { title: "Next.js", icon: <IconBrandReact /> },
    { title: "Node.js", icon: <IconBrandNodejs /> },
    { title: "Express.js", icon: "" },
    { title: "Tailwind", icon: <IconBrandTailwind /> },
    { title: "CSS3", icon: <IconBrandCss3 /> },
  ];

  const devStuffPersonalGrowth = ``;

  const devStuffVideo = "/home/devStuff-video.mp4";

  return (
    <main className="min-h-screen p-4 lg:py-24 lg:px-44 flex flex-col gap-16 bg-gradient-custom">
      <ProjectPage
        tech={devStuffTech}
        pageTitle={devStuffTitle}
        pageDescription={devStuffDescription}
        pagePersonalGrowth={devStuffPersonalGrowth}
        pageVideo={devStuffVideo}
      />
    </main>
  );
}
