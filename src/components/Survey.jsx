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
					<p>
						Выгрузка бытовой техники тщательно контролируется нашими
						представителями на складе в Алмате. Проверяется пакет
						документов, упаковка, количество мест.
					</p>
					<img src="./img/21.jpg" alt="case 1" />
				</SurveyItem>
				<SurveyItem>
					<h3>СЮРВЕЙ ГОТОВОЙ ОДЕЖДЫ</h3>
					<div className="line"></div>
					<p>
						При погрузке в Ташкенте, наши сотрудники проверяют
						упаковочные документы, пересчитывают количество мест.
						Также выборочно открывают коробки для проверки
						количества.
					</p>
					<img src="./img/22.jpg" alt="case 1" />
				</SurveyItem>
				<SurveyItem>
					<h3>СЮРВЕЙ ПЛОДООВОЩНОЙ ПРОДУКЦИИ</h3>
					<div className="line"></div>
					<p>
						При погрузке наши сотрудники проверяют качество овощей и
						фруктов. Также проверяются условия хранения, помещение и
						тип упаковки.
					</p>
					<img src="./img/23.jpg" alt="case 1" />
				</SurveyItem>
			</SurveyContainer>
		</SurveyStyled>
	);
};

const SurveyStyled = styled.div`
	width: 100%;
	padding: 100px 40px 30px 40px;
	h2 {
		text-align: center;
		font-size: 32px;
		font-weight: 500;
		color: #03588c;
		text-transform: uppercase;
	}
	@media screen and (max-width: 800px) {
		padding: 70px 10px 20px 10px;
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
	margin: 10px;
	border-radius: 10px;
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
		font-size: 24px;
		font-weight: 500;
		text-transform: uppercase;
		text-align: center;
		color: #2d4a6b;
		transition: all 0.3s ease;
	}
	p {
		font-family: "Ubuntu Condensed", sans-serif;
		width: 80%;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 20px;
		font-weight: 300;
		text-align: center;
		color: #2d4a6b;
		transition: all 0.3s ease;
	}
	.line {
		position: absolute;
		width: 50%;
		height: 3px;
		background-color: #f36060;
		top: 140px;
		left: -100%;
		transition: all 0.3s ease;
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
		p {
			top: 200px;
			left: 50%;
			transform: translateX(-50%);
		}
		.line {
			top: 150px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	@media screen and (max-width: 500px) {
		h3 {
			font-size: 24px;
		}
		p {
			font-size: 20px;
		}
	}
`;

export default Survey;
