import React from "react";
import logo from "../img/enica_logo 1.png";
import styled from "styled-components";

const Header = () => {
	return (
		<HeaderStyled>
			<div className="logo">
				<a href="#about">
					<img src={logo} alt="logo" />
				</a>
			</div>
			<NavStyled>
				<ul>
					<li>
						<a href="#about">О нас</a>
					</li>
					<li>
						<a href="#services">Услуги</a>
					</li>
					<li>
						<a href="#cases">Перевозки</a>
					</li>
					<li>
						<a href="#survey">Сюрвей</a>
					</li>
					<li>
						<a href="#contacts">Контакты</a>
					</li>
				</ul>
			</NavStyled>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	width: 100%;
	padding: 0px 100px;
	height: 70px;
	background-color: #0c4061;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	z-index: 10;
	.logo {
		width: 100px;
		img {
			width: 100%;
		}
	}
	@media (max-width: 1200px) {
		padding: 0px 2rem;
	}
`;

const NavStyled = styled.nav`
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
		li {
			font-weight: 500;
			font-size: 16px;
			margin-left: 50px;
			a {
				color: white;
				text-decoration: none;
				/* text-transform: uppercase; */
				transition: color 0.2s ease;
				&:hover {
					color: #31b5fc;
				}
			}
		}
	}
	@media screen and (max-width: 1200px) {
		ul {
			li {
				margin-left: 20px;
			}
		}
	}
	@media screen and (max-width: 900px) {
		display: none;
	}
`;

export default Header;
