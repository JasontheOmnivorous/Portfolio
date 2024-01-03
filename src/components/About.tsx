import Eren from "@/assets/eren.jpg";
import Image from "next/image";

interface Props {
  id: string;
}

const About = ({ id }: Props) => {
  return (
    <div id={id} className="flex flex-col items-center justify-center mt-24">
      <Image
        className="morphPic lg:w-40 lg:h-auto w-[38vw] h-auto"
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
