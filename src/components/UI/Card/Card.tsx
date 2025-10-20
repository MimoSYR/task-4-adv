import type { CardData } from "../../HomeSections/HowItWorks/HowItWorks";
import "./Card.css";

const Card = ({ id, icon, header, description }: CardData) => {
  return (
    <div className={`card ${id % 2 === 0 ? "blue" : ""}`}>
      <div className="card-icon">
        {/* {React.cloneElement(icon, {className: "card-svg-icon"})} */}
        <img src={icon} alt="" />
      </div>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
