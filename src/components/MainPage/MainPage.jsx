import React, { useEffect } from "react";
import "./MainPage.scss";
import { HomeContent } from "../Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export const MainPage = () => {
	return (
		<>
			<Header />
			<MainContent />
			<Footer />
		</>
	);
};

const Header = () => {
	return (
		<header className='mainHeader'>
			<div className='logoContainer'>
				<img
					className='logoImage'
					src='/TCR_transparent.png'
					alt='logo'
				/>
				<div className='textContainer'>
					<span className='logoText'>Trinity Competitive Racing</span>
					<span className='logoSubText'>
						Unlock your Racing Potential
					</span>
				</div>
			</div>
			<SocialMedia />
		</header>
	);
};

const SocialMedia = () => {
	return (
		<div className='socialContainer'>
			<FontAwesomeIcon
				icon={faFacebookF}
				size='xl'
				style={{ color: "#e9e9e9" }}
			/>
			<FontAwesomeIcon
				icon={faTwitter}
				size='xl'
				style={{ color: "#e9e9e9" }}
			/>
			<FontAwesomeIcon
				icon={faInstagram}
				size='xl'
				style={{ color: "#e9e9e9" }}
			/>
			<FontAwesomeIcon
				icon={faDiscord}
				size='xl'
				style={{ color: "#e9e9e9" }}
			/>
			<FontAwesomeIcon
				icon={faYoutube}
				size='xl'
				style={{ color: "#e9e9e9" }}
			/>
			<FontAwesomeIcon
				icon={faTwitch}
				size='xl'
				style={{ color: "#e9e9e9" }}
			/>
			<FontAwesomeIcon
				icon={faTiktok}
				style={{ color: "#e9e9e9" }}
			/>
		</div>
	);
};

const NavBar = () => {
	const [active, setActive] = React.useState("Home");
	const navItems = [{ name: "Home" }, { name: "About" }, { name: "Info" }];

	useEffect(() => {
		const activeElement = document.getElementById(active);
		const navItems = document.getElementsByClassName("navItem");

		for (let i = 0; i < navItems.length; i++) {
			navItems[i].classList.remove("active");
		}
		activeElement.classList.add("active");
	}, [active]);

	return (
		<nav className='navBar'>
			{navItems.map((item, index) => (
				<button
					onClick={() => setActive(item.name)}
					key={index}
					id={item.name}
					className='navItem'>
					{item.name}
				</button>
			))}
		</nav>
	);
};

const MainContent = () => {
	return (
		<main className='mainContent'>
			{" "}
			<HomeContent />{" "}
		</main>
	);
};

const Footer = () => {
	return (
		<footer className='footer'>
			<NavBar />
		</footer>
	);
};
