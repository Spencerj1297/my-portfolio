import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandTailwind,
  IconBrandAws,
} from "@tabler/icons-react";
import { ProjectPage } from "../component/ProjectPage";

type Tech = {
  title: string;
  icon: JSX.Element | string;
};

export default function Zoee() {
  const zoeeTitle = "Zoee";

  const zoeeDescription = `Zoee is a gateway to connection through a powerful online
  experience. We take coaches into the future of coaching with a fully
  integrated virtual office including video chat, client management,
  communication tools (including live chat), custom programs, and
  seamless scheduling and billing. As my current place of employment, you can find me using all
  of these technologies daily to create new features, improve the code
  base, and bring positivity to the team!`;

  const zoeeTech: Tech[] = [
    { title: "React.js", icon: <IconBrandReact /> },
    { title: "TypeScript", icon: <IconBrandTypescript /> },
    { title: "Tailwind", icon: <IconBrandTailwind /> },
    { title: "Python", icon: <IconBrandPython /> },
    { title: "AWS", icon: <IconBrandAws /> },
    { title: "Cronofy", icon: "" },
    { title: "Stripe", icon: "" },
    { title: "Courier", icon: "" },
    { title: "Retool", icon: "" },
  ];

  const zoeePersonalGrowth = `My time at Zoee marked a pivotal step in my journey as a software developer. While I had previously worked on numerous full-stack projects, it was at Zoee where I truly grasped the depth of full-stack development. Here, I immersed myself in a range of tasks, from integrating new APIs to designing intricate database structures. I even took on the responsibility of interviewing and mentoring new interns as our team expanded. This experience not only solidified my understanding of core concepts but also shaped me into a well-rounded software professional, ready to tackle any challenge with confidence.`

  const zoeeVideo = "/home/zoee-video.mp4";

  const zoeeLink = "https://zoee.com/"

  return (
    <main>
      <ProjectPage
        tech={zoeeTech}
        pageTitle={zoeeTitle}
        pageDescription={zoeeDescription}
        pagePersonalGrowth={zoeePersonalGrowth}
        pageVideo={zoeeVideo}
        pageLink={zoeeLink}
      />
    </main>
  );
}
