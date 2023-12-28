import ExpressJS from "@/assets/expressjs.svg";
import JavaScript from "@/assets/javascript.gif";
import MaterialUI from "@/assets/material-ui.svg";
import MongoDB from "@/assets/mongodb.svg";
import NextJS from "@/assets/nextjs.svg";
import PostgreSQL from "@/assets/postgresql.svg";
import Prisma from "@/assets/prisma.svg";
import ReactJS from "@/assets/react.svg";
import TypeScript from "@/assets/typescript.svg";
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
      icon: ReactJS,
      label: "React",
    },
    {
      id: 4,
      icon: ExpressJS,
      label: "Express",
    },
    {
      id: 5,
      icon: MongoDB,
      label: "MongoDB",
    },
    {
      id: 6,
      icon: NextJS,
      label: "Next.js",
    },
    {
      id: 7,
      icon: Prisma,
      label: "Prisma",
    },
    {
      id: 8,
      icon: PostgreSQL,
      label: "PostgreSQL",
    },
    {
      id: 9,
      icon: MaterialUI,
      label: "Material UI",
    },
  ];

  return (
    <div id={id} className="flex flex-col justify-center items-center">
      <h1 className="text-orange-500 font-bold m-5">
        Technologies I&apos;ve worked on:
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        {techStacks.map((item) => (
          <div
            className="border border-gray-300 shadow-lg rounded-xl w-[32dvw] h-[16dvh] flex flex-col justify-center items-center m-2 hover:border-orange-300"
            key={item.id}
          >
            <Image className="w-14 h-14" src={item.icon} alt={item.label} />
            <h1 className="font-bold">{item.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;