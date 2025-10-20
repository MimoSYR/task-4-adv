import "./DealsCard.css"

interface DealsCardProps {
    image: string;
}

const DealsCard = ({ image }: DealsCardProps) => {
  return (
    <div className="deals-card">
      <div className="features">
        <p>Features</p>
        <p>3D</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default DealsCard