import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

import "./MainPage.scss";

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
	const icons = [
		faFacebookF,
		faTwitter,
		faInstagram,
		faDiscord,
		faYoutube,
		faTwitch,
		faTiktok,
	];

	return (
		<div className='socialContainer'>
			{icons.map((icon) => (
				<FontAwesomeIcon
					icon={icon}
					size='xl'
					style={{ color: "#e9e9e9" }}
				/>
			))}
		</div>
	);
};

const NavBar = () => {
	const location = useLocation();
	console.log(location);

	const navItems = [
		{
			name: "Home",
			to: "/",
		},
		{
			name: "About",
			to: "/about",
		},
		{
			name: "Info",
			to: "/info",
		},
	];

	return (
		<nav className='navBar'>
			{navItems.map((item, index) => {
				return (
					<Link
						to={item.to}
						key={index}
						id={item.name}
						className={classnames("navItem", {
							active: location.pathname === item.to,
						})}>
						{item.name}
					</Link>
				);
			})}
		</nav>
	);
};

const Footer = () => {
	return (
		<footer className='footer'>
			<NavBar />
		</footer>
	);
};

const Layout = () => {
	return (
		<div className='mainContainer'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
