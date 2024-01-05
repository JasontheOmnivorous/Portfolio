import ExpressJS from "@/assets/techIcons/expressjs.svg";
import Git from "@/assets/techIcons/git.svg";
import JavaScript from "@/assets/techIcons/javascript.gif";
import MaterialUI from "@/assets/techIcons/material-ui.svg";
import MongoDB from "@/assets/techIcons/mongodb.svg";
import NextJS from "@/assets/techIcons/nextjs.svg";
import NodeJS from "@/assets/techIcons/nodejs.svg";
import PostgreSQL from "@/assets/techIcons/postgresql.svg";
import Prisma from "@/assets/techIcons/prisma.svg";
import ReactJS from "@/assets/techIcons/react.svg";
import RTK from "@/assets/techIcons/redux-toolkit-redux.svg";
import TailwindCSS from "@/assets/techIcons/tailwindcss.svg";
import TypeScript from "@/assets/techIcons/typescript.svg";
import { TechStack } from "@/types/types";
import Image from "next/image";

interface Props {
  id: string;
}

const Skills = ({ id }: Props) => {
  const techStacks: TechStack[] = [
    {
      id: 1,
      icon: JavaScript,
      label: "JavaScript",
    },
    {
      id: 2,
      icon: TypeScript,
      label: "TypeScript",
    },
    {
      id: 3,
      icon: MaterialUI,
      label: "Material UI",
    },
    {
      id: 4,
      icon: TailwindCSS,
      label: "TailwindCSS",
    },
    {
      id: 5,
      icon: ReactJS,
      label: "React",
    },
    {
      id: 6,
      icon: RTK,
      label: "Redux Toolkit",
    },
    {
      id: 7,
      icon: NodeJS,
      label: "Node.js",
    },
    {
      id: 7,
      icon: ExpressJS,
      label: "Express",
    },
    {
      id: 8,
      icon: MongoDB,
      label: "MongoDB",
    },
    {
      id: 9,
      icon: NextJS,
      label: "Next.js",
    },
    {
      id: 10,
      icon: Prisma,
      label: "Prisma",
    },
    {
      id: 11,
      icon: PostgreSQL,
      label: "PostgreSQL",
    },
    {
      id: 12,
      icon: Git,
      label: "Git",
    },
  ];

  return (
    <div id={id} className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-orange-500 font-bold m-5">
        Technologies I&apos;ve worked on:
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        {techStacks.map((item) => (
          <div
            className="border border-gray-300 shadow-lg rounded-xl w-[32dvw] h-[16dvh] flex flex-col justify-center items-center m-2 p-2 hover:border-orange-300 lg:w-[16dvw] 2xl:w-[12vw] 2xl:h-[12vh] sm:w-[16dvw]"
            key={item.id}
          >
            <Image
              className="2xl:w-[6dvw] 2xl:h-[6dvh] xl:w-[8dvw] xl:h-[8dvh] lg:w-[8dvw] lg:h-auto md:w-[10vw] md:h-auto w-[14dvw] h-auto"
              src={item.icon}
              alt={item.label}
            />
            <h1 className="font-bold text-xs m-1">{item.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
