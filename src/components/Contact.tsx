import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface Props {
  id: string;
}

const Contact = ({ id }: Props) => {
  return (
    <div id={id} className="flex justify-center items-center">
      <div className="m-20 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-orange-500 m-5">Reach me out</h1>
        <div className="flex justify-center items-center">
          <a href="https://github.com/JasontheOmnivorous/" target="_blank">
            <p className="text-5xl m-6 animate-pulse">
              <FaGithub />
            </p>
          </a>
          <a href="https://www.facebook.com/min.thant.jason/" target="_blank">
            <p className="text-5xl m-6 animate-pulse">
              <FaFacebook />
            </p>
          </a>
          <a href="" target="_blank">
            <p className="text-5xl m-6 animate-pulse">
              <FaLinkedin />
            </p>
          </a>
          <a
            href="https://www.instagram.com/jason_the_omnivorous"
            target="_blank"
          >
            <p className="text-5xl m-6 animate-pulse">
              <FaInstagram />
            </p>
          </a>
        </div>
        <h1 className="text-orange-500 font-bold m-5">
          marsjason485@gmail.com
        </h1>
      </div>
    </div>
  );
};

export default Contact;
