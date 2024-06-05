import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React from "react";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./MainPage.scss";
import "./Navbar.scss";
import "./Logo.scss";
import "./Mobile.scss";

const Header = () => {
	const [menuActive, setMenuActive] = React.useState(false);

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
			<button
				onClick={() => setMenuActive(!menuActive)}
				className='mobile-hamburger'>
				{menuActive ? (
					<FontAwesomeIcon
						icon={faXmark}
						size='2xl'
						style={{ color: "#2a38b481" }}
					/>
				) : (
					<FontAwesomeIcon
						icon={faBars}
						size='2xl'
						style={{ color: "#2a38b481" }}
					/>
				)}
			</button>
			<MobileNav
				menuActive={menuActive}
				setMenuActive={setMenuActive}
			/>
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
		// faTiktok,
	];

	return (
		<div className='socialContainer'>
			{icons.map((icon, index) => (
				<FontAwesomeIcon
					key={index}
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
			children: [
				{
					name: "Schedule",
					to: "/info/schedule",
				},
				{
					name: "FAQ",
					to: "/info/faq",
				},
				{
					name: "Stats",
					to: "/info/stats",
				},
				{
					name: "Rules",
					to: "/info/rules",
				},
			],
		},
		// {
		// 	name: "Shop",
		// 	to: "https://gamersapparel.co.uk/store/trinity-competitive-racing",
		// },
	];

	return (
		<nav className='navBar'>
			{navItems.map((item, index) => {
				if (item.children) {
					return (
						<Link
							to={item.to}
							key={index}
							id={item.name}
							className={classnames("nav-item-hover", {
								active: location.pathname === item.to,
							})}>
							{item.name}
							<div className='subNav'>
								{item.children.map((child, index) => (
									<Link
										to={child.to}
										key={index}
										id={child.name}
										className={classnames("sub-nav-item", {
											active:
												location.pathname === child.to,
										})}>
										{child.name}
									</Link>
								))}
							</div>
						</Link>
					);
				}
				return (
					<Link
						to={item.to}
						key={index}
						id={item.name}
						className={classnames("nav-item-hover", {
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
			<div className='desktop-nav'>
				<NavBar />
			</div>
			<div className='footer-socials'>
				<SocialMedia />
			</div>
		</footer>
	);
};

const MobileNav = ({ menuActive, setMenuActive }) => {
	const location = useLocation();

	const [subMenu, setSubMenu] = React.useState(false);

	const toggleSubMenu = () => {
		if (menuActive === true) {
			setSubMenu(!subMenu);
		}
	};

	const closeMenu = () => {
		setMenuActive(!menuActive);
	};

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
			children: [
				{
					name: "Schedule",
					to: "/info/schedule",
				},
				{
					name: "FAQ",
					to: "/info/faq",
				},
				{
					name: "Stats",
					to: "/info/stats",
				},
				{
					name: "Rules",
					to: "/info/rules",
				},
			],
		},
		// {
		// 	name: "Shop",
		// 	to: "https://gamersapparel.co.uk/store/trinity-competitive-racing",
		// },
	];

	return (
		<nav
			className={classnames(
				menuActive ? "mobile-nav-bar" : "mobileNavHidden"
			)}>
			{navItems.map((item, index) => {
				if (item.children) {
					return (
						<Link
							onClick={toggleSubMenu}
							to={item.to}
							key={index}
							id={item.name}
							className={classnames("mobile-nav-item-hover", {
								mobileActive: location.pathname === item.to,
							})}>
							{item.name}
							<div
								className={classnames(
									subMenu ? "mobile-sub-nav" : "subNavHidden"
								)}>
								{item.children.map((child, index) => (
									<Link
										onClick={closeMenu}
										to={child.to}
										key={index}
										id={child.name}
										className={classnames(
											"mobile-sub-nav-item",
											{
												mobileActive:
													location.pathname ===
													child.to,
											}
										)}>
										{child.name}
									</Link>
								))}
							</div>
						</Link>
					);
				}
				return (
					<Link
						onClick={closeMenu}
						to={item.to}
						key={index}
						id={item.name}
						className={classnames("mobile-nav-item-hover", {
							mobileactive: location.pathname === item.to,
						})}>
						{item.name}
					</Link>
				);
			})}
		</nav>
	);
};

const Layout = () => {
	return (
		<main className='mainContainer'>
			<Header />
			<section className='content-container'>
				<Outlet />
			</section>
			<Footer />
		</main>
	);
};

export default Layout;
