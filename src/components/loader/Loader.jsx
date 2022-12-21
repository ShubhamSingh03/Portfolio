import { FallingLines } from "react-loader-spinner";
import "./loader.css";

// loader component
const Loader = () => {
  return (
    <div className="loader-class">
      <FallingLines
        color="var(--gray-lighter)"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};

export default Loader;
