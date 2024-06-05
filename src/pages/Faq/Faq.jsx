import { useState } from "react";
import "./Faq.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const BUTTONS = [
  {
    buttonText: "All-Star Race",
    content: "nush20",
  },
  {
    buttonText: "TCR-Grand Prix",
    content: "nush30",
  },
  {
    buttonText: "Pre-season Testing",
    content: "nush40",
  },
  {
    buttonText: "Teammate/Car Selection",
    content: "nush50",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const leftButtonClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(BUTTONS.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const rightButtonClick = () => {
    if (activeIndex === BUTTONS.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <section className="section-faq">
      <div className="mobile-faq-buttons">
        <button onClick={leftButtonClick} className="mobile-faq-nav">
          <FontAwesomeIcon
            icon={faLessThan}
            size="2xl"
            style={{ color: "#2a38b481" }}
          />
        </button>

        <span className="mobile-faq-button">
          {BUTTONS[activeIndex].buttonText}
        </span>

        <button onClick={rightButtonClick} className="mobile-faq-nav">
          <FontAwesomeIcon
            icon={faGreaterThan}
            size="2xl"
            style={{ color: "#2a38b481" }}
          />
        </button>
      </div>
      <div className="faq-buttons">
        {BUTTONS.map((btn, i) => (
          <button
            key={i}
            className={`faq-button ${activeIndex === i ? "faq-active" : ""}`}
            onClick={() => handleButtonClick(i)}
          >
            {btn.buttonText}
          </button>
        ))}
      </div>

      <div className="faq-content">{BUTTONS[activeIndex].content}</div>
    </section>
  );
};

export default Faq;
