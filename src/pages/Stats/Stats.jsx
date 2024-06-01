import "./Stats.scss";
import { useState } from "react";
import { BUTTONS } from "./Contents";
import classNames from "classnames";

const Stats = () => {
	const [navButton, setNavButton] = useState(BUTTONS[0]);
	const [content, setContent] = useState(navButton.subButtons[0].content);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNavButtonClick = (btn) => {
		setNavButton(btn);
		setActiveIndex(0);
		setContent(btn.subButtons[0].content);
	};

	const handleClick = (newContent, index) => {
		setActiveIndex(index);
		setContent(newContent);
	};

	return (
		<div className='stats-container'>
			<div className='nav-buttons'>
				{BUTTONS.map((btn, i) => (
					<button
						key={i}
						className={classNames("nav-button", {
							navButtonActive: navButton === btn,
						})}
						onClick={() => handleNavButtonClick(btn)}>
						{btn.buttonText}
					</button>
				))}
			</div>
			<div className='sub-content-container'>
				<div className='sub-btn-container'>
					{navButton.subButtons.map((subBtn, i) => (
						<button
							key={i}
							className={classNames("sub-button", {
								activeSubBtn: activeIndex === i,
							})}
							onClick={() => handleClick(subBtn.content, i)}>
							{subBtn.buttonText}
						</button>
					))}
				</div>
				<div className='content'>{content}</div>
			</div>
		</div>
	);
};

export default Stats;
