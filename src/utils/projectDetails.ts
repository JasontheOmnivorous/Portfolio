import AuthSysCreateUser from "@/assets/auth-system/auth-system-createUser.jpg";
import AuthSysDeleteUser from "@/assets/auth-system/auth-system-deleteUser.jpg";
import AuthSysGetUser from "@/assets/auth-system/auth-system-getUser.jpg";
import AuthSysGetUsers from "@/assets/auth-system/auth-system-getUsers.jpg";
import AuthSysLogin from "@/assets/auth-system/auth-system-login.jpg";
import AuthSysSignup from "@/assets/auth-system/auth-system-signup.jpg";
import AuthSysUpdateUser from "@/assets/auth-system/auth-system-updateUser.jpg";
import EcomCreateProduct from "@/assets/ecommerce-api/ecommerce-api-createProduct.jpg";
import EcomCreateUser from "@/assets/ecommerce-api/ecommerce-api-createUser.jpg";
import EcomDeleteProduct from "@/assets/ecommerce-api/ecommerce-api-deleteProduct.jpg";
import EcomDeleteUser from "@/assets/ecommerce-api/ecommerce-api-deleteUser.jpg";
import EcomGetProduct from "@/assets/ecommerce-api/ecommerce-api-getProduct.jpg";
import EcomGetProducts from "@/assets/ecommerce-api/ecommerce-api-getProducts.jpg";
import EcomGetUser from "@/assets/ecommerce-api/ecommerce-api-getUser.jpg";
import EcomGetUsers from "@/assets/ecommerce-api/ecommerce-api-getUsers.jpg";
import EcomLogin from "@/assets/ecommerce-api/ecommerce-api-login.jpg";
import EcomSignup from "@/assets/ecommerce-api/ecommerce-api-signup.jpg";
import EcomUpdateProduct from "@/assets/ecommerce-api/ecommerce-api-updateProduct.jpg";
import EcomUpdateUser from "@/assets/ecommerce-api/ecommerce-api-updateUser.jpg";
import EcommerceFrontend from "@/assets/ecommerce-frontend.jpg";
import MiniEcommerce from "@/assets/mini-commerce.jpg";
import NatoursCreateTour from "@/assets/natours/natours-createTour.jpg";
import NatoursCreateUser from "@/assets/natours/natours-createUser.jpg";
import NatoursDeleteTour from "@/assets/natours/natours-deleteTour.jpg";
import NatoursDeleteUser from "@/assets/natours/natours-deleteUser.jpg";
import NatoursGetTour from "@/assets/natours/natours-getTour.jpg";
import NatoursGetTours from "@/assets/natours/natours-getTours.jpg";
import NatoursGetUser from "@/assets/natours/natours-getUser.jpg";
import NatoursGetUsers from "@/assets/natours/natours-getUsers.jpg";
import NatoursLogin from "@/assets/natours/natours-login.jpg";
import NatoursSignup from "@/assets/natours/natours-signup.jpg";
import NatoursTop5CheapTours from "@/assets/natours/natours-top-5-cheapTours.jpg";
import NatoursTourStatistics from "@/assets/natours/natours-tour-statistics.jpg";
import NatoursUpdateTour from "@/assets/natours/natours-updateTour.jpg";
import NatoursUpdateUser from "@/assets/natours/natours-updateUser.jpg";
import NodeFarm from "@/assets/node-farm.jpg";
import { ProjectDetail } from "@/types/types";

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    name: "Auth System",
    apiDocs: "https://min-thant.gitbook.io/auth-system-api-documentation/",
    apiTestImg: [
      {
        id: 1,
        image: AuthSysSignup,
      },
      {
        id: 2,
        image: AuthSysLogin,
      },
      {
        id: 3,
        image: AuthSysGetUsers,
      },
      {
        id: 4,
        image: AuthSysGetUser,
      },
      {
        id: 5,
        image: AuthSysCreateUser,
      },
      {
        id: 6,
        image: AuthSysUpdateUser,
      },
      {
        id: 7,
        image: AuthSysDeleteUser,
      },
    ],
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
    apiTestImg: [
      {
        id: 1,
        image: EcomSignup,
      },
      {
        id: 2,
        image: EcomLogin,
      },
      {
        id: 3,
        image: EcomGetUsers,
      },
      {
        id: 4,
        image: EcomGetUser,
      },
      {
        id: 5,
        image: EcomCreateUser,
      },
      {
        id: 6,
        image: EcomUpdateUser,
      },
      {
        id: 7,
        image: EcomDeleteUser,
      },
      {
        id: 8,
        image: EcomGetProducts,
      },
      {
        id: 9,
        image: EcomGetProduct,
      },
      {
        id: 10,
        image: EcomCreateProduct,
      },
      {
        id: 11,
        image: EcomUpdateProduct,
      },
      {
        id: 12,
        image: EcomDeleteProduct,
      },
    ],
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
    apiTestImg: [
      {
        id: 1,
        image: NatoursSignup,
      },
      {
        id: 2,
        image: NatoursLogin,
      },
      {
        id: 3,
        image: NatoursGetUsers,
      },
      {
        id: 4,
        image: NatoursGetUser,
      },
      {
        id: 5,
        image: NatoursCreateUser,
      },
      {
        id: 6,
        image: NatoursUpdateUser,
      },
      {
        id: 7,
        image: NatoursDeleteUser,
      },
      {
        id: 8,
        image: NatoursGetTours,
      },
      {
        id: 9,
        image: NatoursGetTour,
      },
      {
        id: 10,
        image: NatoursCreateTour,
      },
      {
        id: 11,
        image: NatoursUpdateTour,
      },
      {
        id: 12,
        image: NatoursDeleteTour,
      },
      {
        id: 13,
        image: NatoursTop5CheapTours,
      },
      {
        id: 14,
        image: NatoursTourStatistics,
      },
    ],
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
