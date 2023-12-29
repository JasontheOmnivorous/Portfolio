import { Project } from "@/types/types";
import { FaGithub } from "react-icons/fa";

interface Props {
  id: string;
}

const Projects = ({ id }: Props) => {
  const projects: Project[] = [
    {
      id: 1,
      name: "E-commerce Frontend",
      description:
        "A sleek React application powered by RTK and MUI. Elevating the user experience with responsive design and efficient state management, this project showcases my frontend skills in a concise and modern fashion.",
      link: "https://github.com/JasontheOmnivorous/Ecommerce-Frontend",
    },
    {
      id: 2,
      name: "Auth System",
      apiDocs: "https://min-thant.gitbook.io/auth-system-api-documentation/",
      description:
        "A testament to my proficiency in backend development. Leveraging the strengths of Node.js, Express, and MongoDB, I've crafted a secure and efficient authentication system. The backbone of this project is powered by JWT, showcasing my expertise in implementing robust security measures. ",
      link: "https://github.com/JasontheOmnivorous/auth-system",
    },
    {
      id: 3,
      name: "Mini E-commerce",
      description:
        "A small yet powerful showcase of my expertise in frontend and backend technologies. Developed to hone my skills in Next.js, Redux Toolkit, PostgreSQL, and Prisma, this project exemplifies my commitment to staying at the forefront of modern web development. ",
      link: "https://github.com/JasontheOmnivorous/mini-ecommerce",
    },
    {
      id: 4,
      name: "Node Farm",
      description:
        "This is the very first project where I learned Node.js. Although it was a follow-along project, I am confident that I have grasped the core ideas and concepts of the Node.js world.",
      link: "https://github.com/JasontheOmnivorous/node-farm",
    },
    {
      id: 5,
      name: "Natours",
      apiDocs: "",
      description:
        "Natours API is a robust backend application designed to power your adventure-focused projects. Developed using Node.js and Express, Natours API delivers a reliable and efficient platform for handling tour-related data. Seamlessly integrating with your front-end applications, Natours API ensures a smooth and responsive experience for users, allowing them to explore and interact with tour information effortlessly.",
      link: "https://github.com/JasontheOmnivorous/natours",
    },
    {
      id: 6,
      name: "E-commerce API",
      apiDocs: "https://min-thant.gitbook.io/ecommerce-api-documentation/",
      description:
        "The backbone of a seamless shopping experience. Built with Node.js, Express, and MongoDB, this API perfectly complements the frontend. With a focus on performance and reliability, it ensures smooth interactions, making the E-commerce frontend come to life.",
      link: "https://github.com/JasontheOmnivorous/Ecommerce-API",
    },
  ];

  return (
    <div id={id} className="m-20 flex flex-col justify-center items-center">
      <h1 className="text-orange-500 font-bold m-5">
        Projects that showcase my skills:
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        {projects.map((item) => (
          <div
            className="w-[60dvw] h-auto border border-gray-300 rounded-xl m-2 shadow-lg p-2 flex flex-col items-center justify-start hover:border-orange-300"
            key={item.id}
          >
            <h1 className="font-bold">{item.name}</h1>
            {item.apiDocs && (
              <a
                target="_blank"
                className="text-purple-600 font-bold flex justify-center items-center gap-2 m-2"
                href={item.apiDocs}
              >
                Read API Docs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            )}
            <p className="m-2">{item.description}</p>
            <a className="m-2 text-3xl" href={item.link} target="_blank">
              <FaGithub />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
