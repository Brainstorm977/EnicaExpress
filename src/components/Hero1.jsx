import React from "react";
import styled from "styled-components";

const Hero1 = () => {
	return (
		<HeroStyled id="about">
			<HeroDescr>
				<h1>Enica Express RUS</h1>
				<h3>
					Международные автомобильные перевозки между Россией,
					Прибалтикой и Средней Азией — Казахстаном, Узбекистаном,
					Киргизией и Таджикикстаном.
					<br />
					<br />
					Внутренние перевозки по Центральному федеральному округу.
					<br />
					<br />
					Сборные и генеральные грузы, рефрижераторы (авто с
					температурным режимом) и тентованные авто.
				</h3>
				<button>
					<a href="#contacts"> Связаться с нами</a>
				</button>
			</HeroDescr>
		</HeroStyled>
	);
};

const HeroStyled = styled.div`
	width: 100%;
	height: 750px;
	padding: 0px 50px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	background: url("./img/hero_img.jpg") center center/cover no-repeat;
	font-family: "Ubuntu", sans-serif;
`;

const HeroDescr = styled.div`
	width: 730px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-70%, -50%);
	h1 {
		font-weight: 500;
		font-size: 40px;
		color: white;
		text-transform: uppercase;
		line-height: 60px;
		margin-bottom: 50px;
	}
	h3 {
		font-weight: 300;
		font-size: 22px;
		line-height: 28px;
		color: white;
		margin-bottom: 100px;
	}
	button {
		padding: 10px 20px;
		font-family: "Ubuntu", sans-serif;
		font-size: 18px;
		cursor: pointer;
		transition: all 0.2s ease;
		border: none;
		&:hover {
			background-color: #ceeeff;
		}
	}
	a {
		text-decoration: none;
		color: #0c4061;
	}

	@media screen and (max-width: 1000px) {
		width: 600px;
		left: 50%;
		transform: translate(-50%, -50%);
		h1 {
			font-size: 38px;
			line-height: 45px;
			text-align: center;
		}
		h3 {
			font-weight: 300;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
		}
		button {
			display: block;
			margin: 0 auto;
		}
	}
	@media screen and (max-width: 600px) {
		width: 400px;
		padding: 0px 30px;
		h1 {
			font-size: 26px;
			line-height: 40px;
			text-align: center;
			margin-bottom: 40px;
		}
		h3 {
			font-weight: 300;
			font-size: 18px;
			line-height: 22px;
			text-align: center;
		}
	}
`;

export default Hero1;
