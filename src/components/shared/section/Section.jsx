import "./section.css";

// common Section component
const Section = ({ children, id, className, title, background }) => {
  return (
    <div
      id={id || ""}
      className={`section ${className ? className : ""} ${
        background === "dark" ? "dark" : "light"
      }`}
    >
      <div className="content">
        {title && (
          <div className="section-title">
            <h2>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
// common second Section component
export const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="second-content">
        <h2 className="backG-text"></h2>
      </div>
    </div>
  );
};

export default Section;
