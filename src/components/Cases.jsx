import React from "react";
import styled from "styled-components";

const Cases = () => {
	return (
		<CasesStyled id="cases">
			<h2>Наши перевозки</h2>
			<CaseContainer>
				<Case>
					<h3>ДОСТАВКА БЫТОВОЙ ТЕХНИКИ</h3>
					<div className="line"></div>
					<h4>Калуга – Москва</h4>
					<img src="./img/12.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА КОНДИТЕРСКИХ ИЗДЕЛИЙ</h3>
					<div className="line"></div>
					<h4>Алматы – Москва</h4>
					<img src="./img/2.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ПЛОДОВОЩНОЙ ПРОДУКЦИИ</h3>
					<div className="line"></div>
					<h4>Фергана– Москва</h4>
					<img src="./img/3.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ПРЯЖИ</h3>
					<div className="line"></div>
					<h4>Шават – Смоленск</h4>
					<img src="./img/4.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ПРОДУКТОВ ПИТАНИЯ</h3>
					<div className="line"></div>
					<h4>Новосибирск – Душанбе</h4>
					<img src="./img/5.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ХИМИЧЕСКОГО СЫРЬЯ</h3>
					<div className="line"></div>
					<h4>Нукус – Москва</h4>
					<img src="./img/6.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ОДЕЖДЫ</h3>
					<div className="line"></div>
					<h4>Андижан – Москва</h4>
					<img src="./img/7.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ЙОГУРТОВ</h3>
					<div className="line"></div>
					<h4>Москва – Душанбе</h4>
					<img src="./img/8.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ГЕОМЕМБРАНЫ</h3>
					<div className="line"></div>
					<h4>Нижний Новгород – Балыкчи</h4>
					<img src="./img/9.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ</h3>
					<div className="line"></div>
					<h4>Москва – Ташкент</h4>
					<img src="./img/10.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА СБОРНЫХ ГРУЗОВ</h3>
					<div className="line"></div>
					<h4>Москва – Карши</h4>
					<img src="./img/11.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА СТРОИТЕЛЬНОЙ ТЕХНИКИ</h3>
					<div className="line"></div>
					<h4>Тверь – Ташкент</h4>
					<img src="./img/1.jpg" alt="case 1" />
				</Case>
			</CaseContainer>
		</CasesStyled>
	);
};

const CasesStyled = styled.div`
	width: 100%;
	padding: 5rem 2rem;
	h2 {
		text-align: center;
		font-weight: 400;
		font-size: 42px;
		color: #f36060;
		text-transform: uppercase;
	}
	@media (max-width: 1100px) {
		padding: 2rem;
	}
	@media (max-width: 700px) {
		padding: 1rem;
	}
`;

const CaseContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 100px;

	@media (max-width: 550px) {
	}
`;

const Case = styled.div`
	width: 400px;
	height: 400px;
	overflow: hidden;
	transition: all 0.5s ease;
	position: relative;
	img {
		width: 100%;
		height: 100%;
		transition: all 0.3s ease;
		opacity: 1;
	}
	h3 {
		width: 90%;
		position: absolute;
		top: -100%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 32px;
		font-weight: 400;
		text-transform: uppercase;
		text-align: center;
		color: #2d4a6b;
		transition: all 0.5s ease;
	}
	h4 {
		width: 80%;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 32px;
		font-weight: 300;
		text-align: center;
		color: #2d4a6b;
		transition: all 0.5s ease;
	}
	.line {
		position: absolute;
		width: 50%;
		height: 3px;
		background-color: #f36060;
		top: 50%;
		left: -100%;
		transition: all 0.5s ease;
	}
	&:hover {
		img {
			opacity: 0.1;
		}
		h3 {
			top: 90px;
			left: 50%;
			transform: translateX(-50%);
		}
		h4 {
			top: 260px;
			left: 50%;
			transform: translateX(-50%);
		}
		.line {
			top: 50%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

export default Cases;
