import React from "react";
import styled from "styled-components";

const MobileNav = ({ isActive, toggleMenu }) => {
	return (
		<MobileNavStyled isActive={isActive}>
			<ul>
				<li onClick={toggleMenu}>
					<a href="#services">Услуги</a>
				</li>
				<li onClick={toggleMenu}>
					<a href="#cases">Перевозки</a>
				</li>
				<li onClick={toggleMenu}>
					<a href="#survey">Сюрвей</a>
				</li>
				<li onClick={toggleMenu}>
					<a href="#solutions">Решения</a>
				</li>
				<li onClick={toggleMenu}>
					<a href="#contacts">Контакты</a>
				</li>
			</ul>
		</MobileNavStyled>
	);
};

const MobileNavStyled = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: #162d44;
	z-index: 20;
	transform: ${({ isActive }) =>
		isActive ? "translateX(0%)" : "translateX(100%)"};
	transition: transform 0.5s ease;
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		list-style: none;
		margin-top: 80px;
		li {
			margin: 1rem;
			font-size: 28px;
			a {
				color: white;
				text-decoration: none;
				text-transform: uppercase;
			}
		}
	}
	@media screen and (min-width: 901px) {
		display: none;
	}
	@media screen and (max-width: 900px) {
		display: block;
	}
`;

export default MobileNav;
