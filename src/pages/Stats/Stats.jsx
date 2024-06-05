import "./Stats.scss";
import "./MobileStats.scss";
import { useEffect, useState } from "react";
import { BUTTONS } from "./Contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const Stats = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [mainButtonIndex, setMainButtonIndex] = useState(0);
	const [navButton, setNavButton] = useState(BUTTONS[mainButtonIndex]);
	const [content, setContent] = useState(navButton.subButtons[0].content);

	const handleNavButtonClick = (btn) => {
		setNavButton(btn);
		setActiveIndex(0);
		setContent(btn.subButtons[0].content);
	};

	const handleClick = (newContent, index) => {
		setActiveIndex(index);
		setContent(newContent);
	};

	const leftButtonClick = () => {
		if (mainButtonIndex === 0) {
			setActiveIndex(0);
			setMainButtonIndex(BUTTONS.length - 1);
		} else {
			setActiveIndex(0);
			setMainButtonIndex(mainButtonIndex - 1);
		}
	};

	const rightButtonClick = () => {
		if (mainButtonIndex === BUTTONS.length - 1) {
			setActiveIndex(0);
			setMainButtonIndex(0);
		} else {
			setActiveIndex(0);
			setMainButtonIndex(mainButtonIndex + 1);
		}
	};

	const leftNavButtonClick = () => {
		if (activeIndex === 0) {
			setActiveIndex(navButton.subButtons.length - 1);
		} else {
			setActiveIndex(activeIndex - 1);
		}
	};

	const rightNavButtonClick = () => {
		if (activeIndex === navButton.subButtons.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	};

	useEffect(() => {
		setNavButton(BUTTONS[mainButtonIndex]);
		setContent(BUTTONS[mainButtonIndex].subButtons[0].content);
	}, [mainButtonIndex]);

	return (
		<section className='stats-container'>
			<div className='mobile-stats-buttons'>
				<button
					onClick={leftButtonClick}
					className='mobile-arrow'>
					<FontAwesomeIcon
						icon={faLessThan}
						size='2xl'
						style={{ color: "#2a38b481" }}
					/>
				</button>

				<span className='mobile-button'>{navButton.buttonText}</span>

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
				<div className='content'>
					<div className='sub-stats-mobile-nav'>
						<button
							onClick={leftNavButtonClick}
							className='mobile-arrow'>
							<FontAwesomeIcon
								icon={faLessThan}
								size='2xl'
								style={{ color: "#e6e6e6" }}
							/>
						</button>

						<span className='mobile-stats-button'>
							{navButton.subButtons[activeIndex].buttonText}
						</span>

						<button
							onClick={rightNavButtonClick}
							className='mobile-arrow'>
							<FontAwesomeIcon
								icon={faGreaterThan}
								size='2xl'
								style={{ color: "#e6e6e6" }}
							/>
						</button>
					</div>
					<div className='content-div'>
						{navButton.subButtons[activeIndex].content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
