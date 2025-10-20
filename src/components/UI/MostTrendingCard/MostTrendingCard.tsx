import type { MostTrendingCardProps } from "../../HomeSections/MostTrendingSection/MostTrendingSection";
import "./MostTrendingCard.css";

const MostTrendingCard = ({
  image,
  price,
  title,
  location,
}: MostTrendingCardProps) => {
  return (
    <div className="most-trending-card">
      <img src={image} alt="" />
      <div className="card-body">
        <div className="info">
          <p>${price}</p>
          <h3>{title}</h3>
        </div>
        <div className="location">
          <img src="/icons/locationGray.png" alt="" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default MostTrendingCard;
