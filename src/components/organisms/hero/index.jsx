import { useState } from "react";
import luizPhoto from "../../../assets/Luiz.jpg";
import cvFile from "../../../assets/CV-LuizFelipe.pdf";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { TbFileCv } from "react-icons/tb";
import IconLink from "../../atoms/iconLink";

function Hero() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "luizazevedo.dev@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 gap-12 md:flex-row md:justify-between md:gap-8">
      <div className="flex justify-center w-full max-w-[320px] md:w-auto md:order-last">
        <img
          src={luizPhoto}
          loading="lazy"
          alt="Luiz Azevedo"
          className="w-64 md:w-70 rounded-[50%] border-2 border-solid border-[var(--color-primary-hover)] shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="text-center md:text-left w-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-textMain mainTitle">
          <Typewriter
            words={[
              "Oi, eu sou o Luiz!",
              "Hi, I am Luiz!",
              "¡Hola, soy Luiz!",
              "Ciao, sono Luiz!",
            ]}
            loop={0}
            cursor={true}
            cursorColor="var(--color-text-main)"
            typeSpeed={100}
          />
        </h1>
        <h1 className="text-lg text-textSecondary mt-4">
          Desenvolvedor Front-End
        </h1>

        <div className="mt-6 flex flex-col  gap-4">
          <div className="flex gap-4 justify-center items-center md:justify-start">
            <IconLink
              link="https://www.linkedin.com/in/luizfelipedemeloazevedo/"
              size="text-3xl"
            >
              <FaLinkedin />
            </IconLink>
            <IconLink link="https://github.com/luizfelipe0854" size="text-3xl">
              <FaGithub />
            </IconLink>
            <IconLink link="https://wa.me/5511996183695" size="text-3xl">
              <FaWhatsapp />
            </IconLink>
            <IconLink link={cvFile} size="text-3xl" download>
              <TbFileCv />
            </IconLink>
          </div>
          <IconLink
            className="flex items-center justify-center md:justify-start"
            size="text-3xl"
          >
            {copied ? <IoCheckmarkSharp /> : <GoPaperclip />}
            <span
              className="text-default-size text-textSecondary cursor-pointer"
              onClick={handleCopy}
            >
              {copied ? "Email copiado!" : "luizazevedo.dev@gmail.com"}
            </span>
          </IconLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
