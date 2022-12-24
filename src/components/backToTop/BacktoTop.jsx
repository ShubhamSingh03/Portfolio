import { BsFillArrowUpSquareFill } from "react-icons/bs";
const BacktoTop = () => {
  let topButton = document.getElementById("topBtn");
  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 100) {
      topButton.classList.remove("hidden");
      topButton.classList.add("flex");
    } else {
      topButton.classList.add("hidden");
    }
  };

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <span
      className="hidden fixed right-1 bottom-2 md:right-4 cursor-pointer text-[#989898] hover:text-opacity-50 focus:text-opacity-50"
      title="Go to Top"
      id="topBtn"
    >
      <BsFillArrowUpSquareFill size={36} onClick={topFunction} />
    </span>
  );
};

export default BacktoTop;
