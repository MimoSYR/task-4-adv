import { Link, NavLink } from "react-router";
import "./Header.css";
import { useState } from "react";
interface MenuItem {
  label: string;
  path: string;
}

interface HeaderProps {
  logo?: string;
  menuItems?: MenuItem[];
  height?: number;
}

const Header = ({
  logo = "FloraLogo.png",
  menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Service", path: "/service" },
    { label: "New Property", path: "/newProperty" },
    { label: "Contact", path: "/contact" },
  ],
}: HeaderProps) => {
  const [isMenuOppened, setIsMenuOppened] = useState(false);

  return (
    <header>
      <div className="header-container container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          {/* for large screens */}
          <ul className="menu">
            {menuItems.map((item: MenuItem) => (
              <li className="menu-item">
                <NavLink key={item.label} to={item.path}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* for small screens */}
          <button onClick={() => setIsMenuOppened(true)} className="menu-btn">
            <Link to="/">
              <img src="icons/Hamburger.png" alt="" />
            </Link>
          </button>
          <nav className={`menu-mobile ${isMenuOppened ? "move-down" : ""}`}>
            <div className="menu-close">
              <div className="header-logo">
                <Link to="/">
                  {" "}
                  <img src={logo} alt="" />
                </Link>
              </div>
              <button onClick={() => setIsMenuOppened(false)}>
                <img src="icons/Close.png" alt="" />
              </button>
            </div>
            <ul>
              {menuItems.map((item: MenuItem) => (
                <li className="menu-item">
                  <NavLink key={item.label} to={item.path}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="login-btn">
              <button>Login</button>
            </div>
          </nav>
        </nav>
        <div className="login-btn">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
