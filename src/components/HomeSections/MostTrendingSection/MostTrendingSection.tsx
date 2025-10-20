import "./MostTrendingSection.css";
import MostTrendingCard from "../../UI/MostTrendingCard/MostTrendingCard";

export interface MostTrendingCardProps {
  id: number;
  image: string;
  price: number;
  title: string;
  location: string;
}

interface MostTrendingSectionProps {
  title?: string;
  paragraph?: string;
  cardsData?: MostTrendingCardProps[];
}

const MostTrendingSection = ({
  title = "Most Trending",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  cardsData = [
    {
      id: 1,
      image: "/mostTrending/mostTrending1.png",
      price: 300000,
      title: "Luxury Apartment in California",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      id: 2,
      image: "/mostTrending/mostTrending2.png",
      price: 300000,
      title: "Luxury Apartment in California",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      id: 3,
      image: "/mostTrending/mostTrending3.png",
      price: 300000,
      title: "Luxury Apartment in California",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      id: 4,
      image: "/mostTrending/mostTrending4.png",
      price: 300000,
      title: "Luxury Apartment in California",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      id: 5,
      image: "/mostTrending/mostTrending5.png",
      price: 300000,
      title: "Luxury Apartment in California",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      id: 6,
      image: "/mostTrending/mostTrending6.png",
      price: 300000,
      title: "Luxury Apartment in California",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
  ],
}: MostTrendingSectionProps) => {
  return (
    <section id="most-trending">
      <div className="most-trending-container container">
        <div className="data">
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="cards-container">
          {cardsData.map((card) => (
            <MostTrendingCard
              key={card.id}
              id={card.id}
              image={card.image}
              price={card.price}
              title={card.title}
              location={card.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostTrendingSection;
