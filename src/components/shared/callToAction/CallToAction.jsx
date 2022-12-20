import "./calltoaction.css";
import Arrow from "../arrow/Arrow";

// common call to action btn component
const CallToAction = ({ text, action, icon }) => {
  return (
    <div className="call-to-action" onClick={action}>
      <span className="text">{text}</span>
      {icon ? <div className="icon">{icon}</div> : <Arrow />}
    </div>
  );
};

export default CallToAction;
