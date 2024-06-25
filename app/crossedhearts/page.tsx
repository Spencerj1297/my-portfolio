import {
    IconBrandReact,
    IconBrandTailwind,
    IconBrandCss3,
    IconBrandNodejs,
  } from "@tabler/icons-react";
  import { ProjectPage } from "../component/ProjectPage";
  
  type Tech = {
    title: string;
    icon: JSX.Element | string;
  };
  
  export default function DevStuff() {
    const crossedHearTitle = "Crossed Hearts Counseling";
  
    const crossedHearDescription = `Welcome to Crossed Hearts Counseling, the online home for compassionate and personalized mental health support. Our website provides a comprehensive overview of the counseling services offered by our experienced and empathetic team, led by Laura Potter. Whether you're seeking individual therapy, couples counseling, or family support, Crossed Hearts Counseling is dedicated to helping you navigate life's challenges and achieve emotional well-being. Explore our site to learn more about our therapeutic approaches, read client testimonials, and book appointments with ease. At Crossed Hearts Counseling, we're committed to creating a safe and nurturing environment where hearts can heal and thrive.`;
  
    const crossedHearTech: Tech[] = [
      { title: "Next.js", icon: <IconBrandReact /> },
      { title: "Node.js", icon: <IconBrandNodejs /> },
      { title: "Express.js", icon: "" },
      { title: "Tailwind", icon: <IconBrandTailwind /> },
      { title: "CSS3", icon: <IconBrandCss3 /> },
    ];
  
    const crossedHearPersonalGrowth = `Crossed Hearts Counseling was my first free-lance site built for a client. It is still in development until the owner decides on a color scheme and wording. Will Crossed Hearts I continued to develop my skills with my favorite framework, Next.js. It was at the project that I felt like I could fly through coding tailwind styles and creating responsive layouts fast!`;
  
    const crossedHearVideo = "/home/crossedHearts.mp4";
  
    return (
      <main >
        <ProjectPage
          tech={crossedHearTech}
          pageTitle={crossedHearTitle}
          pageDescription={crossedHearDescription}
          pagePersonalGrowth={crossedHearPersonalGrowth}
          pageVideo={crossedHearVideo}
        />
      </main>
    );
  }
  