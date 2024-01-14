import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	faBars,
	faMobileAlt,
	faTabletAlt,
	faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useWindowSize from '../hooks/useWindowSize';

const Header = ({ headerTitle }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const { width } = useWindowSize();

	return (
		<header>
			<div className="container">
				<Link className="logo" to="/">
					<h1>{headerTitle}</h1>
					{width < 768 ? (
						<FontAwesomeIcon icon={faMobileAlt} />
					) : width < 992 ? (
						<FontAwesomeIcon icon={faTabletAlt} />
					) : (
						<FontAwesomeIcon icon={faLaptop} />
					)}
				</Link>
				<div className="dropDownMenuIcon">
					<FontAwesomeIcon
						icon={faBars}
						fontSize="20px"
						onClick={() => setOpenMenu(!openMenu)}
					/>
				</div>
			</div>

			<div className="dropDownMenu" style={{ left: openMenu ? '0%' : '-100%' }}>
				<h2>React.js Blog</h2>
				<ul className="menu">
					<li>
						<Link to="/" onClick={() => setOpenMenu(!openMenu)}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/post" onClick={() => setOpenMenu(!openMenu)}>
							Post
						</Link>
					</li>
					<li>
						<Link to="/about" onClick={() => setOpenMenu(!openMenu)}>
							About
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
