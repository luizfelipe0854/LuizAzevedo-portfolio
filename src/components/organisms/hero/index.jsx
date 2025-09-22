import luizPhoto from "../../../assets/Luiz.jpg";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 gap-12 md:flex-row md:justify-evenly md:gap-8">
      <div className="flex justify-center w-full max-w-[320px] md:w-auto md:order-last">
        <img
          src={luizPhoto}
          loading="lazy"
          alt="Luiz Azevedo"
          className="w-64 md:w-80 rounded-[50%] border-2 border-solid border-[var(--color-primary-hover)] shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="text-center md:text-left w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-textMain mainTitle">
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
        <h2 className="text-xl md:text-2xl text-textSecondary mt-4">
          Desenvolvedor Front-End
        </h2>
        <p className="text-base md:text-lg text-textSecondary mt-4">
          Transformando ideias em experiências digitais
        </p>
      </div>
    </section>
  );
}

export default Hero;
