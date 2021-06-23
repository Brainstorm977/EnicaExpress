import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Solution from "./Solution";

const Solutions = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 800, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
		{ width: 1500, itemsToShow: 4 },
	];

	return (
		<SolutionsStyled id="solutions">
			<h2>Отраслевые решения</h2>
			<Carousel breakPoints={breakPoints}>
				<Solution
					caseHeader="Текстиль"
					caseDescr="Грузоперевозка текстиля и тканей может осуществляться различными способами, но наиболее удобным является крытый автотранспорт. Мы предлагаем фургоны различной вместимости, специально оборудованные для перевозки тканей, одежды, рулонов."
					bgColor="#4881AC"
				/>
				<Solution
					caseHeader="Оборудование"
					caseDescr="Закажите транспортировку оборудования под ключ – подберем спецтехнику, продумаем маршрут, подготовим все нужные документы и оформим разрешения, при необходимости представим кран для погрузки и разгрузки."
					bgColor="#225290"
				/>
				<Solution
					caseHeader="Электроника"
					caseDescr="Из-за специфичности груза были разработаны особые правила перевозки товаров подобного рода. Для каждого вида груза есть свои специальные правила, которые не должны нарушаться компаниями, занимающимися транспортировкой."
					bgColor="#07366A"
				/>
				<Solution
					caseHeader="Косметика"
					caseDescr="Организация перевозок на транспорте косметической продукции требует знания тонкостей процесса и особенностей товара. Только при таком подходе она сохранит свои потребительские качества и товарный вид."
					bgColor="#225290"
				/>
				<Solution
					caseHeader="Запчасти"
					caseDescr="Наша компания имеет многолетний опыт импорта-экспорта оборудования и запасных частей к различным устройствам. Наши логисты предлагают полный спектр услуг, под ключ, начиная от закупки продукции и до полного сопровождения груза до конечной точки доставки."
					bgColor="#4881AC"
				/>
				<Solution
					caseHeader="Медицина"
					caseDescr="Доставка медикаментов — транспортировка грузов, которая требует соблюдения жестких правил. Фармацевтическую продукцию можно перемещать определенными типами транспорта."
					bgColor="#225290"
				/>
				<Solution
					caseHeader="Товары для дома"
					caseDescr="Перевозка мебели – это самый сложный этап переезда. Чаще всего необходимо разобрать, упаковать и перевезти крупногабаритную мебель. Шкафы, кровати, кресла и диваны создают особый уют в доме, а значит, их необходимо перевозить с особой бережностью."
					bgColor="#07366A"
				/>
				<Solution
					caseHeader="Химическая продукция"
					caseDescr="Транспортное перемещение продуктов химической промышленности относится к наиболее опасным и трудным грузоперевозкам."
					bgColor="#225290"
				/>
			</Carousel>
		</SolutionsStyled>
	);
};

const SolutionsStyled = styled.div`
	padding: 70px 20px;
	h2 {
		text-align: center;
		font-weight: 400;
		font-size: 42px;
		color: #f36060;
		text-transform: uppercase;
		margin-bottom: 100px;
	}
	.rec-arrow:hover:enabled,
	.rec-arrow:active:enabled,
	.rec-arrow:focus:enabled {
		color: white;
		background-color: #5f778f;
	}
	.rec-dot_active:hover,
	.rec-dot_active,
	.rec-dot_active:active,
	.rec-dot_active:focus:enabled,
	.rec-dot_active:hover:enabled {
		box-shadow: 0 0 1px 3px #5f778f;
		background-color: #5f778f;
	}
	@media (max-width: 500px) {
		padding: 50px 0px;
		.rec-arrow {
			display: none;
		}
	}
`;

export default Solutions;
