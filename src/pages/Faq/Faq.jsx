import { useState } from "react";
import "./Faq.scss";

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
  const [content, setContent] = useState(BUTTONS[0].content);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (newContent, index) => {
    setContent(newContent);
    setActiveIndex(index);
  };

  return (
    <section className="section-faq">
      <div className="faq-buttons">
        {BUTTONS.map((btn, i) => (
          <button
            key={i}
            className={`faq-button ${activeIndex === i ? "faq-active" : ""}`}
            onClick={() => handleButtonClick(btn.content, i)}
          >
            {btn.buttonText}
          </button>
        ))}
      </div>

      <div className="faq-content">{content}</div>
    </section>
  );
};

export default Faq;
