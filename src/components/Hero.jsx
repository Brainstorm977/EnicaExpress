import React from "react";
import styled from "styled-components";

const Hero = () => {
	return (
		<HeroStyled id="about">
			<HeroDescr>
				<h1>
					Международные автоперевозки различными видами и типами
					транспорта <br />
					<span>из России в страны СНГ</span> <br /> и обратно
				</h1>
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
	background: url("../img/hero_img.jpg") center center/cover no-repeat;
`;

const HeroDescr = styled.div`
	width: 730px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 12rem;
	padding: 3rem;
	h1 {
		font-weight: 300;
		font-size: 48px;
		color: #deeaf5;
		text-transform: uppercase;
		line-height: 70px;
		span {
			font-size: 56px;
			font-weight: 500;
			color: #f36060;
		}
	}
	@media screen and (max-width: 900px) {
		width: 600px;
		left: 50%;
		transform: translate(-50%, -50%);
		h1 {
			font-size: 38px;
			line-height: 45px;
			text-align: center;
		}
	}
	@media screen and (max-width: 500px) {
		width: 400px;
		h1 {
			font-size: 36px;
			line-height: 50px;
			text-align: center;
			span {
				font-size: 45px;
				font-weight: 500;
				color: #f36060;
			}
		}
	}
`;

export default Hero;
