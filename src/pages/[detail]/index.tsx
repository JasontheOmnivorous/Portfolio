import EcommerceFrontend from "@/assets/ecommerce-frontend.jpg";
import MiniEcommerce from "@/assets/mini-commerce.jpg";
import NodeFarm from "@/assets/node-farm.jpg";
import { ProjectDetail } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";

const ProjectDetailPage = () => {
  const projectDetails: ProjectDetail[] = [
    {
      id: 1,
      name: "Auth System",
      apiDocs: "https://min-thant.gitbook.io/auth-system-api-documentation/",
      description:
        "This project showcases my knowledges in backend development. The system's architecture and functionalities are designed to provide a secure user authentication experience. With a focus on performance and readability, this project serves as evidence of my ability to implement advanced security measures using industry-standard technologies.",
      link: "https://github.com/JasontheOmnivorous/auth-system",
      technologiesUsed: [
        "JWT",
        "Bcrypt",
        "TypeScript",
        "Node.js",
        "Express",
        "Mongoose",
        "MongoDB",
      ],
    },
    {
      id: 2,
      name: "E-commerce API",
      apiDocs: "https://min-thant.gitbook.io/ecommerce-api-documentation/",
      description:
        "E-commerce API serves as the backbone of a seamless shopping experience, meticulously crafted mainly with Node.js, Express, and MongoDB. Designed to complement the frontend, this API prioritizes performance and scalability, ensuring smooth interactions and bringing the E-commerce Frontend project to life.",
      link: "https://github.com/JasontheOmnivorous/Ecommerce-API",
      technologiesUsed: [
        "TypeScript",
        "Node.js",
        "Express",
        "Mongoose",
        "MongoDB",
        "JWT",
        "Bcrypt",
      ],
    },
    {
      id: 3,
      name: "Node Farm",
      image: NodeFarm,
      description:
        "Node Farm is the very first project I built to enter the world of backend. Although it was a follow along project, I grasped the necessary skills and knowledges to dive deep into domain of server. This is the project that got me addicted to backend to this day.",
      link: "https://github.com/JasontheOmnivorous/node-farm",
      technologiesUsed: ["JavaScript", "Node.js", "HTML", "CSS"],
    },
    {
      id: 4,
      name: "Natours",
      description:
        "Natours is a significant milestone in my journey into the realms of backend development. Crafted during the immersive learning period of a Udemy bootcamp course, this project stands as a testament to my dedication and growing expertise. The beauty of Natours lies in its ability to seamlessly integrate with front-end applications, creating an experience for users exploring and interacting with tour information.",
      link: "https://github.com/JasontheOmnivorous/natours",
      technologiesUsed: [
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Bcrypt",
      ],
    },
    {
      id: 5,
      name: "E-commerce Frontend",
      image: EcommerceFrontend,
      description:
        "The E-commerce Frontend project holds a special place in my coding journey, embodying the essence of collaboration and skill refinement. In a joint effort with a friend, this venture became a canvas for charging my comunication and colaboration skills, revealing the beauty of teamwork in software development. As the name suggests, the E-commerce Frontend project serves as a showcase of my expertise in crafting visually appealing and intuitive user interfaces with React. One of the project's highlights is the emphasis on smooth state management. Leveraging the power of React, I implemented robust state management practices, ensuring a responsive and dynamic user experience.",
      link: "https://github.com/JasontheOmnivorous/Ecommerce-Frontend",
      technologiesUsed: [
        "TypeScript",
        "MUI",
        "React",
        "Redux Toolkit",
        "React-Router",
      ],
    },
    {
      id: 6,
      name: "Mini E-commerce",
      image: MiniEcommerce,
      description:
        "Built to master Redux Toolkit for state management and implement a robust search filter feature. This project showcases expertise in Next.js, Redux Toolkit, PostgreSQL, and Prisma. The frontend ensures seamless state handling, while the backend leverages PostgreSQL and Prisma for scalable data storage. ",
      link: "https://github.com/JasontheOmnivorous/mini-ecommerce",
      technologiesUsed: [
        "TypeScript",
        "MUI",
        "Next.js",
        "Redux Toolkit",
        "Prisma",
        "PostgreSQL",
      ],
    },
  ];

  const router = useRouter();

  const selectedProject = projectDetails.find(
    (item) => item.name === router.query.detail
  );

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-start m-5 flex-wrap">
      <h1 className="text-orange-500 font-bold m-2">{selectedProject?.name}</h1>
      {selectedProject?.apiDocs && (
        <a
          target="_blank"
          className="text-purple-600 font-bold flex justify-center items-center gap-2 m-2"
          href={selectedProject?.apiDocs}
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
      {selectedProject?.image && (
        <Image
          className="lg:w-[90%] lg:h-auto md:w-[90%] md:h-auto w-[90%] h-auto mb-5 mt-5 rounded-xl shadow-xl"
          src={selectedProject.image}
          alt="app-image"
        />
      )}
      <h1 className="font-bold m-2">Description:</h1>
      <p className="m-2 flex flex-wrap">{selectedProject?.description}</p>
      <div className="flex flex-col justify-center items-start flex-wrap font-bold m-2 2xl:flex-row 2xl:justify-center 2xl:items-center">
        Technologies used:
        {selectedProject?.technologiesUsed.map((item) => (
          <div
            key={item}
            className="p-1 border border-gray-300 rounded-lg m-1 shadow-lg hover:border-orange-500"
          >
            {item}
          </div>
        ))}
      </div>
      <a className="m-2 text-4xl" href={selectedProject?.link} target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default ProjectDetailPage;
