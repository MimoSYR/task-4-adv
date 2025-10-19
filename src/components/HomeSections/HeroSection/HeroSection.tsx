import "./HeroSection.css";

interface Statistic {
  id: number;
  icon: string;
  header: string;
  data: string;
}

interface HeroSectionProps {
  title?: string;
  description?: string;
  statistics?: Statistic[];
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Discover a place you will love to live",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
  statistics = [
    {
      id: 1,
      icon: "/icons/location.png",
      header: "Location",
      data: "Ahmedabad, India",
    },
    {
      id: 2,
      icon: "/icons/dollar-circle.png",
      header: "Price",
      data: "$1000 - $10,000",
    },
    {
      id: 3,
      icon: "/icons/house.png",
      header: "Type of Property",
      data: "Apartment",
    },
  ],
  backgroundImage = "/clippings/building.png",
}: HeroSectionProps) => {
  return (
    <section id="hero" className="">
      <div
        className="img-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-container">
          <div className="data">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="statistics">
            {statistics.map((statistic) => (
              <div key={statistic.id} className="statistic">
                <div className="icon">
                  <div className="bg-color"></div>
                  <img src={statistic.icon} alt="" />
                </div>
                <div className="info">
                  <h3>{statistic.header}</h3>
                  <p>{statistic.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
