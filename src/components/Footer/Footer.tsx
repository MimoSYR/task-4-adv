import { Link } from "react-router";
import "./Footer.css";

interface ServiceProps {
  id: number;
  service: string;
}

interface AboutProps {
  id: number;
  about: string;
}

interface FooterProps {
  logo?: string;
  description?: string;
  service?: ServiceProps[];
  about?: AboutProps[];
  location?: string;
  facebookURL?: string;
  tweeterURL?: string;
  linkedInkURL?: string;
  copyright?: string;
}

const Footer = ({
  logo = "FloraLogo.png",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
  service = [
    { id: 1, service: "Payment & Tax" },
    { id: 2, service: "Features" },
    { id: 3, service: "View Booking" },
    { id: 4, service: "Support" },
  ],
  about = [
    { id: 1, about: "About us" },
    { id: 2, about: "News" },
    { id: 3, about: "Pricing" },
    { id: 4, about: "New Property" },
  ],
  location = "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  facebookURL = "/",
  tweeterURL = "/",
  linkedInkURL = "/",
  copyright = "Copyright 2024 flora. All Rights Reserved",
}: FooterProps) => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="top">
          <div className="info">
            <img src={logo} alt="" />
            <p>{description}</p>
          </div>
          <div className="service list">
            <h3>Service</h3>
            {service.map((service) => (
              <p key={service.id}>{service.service}</p>
            ))}
          </div>
          <div className="about list">
            <h3>About</h3>
            {about.map((about) => (
              <p key={about.id}>{about.about}</p>
            ))}
          </div>
          <div className="location list">
            <h3>Our Location</h3>
            <p>{location}</p>
            <div className="socials">
              <Link to={facebookURL}>
                <img src="/icons/facebook-fill.png" alt="" />
              </Link>
              <Link to={tweeterURL}>
                <img src="/icons/twitter-fill.png" alt="" />
              </Link>
              <Link to={linkedInkURL}>
                <img src="/icons/linkedin-fill.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="copyright">
            <p>{copyright}</p>
          </div>
          <div className="policy">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
