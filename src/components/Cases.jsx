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
					<p>
						Изотермические и тентованные/шторные авто с
						разносторонней загрузкой. Служба безопасности проверяет
						поставщиков и инструктирует водителей. Ворота
						закрепляются силовой пломбой, тенты предлагаются под
						габаритный груз с плотной загрузкой.
					</p>
					<img src="./img/12.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА КОНДИТЕРСКИХ ИЗДЕЛИЙ</h3>
					<div className="line"></div>
					<p>
						Привлечённые и собственные рефрижераторы под строгим
						температурным режимом. Отчёт с термописца для
						грузополучателя, пересчёт грузовых мест при погрузке,
						санитарная обработка транспорта.
					</p>
					<img src="./img/2.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ПЛОДОВОЩНОЙ ПРОДУКЦИИ</h3>
					<div className="line"></div>
					<p>
						Строгий температурный режим и дополнительные
						термодатчики. При погрузке проверяем продукцию на
						качество.
					</p>
					<img src="./img/3.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ПРЯЖИ</h3>
					<div className="line"></div>
					<p>
						Авто с жёсткими бортами и увеличенной высотой.
						Затаривание груза в мешки, тентование плотным полотном.
					</p>
					<img src="./img/4.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ПРОДУКТОВ ПИТАНИЯ</h3>
					<div className="line"></div>
					<p>
						Привлечённые и собственные рефрижераторы под строгим
						температурным режимом. Отчёт с термописца для
						грузополучателя, пересчёт грузовых мест при погрузке,
						санитарная обработка транспорта.
					</p>
					<img src="./img/5.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ХИМИЧЕСКОГО СЫРЬЯ</h3>
					<div className="line"></div>
					<p>
						Цельнометаллический кузов обшиваем фанерой, затаренное
						сырьё закрепляем ремнями. Мешки с полимерами типа
						полипропилена укладываем в штабеля и распределяем по
						кузову.
					</p>
					<img src="./img/6.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ОДЕЖДЫ</h3>
					<div className="line"></div>
					<p>
						Авто повышенной кубатуры: 100 — 120 м3, MEGA и сцепка.
						Плотное стрейчевание. Проверяем количество и качество
						груза при погрузке.{" "}
					</p>
					<img src="./img/7.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ЙОГУРТОВ</h3>
					<div className="line"></div>
					<p>
						Привлечённые и собственные рефрижераторы под строгим
						температурным режимом. Отчёт с термописца для
						грузополучателя, пересчёт грузовых мест при погрузке,
						санитарная обработка транспорта.
					</p>
					<img src="./img/8.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА ГЕОМЕМБРАНЫ</h3>
					<div className="line"></div>
					<p>
						Цельнометаллический кузов или платформа с бортами. На
						платформе используем коники и крепежные ремни, в кузове
						плотно штабелируем.{" "}
					</p>
					<img src="./img/9.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ</h3>
					<div className="line"></div>
					<p>
						Полная растентовка. Закрепление груза штангами,
						планками, ремнями и кониками. Доставка в сложные места:
						степи, гористые местности.
					</p>
					<img src="./img/10.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА СБОРНЫХ ГРУЗОВ</h3>
					<div className="line"></div>
					<p>
						Забор, подготовка сопроводительных документов и доставка
						«дверь — дверь». Перевозим сборные грузы до 10 тонн, в
						том числе температурные.
					</p>
					<img src="./img/11.jpg" alt="case 1" />
				</Case>
				<Case>
					<h3>ДОСТАВКА СТРОИТЕЛЬНОЙ ТЕХНИКИ</h3>
					<div className="line"></div>
					<p>
						Полная растентовка. Закрепление груза штангами,
						планками, ремнями и кониками. Доставка в сложные места:
						степи, гористые местности.
					</p>
					<img src="./img/1.jpg" alt="case 1" />
				</Case>
			</CaseContainer>
		</CasesStyled>
	);
};

const CasesStyled = styled.div`
	width: 100%;
	padding: 100px 40px 30px 40px;
	h2 {
		text-align: center;
		font-weight: 500;
		font-size: 32px;
		color: #03588c;
		text-transform: uppercase;
	}
	@media screen and (max-width: 800px) {
		padding: 70px 10px 20px 10px;
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
	margin: 10px;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	img {
		width: 100%;
		height: 100%;
		transition: all 0.4s ease;
		opacity: 1;
		object-fit: cover;
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
		color: #03588c;
		transition: all 0.3s ease;
	}
	p {
		font-family: "Ubuntu Condensed", sans-serif;
		width: 90%;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 20px;
		font-weight: 300;
		text-align: center;
		color: #03588c;
		transition: all 0.3s ease;
	}
	.line {
		position: absolute;
		width: 50%;
		height: 3px;
		background-color: #f36060;
		top: 30%;
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
			font-size: 22px;
		}
		p {
			font-size: 20px;
		}
	}
`;

export default Cases;
