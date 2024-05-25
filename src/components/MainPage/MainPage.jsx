import React from "react";
import "./MainPage.scss";

export const MainPage = () => {
	return (
		<>
			<Header />
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
