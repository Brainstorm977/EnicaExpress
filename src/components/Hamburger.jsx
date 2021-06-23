import React from "react";
import styled from "styled-components";
import hamburger from "../img/hamburger.png";
import close from "../img/close.png";

const Hamburger = ({ isActive, toggleMenu }) => {
	return (
		<HamburgerStyled onClick={toggleMenu}>
			<img src={isActive ? close : hamburger} alt="" />
		</HamburgerStyled>
	);
};

const HamburgerStyled = styled.div`
	position: fixed;
	width: 25px;
	height: 25px;
	top: 20px;
	right: 20px;
	z-index: 30;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		/* transition: all 0.3s ease; */
	}
	@media screen and (min-width: 901px) {
		display: none;
	}
	@media screen and (max-width: 900px) {
		display: block;
	}
`;

export default Hamburger;
