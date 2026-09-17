import { useState, useEffect } from "react";
import Title from "@/components/atoms/title";

function Paragraph({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  function toggleReadMore() {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      {title && <Title>{title}</Title>}

      <section id="sobre" className="flex flex-col justify-center">
        <p
          className={`text-default-size leading-[24px] ${
            isMobile && !isExpanded ? "max-h-[190px]" : "max-h-none"
          } overflow-y-hidden sm:max-h-none`}
        >
          {children}
        </p>
        {isMobile && (
          <button
            onClick={toggleReadMore}
            className="text-default-size font-bold text-textMain cursor-pointer justify-center mt-2"
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
          </button>
        )}
      </section>
    </>
  );
}

export default Paragraph;
