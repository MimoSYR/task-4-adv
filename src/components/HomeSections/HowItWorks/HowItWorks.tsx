import "./HowItWorks.css"
import Card from "../../UI/Card/Card";

export interface CardData {
  id: number;
  icon: string;
  header: string;
  description: string;
}

interface HowItWorksProps {
    title?: string;
    paragraph?: string;
    cardsData?: CardData[]
}

const HowItWorks = ({
  title = "How it Works",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  cardsData = [
    {
      id: 1,
      icon: "/icons/search.svg",
      header: "Search Apartment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
      id: 2,
      icon: "/icons/hand.svg",
      header: "Select Apartment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
      id: 3,
      icon: "/icons/check.svg",
      header: "Confirm Apartment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
  ],
}: HowItWorksProps) => {
  return (
    <section id="how-it-works">
      <div className="how-it-works-container container">
        <div className="data">
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="cards-container">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              icon={card.icon}
              header={card.header}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks