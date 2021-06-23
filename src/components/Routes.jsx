import React from "react";
import styled from "styled-components";
import Route from "./Route";

const Routes = () => {
	return (
		<RoutesStyled id="routes">
			<h2>Наши маршруты</h2>
			<RoutesContainer>
				<Route
					imgURL="./img/route_1.jpg"
					routeName="Ташкент - Москва"
					time="6 дней"
					schedule="2 раза в неделю"
				/>
				<Route
					imgURL="./img/route_1.jpg"
					routeName="Фергана - Москва"
					time="7 дней"
					schedule="3 раза в неделю"
				/>
				<Route
					imgURL="./img/route_1.jpg"
					routeName="Душанбе - Москва"
					time="8 дней"
					schedule="3 раза в неделю"
				/>
				<Route
					imgURL="./img/route_1.jpg"
					routeName="Москва - Алматы"
					time="5 дней"
					schedule="ежедневно"
				/>
				<Route
					imgURL="./img/route_1.jpg"
					routeName="Москва - Ташкент"
					time="7 дней"
					schedule="через день"
				/>
				<Route
					imgURL="./img/route_1.jpg"
					routeName="Санкт-Петербург - Бишкек"
					time="6 дней"
					schedule="2 раза в неделю"
				/>
			</RoutesContainer>
		</RoutesStyled>
	);
};

const RoutesStyled = styled.div`
	width: 100%;
	padding: 5rem;
	/* background-color: #214466; */
	h2 {
		text-align: center;
		font-weight: 700;
		font-size: 40px;
		color: #214466;
	}
`;

const RoutesContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	flex-wrap: wrap;
`;

export default Routes;
