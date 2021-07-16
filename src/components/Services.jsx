import React from "react";
import styled from "styled-components";

const Services = () => {
	return (
		<ServicesStyled id="services">
			<ServicesItem>
				<h3>Международные автоперевозки</h3>
				<ServiceDescr>
					<p>Россия - Казахстан - Россия</p>
					<p>Россия - Узбекистан - Россия</p>
					<p>Россия - Таджикистан - Россия</p>
					<p>Россия - Киргизия - Россия</p>
				</ServiceDescr>
			</ServicesItem>
			<ServicesItem>
				<h3>Доставка сборных грузов</h3>
				<ServiceDescr>
					<p>Россия - Узбекистан - Россия</p>
				</ServiceDescr>
			</ServicesItem>
			<ServicesItem>
				<h3>Локальная доставка грузов</h3>
				<ServiceDescr>
					<p>
						по Москве и Московской области собственным
						мелкотоннажным транспортом
					</p>
				</ServiceDescr>
			</ServicesItem>
		</ServicesStyled>
	);
};

const ServicesStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px;
	@media screen and (max-width: 1100px) {
		flex-direction: column;
	}
`;

const ServicesItem = styled.div`
	max-width: 380px;
	height: 420px;
	color: #03588c;
	padding: 5rem 0rem;
	margin: 20px 0px;
	transition: all 0.2s ease;
	border: 1px solid #eaf3fd;
	h3 {
		font-weight: 400;
		font-size: 36px;
		text-transform: uppercase;
		line-height: 50px;
		text-align: center;
		margin-bottom: 50px;
	}
	&:hover {
		background-color: #ceeeff;
	}

	@media screen and (max-width: 500px) {
		padding: 2rem;
	}
`;

const ServiceDescr = styled.div`
	font-weight: normal;
	font-size: 18px;
	line-height: 30px;
	text-align: center;
`;

export default Services;
