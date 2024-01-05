import Eren from "@/assets/eren.jpg";
import Image from "next/image";

interface Props {
  id: string;
}

const About = ({ id }: Props) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center justify-center 2xl:mt-60 xl:mt-52 lg:mt-60 md:mt-48 mt-32"
    >
      <Image
        className="morphPic md:w-[28dvw] md:h-auto lg:w-[26dvw] lg:h-auto 2xl:w-[38dvw] 2xl:h-auto xl:w-[22dvw] xl:h-auto w-[42vw] h-auto"
        src={Eren}
        alt="my-pic"
      />
      <div className="m-5">
        <p>
          Hi, I&apos;m Min Thant Khaing. A dedicated
          <span className="text-orange-500 font-bold"> Backend Developer </span>
          with a knack for crafting robust server-side applications. Whether
          architecting APIS, I bring an unbeatable passion for clean code and
          innovative problem solving.
        </p>
      </div>
    </div>
  );
};

export default About;
