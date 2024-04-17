import {
    IconBrandReact,
    IconBrandTypescript,
    IconBrandNextjs,
    IconBrandPython,
    IconDiamond,
    IconBrandCss3,
    IconBrandCSharp,
    IconSql,
    IconBrandAws,
    IconBrandJavascript,
    IconBrandNodejs,
    IconBrandTailwind,
  } from "@tabler/icons-react";

export const skills = [
    {
      language: "Python",
      icon: <IconBrandPython height={150} width={150} />,
      styling: "text-pythonYellow bg-pythonBlue hover:text-pythonBlue hover:bg-pythonYellow ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 1,
      description: "In my current role, I leverage Python as the backend technology to power our applications. Python's versatility and rich ecosystem of libraries allow me to efficiently develop robust backend systems, handle data processing tasks, and integrate with various databases and APIs, ensuring seamless functionality and performance for our users."
    },
    {
      language: "C#",
      icon: <IconBrandCSharp height={150} width={150} />,
      styling: "text-white bg-cSharpPurple hover:text-cSharpPurple hover:bg-white ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 2,
      description: "My journey into software development began in college, where I first dived into the world of programming with C#. It was my introduction to writing code, understanding algorithms, and building applications. Learning C# sparked my passion for software development and laid the foundation for my career in technology"
    },
    {
      language: "Ruby on Rails",
      icon: <IconDiamond height={150} width={150} />,
      styling: "text-white bg-rubyRed hover:text-rubyRed hover:bg-white ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "start",
      order: "order-1",
      textOrder: "order-2",
      transition: 2.5,
      description: "At Learn Academy, a coding bootcamp, I delved into Ruby on Rails, a powerful framework that we primarily used for the backend in many of our projects. It was a hands-on experience that taught me the ins and outs of building robust web applications efficiently. Ruby on Rails became a go-to tool for turning ideas into functional software during my time at the bootcamp."
    },
    {
      language: "Javascript",
      icon: <IconBrandJavascript height={150} width={150} />,
      styling: "text-black bg-jsYellow hover:text-jsYellow hover:bg-black ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 3,
      description: "I first delved into JavaScript during my college years, where I got my initial exposure to its power in web development. As I continued learning, I deepened my understanding by working on various projects. JavaScript's versatility and role as the backbone of interactive web applications became clear to me through hands-on experience, shaping my journey as a developer."
    },
    {
      language: "React.js",
      icon: <IconBrandReact height={150} width={150} />,
      styling: "text-reactBlue bg-reactGrey hover:text-reactGrey hover:bg-reactBlue ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 3.5,
      description: "At Learn Academy, I honed my skills in React.js, a dynamic frontend library that we extensively utilized for projects. This hands-on experience carried over to my work at Zoee, where React.js continues to be a crucial tool for building modern, interactive user interfaces. Its component-based approach and seamless integration with other technologies make React.js a go-to choice for crafting engaging web applications."
    },
    {
      language: "Typescript",
      icon: <IconBrandTypescript height={150} width={150} />,
      styling: "text-white bg-sqlBlue hover:text-sqlBlue hover:bg-white ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 4,
      description: "At Zoee, I've been diving into TypeScript, a superset of JavaScript that adds static typing to the language. TypeScript has been instrumental in improving code quality, catching errors early, and enhancing developer productivity. Its strong type system and modern features have made it a valuable tool for building robust and maintainable software at Zoee."
    },
    {
      language: "Next.js",
      icon: <IconBrandNextjs height={150} width={150} />,
      styling: "text-white bg-black hover:text-black hover:bg-white ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 4.5,
      description: "For my personal projects, including the website we're chatting on, I turned to Next.js for its powerful features. One of the main draws was its SEO capabilities, which are easier to implement compared to React, especially considering React's nature as a single-page application (SPA). Next.js provided a smooth development experience, allowing me to focus on creating engaging user experiences while ensuring good search engine visibility"
    },
    {
      language: "Node.js",
      icon: <IconBrandNodejs height={150} width={150} />,
      styling: "text-nodeGreen bg-nodeBlue hover:text-nodeBlue hover:bg-nodeGreen ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 5,
      description: "I leverage Node.js along with Express for the backend of some of my projects. Node.js's non-blocking, event-driven architecture and Express's minimalist framework make a powerful combination for building scalable and efficient server-side applications. This setup allows me to handle routing, middleware, and database interactions seamlessly, providing a solid foundation for my projects' backends. Plus I love being able to write Javascript on the backend!"
    },
    {
      language: "AWS",
      icon: <IconBrandAws height={150} width={150} />,
      styling: "text-awsOrange bg-awsBlue hover:text-awsBlue hover:bg-awsOrange ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 5.5,
      description: "At Zoee, we rely on AWS as our cloud service provider. AWS offers a comprehensive suite of cloud computing services that enable us to build, deploy, and manage applications with flexibility and scalability. From hosting servers and databases to managing storage and deploying machine learning models, AWS plays a crucial role in supporting our infrastructure and services at Zoee"
    },
    {
      language: "Tailwind",
      icon: <IconBrandTailwind height={150} width={150} />,
      styling: "text-tailWLightBlue bg-tailWBlue hover:text-tailWBlue hover:bg-tailWLightBlue ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 6,
      description: "I <3 Tailwind"
    },
    {
      language: "CSS3",
      icon: <IconBrandCss3 height={150} width={150} />,
      styling: "text-white bg-cssBlue hover:text-cssBlue hover:bg-white ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 6.5,
      description: "I began my journey with CSS back in college, and it has been a constant companion throughout my programming career. From designing layouts and styling elements to creating responsive designs, CSS has been the backbone of my frontend development toolkit. I've applied CSS to every project and at work, shaping the visual aspects and user experience of web applications"
    },
    {
      language: "SQL",
      icon: <IconSql height={150} width={150} />,
      styling: "text-white bg-sqlBlue hover:text-sqlBlue hover:bg-white ease-in-out duration-300 h-64 lg:h-80 w-60 lg:w-72",
      position: "end",
      order: "order-2",
      textOrder: "order-1",
      transition: 7,
      description: "At Zoee, SQL is a daily part of my work routine as I interact with databases using MySQL. SQL allows me to manage and query data efficiently, ensuring smooth data operations for our applications. From writing complex queries to optimizing database performance, SQL plays a crucial role in maintaining and managing our data at Zoee."
    },
  ];