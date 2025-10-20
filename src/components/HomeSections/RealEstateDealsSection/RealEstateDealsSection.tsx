import { useState } from "react";
import "./RealEstateDealsSection.css";
import DealsCard from "../../UI/DealsCard/DealsCard";

export interface Tag {
  id: number;
  label: string;
}

export interface RealEstateDealsCardProps {
  id: number;
  image: string;
  tags: string[];
}

interface RealEstateDealsSectionProps {
  title?: string;
  paragraph?: string;
  tags?: Tag[];
  cardsData?: RealEstateDealsCardProps[];
}

const RealEstateDealsSection = ({
  title = "Best Real Estate Deals",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  tags = [
    {
      id: 1,
      label: "All",
    },
    {
      id: 2,
      label: "Residential Property",
    },
    {
      id: 3,
      label: "Commercial Property",
    },
    {
      id: 4,
      label: "Agriculture Property",
    },
    {
      id: 5,
      label: "Industrial Property",
    },
  ],
  cardsData = [
    {
      id: 1,
      image: "/RealEstateDeals/RealEstateDeals1.jpg",
      tags: ["Residential Property", "Industrial Property"],
    },
    {
      id: 2,
      image: "/RealEstateDeals/RealEstateDeals2.jpg",
      tags: ["Residential Property", "Commercial Property"],
    },
    {
      id: 3,
      image: "/RealEstateDeals/RealEstateDeals3.jpg",
      tags: ["Residential Property", "Agriculture Property"],
    },
    {
      id: 4,
      image: "/RealEstateDeals/RealEstateDeals1.jpg",
      tags: ["Industrial Property"],
    },
    {
      id: 5,
      image: "/RealEstateDeals/RealEstateDeals3.jpg",
      tags: [""],
    },
    {
      id: 6,
      image: "/RealEstateDeals/RealEstateDeals2.jpg",
      tags: [""],
    },
  ],
}: RealEstateDealsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState("Residential Property");
  const filteredCards =
    activeFilter.toLowerCase() === "all"
      ? cardsData
      : cardsData.filter((card) => card.tags.includes(activeFilter));
  return (
    <section id="real-estate-deals">
      <div className="real-estate-deals-container container">
        <div className="data">
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="filter-tags-container">
          <div className="filter-tags">
            {tags.map((tag) => (
              <button
                key={tag.id}
                className={`${activeFilter === tag.label ? "active" : ""}`}
                onClick={() => setActiveFilter(tag.label)}>
                {tag.label}
              </button>
            ))}
          </div>
        </div>
        <div className="cards-container">
          {filteredCards.map((card) => (
            <DealsCard key={card.id} image={card.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateDealsSection;
