import { Bars } from "react-loader-spinner";
import "./loader.css";

// loader component
const Loader = () => {
  return (
    <div className="loader-class">
      <Bars
        height="80"
        width="80"
        color="var(--white)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
