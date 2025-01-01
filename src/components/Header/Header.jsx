import logo from "../../assets/calcul.png";
import "../Header/Header.css";

import { useState } from "react";

export default function Header({ selectedTopic }) {
  let Description;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSidebar = () => {
    setIsMenuOpen(false); // X 버튼 클릭 시 사이드바 닫기
  };

  if (selectedTopic === "PBR") {
    Description = (
      <span className="text-container">
        <p id="description">
          Expected rate of return is the 'discount rate' and 'the gap between
          the value applied at that discount rate and the current price' <br />
          <span className="targetValue">
            ex. DiscountRate = 10% , ROE = 15% <br /> Expected sustainability
            period = 7years , <br />
            appropriate P/B ratio =1.37
            <br />{" "}
          </span>
          <span className="theReslut">
            Gap Rate of Return = appropriate P/B ratio - market's P/B ratio
          </span>
        </p>
      </span>
    );
  } else if (selectedTopic === "Annual Yield") {
    Description = (
      <span className="text-container">
        <p id="description">
          Expected rate of return is the 'discount rate' and 'the gap between
          the value applied at that discount rate and the current price' <br />
          <span className="targetValue">
            ex. PBR = 1.05, ROE = 15% <br /> Expected sustainability period =
            7years , <br />
            AnnualYield = 14.2%
            <br />{" "}
          </span>
          <span className="theReslut">
            By inverting PBR, you can find the average annual rate of return.
          </span>
        </p>
      </span>
    );
  }

  return (
    <header id="header">
      <nav className="container">
        <button className="menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
<<<<<<< HEAD
        <h1>Valu Calculator</h1>
=======
        <h1>Gap Rate of Return</h1>
>>>>>>> 83746d56b0109d1c8a5a16a58bd4d32adf6ede50
      </nav>
      <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          X
        </button>{" "}
        <nav>
          <ul>
            <li>home</li>
            <li>Email : lsylsy0615@nave.com </li>
            <li>Email : leesaungyoun0615 @gamil.com </li>

            <li>Good Luck</li>
          </ul>
        </nav>
      </aside>

      <div className="image-container">
        <img src={logo} alt="logic" />
        {Description}
      </div>
    </header>
  );
}
