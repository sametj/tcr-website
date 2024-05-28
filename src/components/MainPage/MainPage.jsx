import React from "react";
import "./MainPage.scss";
import FacebookIcon from "/facebook-f.svg";

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
			<NavBar />
		</header>
	);
};

const NavBar = () => {
	const navItems = [
		{ name: "Home" },
		{ name: "AboutUs" },
		{ name: "Info" },
		{ name: "SignUp" },
	];

	return (
		<nav className='navBar'>
			{navItems.map((item, index) => (
				<button
					key={index}
					className='navItem'>
					{item.name}
				</button>
			))}
		</nav>
	);
};

const SocialIcons = () => {
	const socialIcons = [FacebookIcon];

	return (
		<div>
			{socialIcons.map((icon, index) => (
				<i>
					<img
						key={index}
						className='socialIcon'
						src={icon}
						alt='socialIcon'
					/>
				</i>
			))}
		</div>
	);
};

const MainContent = () => {
	return <main className='mainContent'></main>;
};

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footerLogo'>
				<img
					className='logoImage'
					src='/TCR_transparent.png'
					alt='logo'
				/>
				<span>Unlock your Racing Potential</span>
			</div>
			<NavBar />
			<div className='footerSocial'>
				<SocialIcons />
			</div>
		</footer>
	);
};
