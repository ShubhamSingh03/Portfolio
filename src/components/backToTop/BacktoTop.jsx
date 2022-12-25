import { useEffect, useState } from "react";
import { scrollToSection } from "../../utilities/helper";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

// back to top
const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  }, []);

  return (
    <>
      {isVisible && (
        <span
          className="fixed right-1 bottom-2 md:right-4 cursor-pointer text-[#989898] hover:text-opacity-50 focus:text-opacity-50"
          title="Go to Top"
          id="topBtn"
        >
          <BsFillArrowUpSquareFill
            size={36}
            onClick={() => scrollToSection("home")}
          />
        </span>
      )}
    </>
  );
};

export default BacktoTop;
