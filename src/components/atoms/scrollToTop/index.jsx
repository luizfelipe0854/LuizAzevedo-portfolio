import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <a
          href="#"
          className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300 z-50"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp className="text-xl" />
        </a>
      )}
    </>
  );
}

export default ScrollToTop;
