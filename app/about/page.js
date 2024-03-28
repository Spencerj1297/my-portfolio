import Image from "next/image";
import programmer from "../assets/programmer.jpeg";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col px-4 pt-8 lg:p-16">
      <h1 className={`text-9xl text-white mb-16`}>About Me.</h1>
      {/* <div className="min-h-96 min-w-96 flex flex-row gap-4"> */}
        {/* <Image
        className="z-0 absolute top-1/2 left-32 transform -translate-x-1/2 -translate-y-1/2 opacity-60 rounded-4xl"
        width={900}
        // src={me}
        alt="Picture of me. Spencer Johnson"
      /> */}
        {/* <a
        href="app/assets/resume.pdf"  // Update the href to the path where your resume PDF is located
        download="resume.pdf"
        className="btn btn-one" // Apply appropriate styling if needed
      >
        Download Resume
      </a> */}
        <div className="lg:w-3/6 min-h-96 flex justify-center items-center p-4 text-2xl">
          <p className="text-customGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            convallis, enim nec commodo aliquam, sapien tortor sagittis nulla,
            ut tempor elit ipsum ut arcu. Curabitur blandit volutpat purus, sit
            amet luctus nulla luctus vel. Integer nec turpis nisi. Vivamus
            tincidunt, nisi id dictum fringilla, ipsum nunc volutpat nisi, at
            volutpat libero est nec nulla. Sed non leo non mi sodales
            <br></br>
            <br></br>
            sollicitudin. Integer et augue non ex feugiat fermentum. Nullam nec
            lacus eleifend, viverra risus sed, viverra ipsum. Aenean euismod
            felis non enim congue ultricies. Sed vel sapien non elit faucibus
            ultrices. Phasellus auctor placerat lacus id sagittis. Vivamus sit
            amet hendrerit odio. In hac habitasse platea dictumst. Sed eu
            ultricies nunc. Sed hendrerit tincidunt aliquet. Donec fermentum
            libero quis elit convallis, id tincidunt turpis convallis.
          </p>
        </div>
        {/* <div className="w-3/6 min-h-96 flex justify-center items-center">
            <Image
              className="rounded-4xl rounded-lg"
              width={900}
              src={programmer}
              alt="Picture of me. Spencer Johnson"
            />
        </div> */}
      {/* </div> */}
    </main>
  );
}
