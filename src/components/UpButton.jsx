import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.png";

const UpButton = () => {
	return (
		<UpButtonStyled>
			<a href="#hero">
				<img src={arrow} alt="Up Button" />
			</a>
		</UpButtonStyled>
	);
};

const UpButtonStyled = styled.div`
	width: 70px;
	height: 70px;
	background: rgba(255, 255, 255, 0.5);
	border-radius: 50%;
	position: fixed;
	right: 50px;
	bottom: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default UpButton;
