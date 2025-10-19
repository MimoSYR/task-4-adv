import "./FindDreamHomeSection.css";

interface FindDreamHomeSectionProps {
  title?: string;
  paragraph?: string;
  backgroundImage?: string;
}

const FindDreamHomeSection = ({
  title = "Find Dream Home",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  backgroundImage = "/clippings/homeDream.png",
}: FindDreamHomeSectionProps) => {
  return (
    <section id="find-dream-home">
      <div
        className="img-bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="black-bg">
          <div className="find-dream-home-container">
            <h2>{title}</h2>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindDreamHomeSection;
