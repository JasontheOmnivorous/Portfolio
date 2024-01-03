import { Project } from "@/types/types";
import Link from "next/link";

interface Props {
  id: string;
}

const Projects = ({ id }: Props) => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Auth System",
      description:
        "A testament to my proficiency in backend development. Leveraging the strengths of Node.js, Express, and MongoDB, I've crafted a secure and efficient authentication system. The backbone of this project is powered by JWT, showcasing my expertise in implementing robust security measures. ",
      link: "https://github.com/JasontheOmnivorous/auth-system",
    },
    {
      id: 2,
      name: "E-commerce API",
      description:
        "The backbone of a seamless shopping experience. Built with Node.js, Express, and MongoDB, this API perfectly complements the frontend. With a focus on performance and reliability, it ensures smooth interactions, making the E-commerce frontend come to life.",
      link: "https://github.com/JasontheOmnivorous/Ecommerce-API",
    },
    {
      id: 3,
      name: "Node Farm",
      description:
        "This is the very first project where I learned Node.js. Although it was a follow-along project, I am confident that I have grasped the core ideas and concepts of the Node.js world.",
      link: "https://github.com/JasontheOmnivorous/node-farm",
    },
    {
      id: 4,
      name: "Natours",
      description:
        "Natours API is a robust backend application designed to power your adventure-focused projects. Developed using Node.js and Express, Natours API delivers a reliable and efficient platform for handling tour-related data. Seamlessly integrating with your front-end applications, Natours API ensures a smooth and responsive experience for users, allowing them to explore and interact with tour information effortlessly.",
      link: "https://github.com/JasontheOmnivorous/natours",
    },
    {
      id: 5,
      name: "E-commerce Frontend",
      description:
        "This is the project I collaborated with a friend to charge my communication and collaboration skills. This project showcase my skills in building beautiful user interfaces with React and smooth state management.",
      link: "https://github.com/JasontheOmnivorous/Ecommerce-Frontend",
    },
    {
      id: 6,
      name: "Mini E-commerce",
      description:
        "A small yet powerful showcase of my expertise in frontend and backend technologies. Developed to hone my skills in Next.js, Redux Toolkit, PostgreSQL, and Prisma, this project exemplifies my commitment to staying at the forefront of modern web development. ",
      link: "https://github.com/JasontheOmnivorous/mini-ecommerce",
    },
  ];

  return (
    <div id={id} className="m-20 flex flex-col justify-center items-center">
      <h1 className="text-orange-500 font-bold m-5">
        Projects that showcase my skills:
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        {projects.map((item) => (
          <Link legacyBehavior key={item.id} href={`/${item.name}`}>
            <div className="w-[60dvw] h-auto border border-gray-300 rounded-xl m-2 shadow-lg p-2 flex flex-col items-center justify-start hover:border-orange-300">
              <h1 className="font-bold">{item.name}</h1>
              <p className="m-2">{item.description}</p>
              <h1 className="font-bold text-purple-500 cursor-pointer">
                Find out more details →
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
