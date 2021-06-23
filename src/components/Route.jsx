import React from "react";
import styled from "styled-components";

const Route = (props) => {
	return (
		<RouteStyled>
			<Img>
				<img src={props.imgURL} alt="route" />
			</Img>
			<RouteDescr>
				<h3>{props.routeName}</h3>
				<Time>
					<img src="./img/location.svg" alt="time" />
					<p>{props.time}</p>
				</Time>
				<Schedule>
					<img src="./img/time.svg" alt="schedule" />
					<p>{props.schedule}</p>
				</Schedule>
			</RouteDescr>
		</RouteStyled>
	);
};

const RouteStyled = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px;
`;

const Img = styled.div`
	width: 150px;
	height: 150px;
	img {
		width: 100%;
		height: 100%;
	}
`;

const RouteDescr = styled.div`
	color: #214466;
	width: 250px;
	height: 150px;
	background-color: #fbfbfb;
	padding: 20px 10px;
	h3 {
		color: #214466;
		text-align: center;
		height: 50px;
	}
`;

const Time = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 10px;
	img {
		width: 15px;
		margin-right: 10px;
	}
`;

const Schedule = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 10px;
	img {
		width: 15px;
		margin-right: 10px;
	}
`;

export default Route;
