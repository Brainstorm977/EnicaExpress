import React, { useState } from "react";
import styled from "styled-components";
import ContactMap from "./ContactMap";

const Contacts = () => {
	const [rusVisible, setRusVisible] = useState(true);
	const [krgVisible, setKrgVisible] = useState(false);
	const [uzbVisible, setUzbVisible] = useState(false);
	const [tdjVisible, setTdjVisible] = useState(false);

	const rusClickHandler = () => {
		setRusVisible(!rusVisible);
		setKrgVisible(false);
		setUzbVisible(false);
		setTdjVisible(false);
	};
	const krgClickHandler = () => {
		setKrgVisible(!krgVisible);
		setRusVisible(false);
		setUzbVisible(false);
		setTdjVisible(false);
	};
	const uzbClickHandler = () => {
		setUzbVisible(!uzbVisible);
		setKrgVisible(false);
		setRusVisible(false);
		setTdjVisible(false);
	};
	const tdjClickHandler = () => {
		setTdjVisible(!tdjVisible);
		setKrgVisible(false);
		setUzbVisible(false);
		setRusVisible(false);
	};

	return (
		<ContactsStyled id="contacts">
			<h2>Контакты</h2>
			<p className="contacts__descr">
				Альянс компаний, объединенных под брендом “Enica Express” имеет
				свои офисы во всех странах Центральной и Средней Азии.
			</p>
			<div className="contacts__line"></div>
			<ContactItem>
				<h3 onClick={rusClickHandler}>Представительство в России</h3>
				<ContactItemContent visible={rusVisible}>
					<ContactItemDescr>
						<h4>Enica Express RUS</h4>
						<p className="address">
							г. Москва, 22й километр Киевского шоссе (п.
							Московский), <br /> домовл. 4, стр. 2, блок Г
						</p>
						<p className="phone">Телефон: +7 (495) 374-68-68</p>
						<p className="email">E-mail: sales@enica-express.ru</p>
					</ContactItemDescr>
					<ContactMap
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A1ae36c695835f0827beb3309068fabc4465e5894f8864627f12246684061734f&amp;source=constructor"
						title="Enica Express RUS"
					/>
				</ContactItemContent>
				<div className="contact__line"></div>
			</ContactItem>
			<ContactItem>
				<h3 onClick={uzbClickHandler}>
					Представительство в Узбекистане
				</h3>

				<ContactItemContent visible={uzbVisible}>
					<ContactItemDescr>
						<h4>
							Представительство компании «Enex Logistics Co., Ltd»
							в Республике Узбекистан
						</h4>
						<p className="address">
							г.Ташкент, Мирабадский район, ул.Афросиаб, 4Б, офис
							207
						</p>
						<p className="phone">Телефон: +998 90 9120788</p>
						<p className="email">E-mail: sales@enica-express.ru</p>
					</ContactItemDescr>
					<ContactMap
						src="https://yandex.ru/map-widget/v1/?um=mymaps%3AEu8yrsj9AiwQUz9E7ErbcSmm0TpyBENM&amp;source=constructor"
						title="Enex Logistics"
					/>
				</ContactItemContent>

				<div className="contact__line"></div>
			</ContactItem>
			<ContactItem>
				<h3 onClick={krgClickHandler}>
					Представительство в Кыргызстане
				</h3>

				<ContactItemContent visible={krgVisible}>
					<ContactItemDescr>
						<h4>Enica Express KRG</h4>
						<p className="address">
							г. Бишкек, Юнусалиева, 28, 3 этаж
						</p>
						<p className="phone">Телефон: +996 555 323283</p>
						<p className="email">E-mail: sales@enica-express.ru</p>
					</ContactItemDescr>
					<ContactMap
						src="https://yandex.ru/map-widget/v1/?um=mymaps%3ArOE022znJav0JiEc1JmIw22ZWtghnHPi&amp;source=constructor"
						title="Enica Express KRG"
					/>
				</ContactItemContent>

				<div className="contact__line"></div>
			</ContactItem>
			<ContactItem>
				<h3 onClick={tdjClickHandler}>
					Представительство в Таджикистане
				</h3>

				<ContactItemContent visible={tdjVisible}>
					<ContactItemDescr>
						<h4>Enica Express TDJ</h4>
						<p className="address">
							г. Душанбе, ул. Джаббора Расулова, 6/1
						</p>
						<p className="phone">Телефон: +992 37 8853536</p>
						<p className="email">E-mail: sales@enica-express.ru</p>
					</ContactItemDescr>
					<ContactMap
						src="https://yandex.ru/map-widget/v1/?um=mymaps%3A6_A-SBdUAjvQV0sZuwsVf2FLKsEGimPw&amp;source=constructor"
						title="Enica Express TDJ"
					/>
				</ContactItemContent>

				<div className="contact__line"></div>
			</ContactItem>
		</ContactsStyled>
	);
};

const ContactsStyled = styled.div`
	color: #03588c;
	padding: 100px 40px;
	h2 {
		text-align: center;
		font-size: 32px;
		font-weight: 500;

		text-transform: uppercase;
		margin-bottom: 100px;
	}
	.contacts__descr {
		font-family: "Ubuntu Condensed", sans-serif;
		display: block;
		text-align: center;
		font-size: 24px;
	}
	.contacts__line,
	.contact__line {
		width: 80%;
		height: 3px;
		background-color: rgba(0, 0, 0, 0.2);
		margin: 30px auto;
	}
	@media screen and (max-width: 800px) {
		padding: 70px 10px;
	}
`;

const ContactItem = styled.div`
	h3 {
		text-align: center;
		font-size: 24px;
		font-weight: 500;
		color: #03588c;
		cursor: pointer;
	}
	@media screen and (max-width: 800px) {
		h3 {
			font-size: 20px;
		}
	}
`;

const ContactItemContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${(props) => (props.visible ? "400px" : "0px")};
	overflow: hidden;
	transition: all 0.5s ease;
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const ContactItemDescr = styled.div`
	width: 35%;
	color: #03588c;
	h4 {
		font-size: 26px;
		font-weight: 500;
		margin: 30px 0;
	}
	.address {
		font-size: 22px;
		margin-bottom: 20px;
	}
	.phone,
	.email {
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 20px;
	}
	@media screen and (max-width: 800px) {
		width: 90%;
		text-align: center;
		margin: 0 auto;
		h4 {
			font-size: 20px;
		}
		.address,
		.phone,
		.email {
			font-size: 14px;
			margin-bottom: 10px;
		}
	}
`;

export default Contacts;
