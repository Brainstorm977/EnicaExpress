import React from "react";
import styled from "styled-components";

const Survey = () => {
	return (
		<SurveyStyled id="survey">
			<h2>Сюрвей</h2>
			<SurveyContainer>
				<SurveyItem>
					<h3>СЮРВЕЙ БЫТОВОЙ ТЕХНИКИ</h3>
					<div className="line"></div>
					<h4>
						Выгрузка бытовой техники тщательно контролируется нашими
						представителями на складе в Алмате. Проверяется пакет
						документов, упаковка, количество мест.
					</h4>
					<img src="./img/21.jpg" alt="case 1" />
				</SurveyItem>
				<SurveyItem>
					<h3>СЮРВЕЙ ГОТОВОЙ ОДЕЖДЫ</h3>
					<div className="line"></div>
					<h4>
						При погрузке в Ташкенте, наши сотрудники проверяют
						упаковочные документы, пересчитывают количество мест.
						Также выборочно открывают коробки для проверки
						количества.
					</h4>
					<img src="./img/22.jpg" alt="case 1" />
				</SurveyItem>
				<SurveyItem>
					<h3>СЮРВЕЙ ПЛОДООВОЩНОЙ ПРОДУКЦИИ</h3>
					<div className="line"></div>
					<h4>
						При погрузке наши сотрудники проверяют качество овощей и
						фруктов. Также проверяются условия хранения, помещение и
						тип упаковки.
					</h4>
					<img src="./img/23.jpg" alt="case 1" />
				</SurveyItem>
			</SurveyContainer>
		</SurveyStyled>
	);
};

const SurveyStyled = styled.div`
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

const SurveyContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 100px;
`;

const SurveyItem = styled.div`
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
		font-size: 22px;
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
			top: 50px;
			left: 50%;
			transform: translateX(-50%);
		}
		h4 {
			top: 190px;
			left: 50%;
			transform: translateX(-50%);
		}
		.line {
			top: 40%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

export default Survey;
