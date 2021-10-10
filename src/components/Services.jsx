import React from "react";
import styled from "styled-components";

const Services = () => {
	return (
		<ServicesStyled id="services">
			<ServicesItem>
				<h3>Международные автоперевозки</h3>
				<ServiceDescr>
					<p>
						Осуществляем импортные и экспортные доставки грузов
						между Россией, странами Средней Азии, Прибалтикой,
						Беларусью. В ряде крупных городов Средней Азии налажена
						собственная сюрвейерская служба по приему и проверке
						грузов. Работаем посредством собственного транспортного,
						так и проверенного привлеченного.
					</p>
				</ServiceDescr>
			</ServicesItem>
			<ServicesItem>
				<h3>ДОСТАВКА СБОРНЫХ ГРУЗОВ В ЦЕНТРАЛЬНУЮ АЗИЮ</h3>
				<ServiceDescr>
					<p>
						Перевозки осуществляются на условиях door-to-door.
						Возможна доставка опасных и температурных грузов.
						Быстрый забор продукции из любого города. Перевозка
						осуществляется «с колес», без промежуточных складов, что
						позволяет сэкономить транзитное время.
					</p>
				</ServiceDescr>
			</ServicesItem>
			<ServicesItem>
				<h3>
					ДОСТАВКА ПО РОССИИ <br />
					<br />
				</h3>
				<ServiceDescr>
					<p>
						Перевозки осуществляются собственным транспортном от 1.5
						до 20 тн, от 18 до 100 кубов. Слежение за транспортом
						происходит благодаря сервису «БелТрансСпутник». Доставка
						происходит по Москве, Московской области и другим
						городам Центрального Федерального Округа. В парке
						компании есть газодизельный и метановый транспорт.
					</p>
				</ServiceDescr>
			</ServicesItem>
			<ServicesItem>
				<h3>
					ДОСТАВКА НАСЫПНЫХ И НАВАЛОЧНЫХ ГРУЗОВ <br />
				</h3>
				<ServiceDescr>
					<p>
						Осуществляем логистику насыпных и навалочных грузов
						посредством собственного нового транспорта. Кубатура
						самосвалов – от 19 до 26 куб. метров. Автопарк
						составляет свыше 30 машин.
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
	flex-wrap: wrap;

	@media screen and (max-width: 1100px) {
		flex-direction: column;
	}
	@media screen and (max-width: 500px) {
		padding: 40px 10px;
	}
`;

const ServicesItem = styled.div`
	font-family: "Ubuntu Condensed", sans-serif;
	width: 350px;
	height: 450px;
	color: #03588c;
	padding: 50px 30px 20px 30px;
	margin: 20px 0px;
	transition: all 0.2s ease;
	border: 1px solid #eaf3fd;
	h3 {
		font-family: "Ubuntu", sans-serif;
		font-weight: 500;
		font-size: 18px;
		line-height: 26px;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 30px;
	}
	&:hover {
		background-color: #ceeeff;
	}

	@media screen and (max-width: 500px) {
		padding: 40px 10px 20px 10px;
		width: 90%;
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
