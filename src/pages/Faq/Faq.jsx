import React, { useState } from "react";
import "./Faq.scss";

const BUTTONS = [
  {
    buttonText: "All-Star Race",
  },
];

const Faq = () => {
  const [content, setContent] = useState("1");

  const handleButtonClick = (newContent) => {
    setContent(newContent);
  };

  return (
    <section className="section-faq">
      <div className="faq-buttons">
        <button className="faq-button" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="faq-button" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="faq-button" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="faq-button" onClick={() => handleButtonClick("4")}>
          4
        </button>
      </div>

      <div className="faq-content">{content}</div>
    </section>
  );
};

export default Faq;
