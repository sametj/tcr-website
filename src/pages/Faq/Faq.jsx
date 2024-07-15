import { useState } from "react";
import "./Faq.scss";
import "./MobileFaq.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const BUTTONS = [
	{
		buttonText: "Feature Race",
		content: "/tcr-feature.png",
	},
	{
		buttonText: "TCR-Grand Prix",
		content: "/tcr-gp.png",
	},
	{
		buttonText: "Pre-season Testing",
		content: "/testing.png",
	},
	{
		buttonText: "Teammate/Car Selection",
		content: "/car-selection.png",
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
		<section className='section-faq'>
			<div className='mobile-faq-buttons'>
				<button
					onClick={leftButtonClick}
					className='mobile-arrow'>
					<FontAwesomeIcon
						icon={faLessThan}
						size='2xl'
						style={{ color: "#2a38b481" }}
					/>
				</button>

				<span className='mobile-button'>{BUTTONS[activeIndex].buttonText}</span>

				<button
					onClick={rightButtonClick}
					className='mobile-arrow'>
					<FontAwesomeIcon
						icon={faGreaterThan}
						size='2xl'
						style={{ color: "#2a38b481" }}
					/>
				</button>
			</div>
			<div className='faq-buttons'>
				{BUTTONS.map((btn, i) => (
					<button
						key={i}
						className={`faq-button ${activeIndex === i ? "faq-active" : ""}`}
						onClick={() => handleButtonClick(i)}>
						{btn.buttonText}
					</button>
				))}
			</div>

			<div className='faq-content'>
				<img
					src={BUTTONS[activeIndex].content}
					alt={BUTTONS[activeIndex].buttonText}
				/>
			</div>
		</section>
	);
};

export default Faq;
