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

  const devStuffPersonalGrowth = `Initially, I set out to establish DevStuff as a platform for selling programmer merchandise, including t-shirts and coffee mugs. However, managing the design and shipping logistics proved to be more challenging than anticipated. Consequently, I pivoted the focus of the site towards catering to enthusiasts of mice and various mechanical keyboards.
  With this new direction, I embarked on exploring the complexities of local storage for implementing a robust shopping cart system. Unlike traditional e-commerce setups that often require user accounts to store items in a cart, I aimed to empower users to add and manipulate items in their cart without the need for an account. Leveraging local storage, I achieved this goal, allowing users to freely manage their selections until they are ready to proceed to checkout.
  While considering alternatives such as cookies for this purpose, I found that local storage offered a more efficient solution, particularly in terms of implementation and performance. Currently, I'm also in the process of integrating Stripe payment processing, complete with comprehensive test cases, to ensure a seamless purchasing experience for our users.`;

  const devStuffVideo = "/home/devstuff-video.mp4";

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
