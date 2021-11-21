import Image from "next/image";

import { Project, ProjectBox } from "./ProjectBox";
import blogs from "../public/projects/blogs.png";
import projman from "../public/projects/projman.png";
import membersOnly from "../public/projects/membersOnly.png";
import cv from "../public/projects/cv.png";
import aayushsahu from "../public/projects/aayushsahu.png";

const projects: Project[] = [
  {
    name: "Blog Project",
    description: "A multi-user blog website made using React and NodeJS.",
    image: <Image src={blogs} alt="Blog Project" />,
    sourceLink: "https://github.com/aayushmau5/blog-frontend",
    demoLink: "https://aayushblogs.netlify.app/",
  },
  {
    name: "Projman",
    description: "A CLI project manager made using TypeScript and NodeJS.",
    image: <Image src={projman} alt="Blog Project" />,
    sourceLink: "https://github.com/aayushmau5/projman",
    demoLink: "https://www.npmjs.com/package/projman",
  },
  {
    name: "Members Only",
    description:
      "A private members only board made using EJS, Express & MongoDB.",
    image: <Image src={membersOnly} alt="Blog Project" />,
    sourceLink: "https://github.com/aayushmau5/members-only",
    demoLink: "https://sheltered-basin-30302.herokuapp.com",
  },
  {
    name: "CV Generator",
    description:
      "A CV generator made using React and Headless Chrome backend in express.",
    image: <Image src={cv} alt="Blog Project" />,
    sourceLink: "https://github.com/aayushmau5/cv-generator",
    demoLink: "https://aayushmau5.github.io/cv-generator/",
  },
  {
    name: "aayushsahu.com",
    description: "My personal website. Built with NextJS.",
    image: <Image src={aayushsahu} alt="Blog Project" />,
    sourceLink: "https://www.github.com/aayushmau5/aayushsahu.com",
    demoLink: "https://www.aayushsahu.com",
  },
];

export default function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectBox
          key={project.name}
          name={project.name}
          image={project.image}
          description={project.description}
          demoLink={project.demoLink}
          sourceLink={project.sourceLink}
        />
      ))}
    </div>
  );
}
