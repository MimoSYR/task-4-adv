import type { ReactElement } from "react";
import "./HowItWorks.css"
import Card from "../../UI/Card/Card";

export interface CardData {
    id: number;
    icon?: ReactElement;
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
      header: "Search Apartment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
      id: 2,
      header: "Select Apartment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
      id: 3,
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
                <Card key={card.id} id={card.id} header={card.header} description={card.description} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks