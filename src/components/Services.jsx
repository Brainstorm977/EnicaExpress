import React from "react";
import styled from "styled-components";

const Services = () => {
	return (
		<ServicesStyled id="services">
			<ServicesItem>
				<h3>Международные автоперевозки</h3>
				<ServiceDescr>
					<p>
						Средняя Азия и Прибалтика, импорт и экспорт.
						Сюрвейерские услуги в крупных городах на погрузке и
						выгрузке.
						<br />
						Подготовка документов по каждой стране.
						<br />
						Свой «банк» перевозчиков, не работаем с биржами.
					</p>
				</ServiceDescr>
			</ServicesItem>
			<ServicesItem>
				<h3>Доставка сборных грузов</h3>
				<ServiceDescr>
					<p>
						Забор, подготовка сопроводительных документов и доставка
						«дверь — дверь». Перевозим сборные грузы до 10 тонн, в
						том числе температурные. В Узбекистан и из него возим
						опасные грузы.
					</p>
				</ServiceDescr>
			</ServicesItem>
			<ServicesItem>
				<h3>Локальная доставка грузов</h3>
				<ServiceDescr>
					<p>
						Собственный автопарк из авто с грузоподъемностью до 3,5
						и до 10 тонн. Онлайн-слежение за грузом в
						«БелТрансСпутник». Москва, Московская область и
						Центральный ФО.
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
	font-family: "Ubuntu Condensed", sans-serif;
	max-width: 380px;
	height: 420px;
	color: #03588c;
	padding: 50px 20px 10px 20px;
	margin: 20px 0px;
	transition: all 0.2s ease;
	border: 1px solid #eaf3fd;
	h3 {
		font-family: "Ubuntu", sans-serif;
		font-weight: 500;
		font-size: 24px;
		line-height: 36px;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 50px;
	}
	&:hover {
		background-color: #ceeeff;
	}

	@media screen and (max-width: 500px) {
		padding: 2rem;
		height: auto;
	}
`;

const ServiceDescr = styled.div`
	font-weight: normal;
	font-size: 18px;
	line-height: 30px;
	text-align: center;
`;

export default Services;
