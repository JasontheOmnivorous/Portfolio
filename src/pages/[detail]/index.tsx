import { projectDetails } from "@/utils/projectDetails";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";

const ProjectDetailPage = () => {
  const router = useRouter();

  const selectedProject = projectDetails.find(
    (item) => item.name === router.query.detail
  );

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-start m-5 flex-wrap">
      <h1 className="text-orange-500 font-bold m-2">{selectedProject?.name}</h1>
      {selectedProject?.apiTestImg &&
        selectedProject.apiTestImg.map((item) => (
          <div className="flex flex-wrap" key={item.id}>
            <Image
              className="lg:w-[90%] lg:h-auto md:w-[90%] md:h-auto w-[90%] h-auto mb-5 mt-5 rounded-xl shadow-xl"
              src={item.image}
              alt="api-test-image"
            />
          </div>
        ))}
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
