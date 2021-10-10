import React from "react";
import styled from "styled-components";

const Hero1 = () => {
	return (
		<HeroStyled id="about">
			<HeroDescr>
				<h1>Enica Express RUS</h1>
				<h3>
					Транспортная компания, оказывающая логистические услуги
					между Россией, Центральной Азией – Казахстаном,
					Узбекистаном, Киргизией, Таджикистаном, а также Прибалтикой
					и Беларусью.
					<br />
					<br />
					Мы предлагаем:
					<br />
					– FTL (генеральные) и LTL (сборные) перевозки, доставку
					температурных, опасных и сыпучих грузов
					<br />
					– Доставку по территории России, Москве и Московской области
					<br />
					– Сюрвейерские услуги
					<br />
					– Страхование грузов
					<br />– Честные и прозрачные цены за наши услуги
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
	background: url("./img/hero_img1.jpg") center center/cover no-repeat;
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
		font-size: 36px;
		color: white;
		text-transform: uppercase;
		line-height: 60px;
		margin-bottom: 50px;
	}
	h3 {
		font-weight: 300;
		font-size: 20px;
		line-height: 26px;
		color: white;
		margin-bottom: 50px;
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
			/* text-align: center; */
		}
		button {
			display: block;
			margin: 0 auto;
		}
	}
	@media screen and (max-width: 600px) {
		max-width: 400px;
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
			/* text-align: center; */
		}
	}

	@media screen and (max-width: 400px) {
		width: 90%;
		padding: 0px 30px;
		h1 {
			font-size: 26px;
			line-height: 40px;
			text-align: center;
			margin-bottom: 40px;
		}
		h3 {
			font-weight: 300;
			font-size: 16px;
			line-height: 20px;
		}
	}
`;

export default Hero1;
