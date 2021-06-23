import React from "react";
import styled from "styled-components";

const Solution = (props) => {
	return (
		<SolutionStyled bgColor={props.bgColor}>
			<h3>{props.caseHeader}</h3>
			<p>{props.caseDescr}</p>
		</SolutionStyled>
	);
};

const SolutionStyled = styled.div`
	width: 100%;
	height: 300px;
	background: ${(props) => props.bgColor};
	margin: 0 10px;
	h3 {
		color: white;
		font-size: 30px;
		margin: 30px auto;
		text-align: center;
	}
	p {
		display: block;
		font-size: 16px;
		line-height: 25px;
		font-weight: 300;
		color: white;
		width: 85%;
		margin: 20px auto;
	}
`;

export default Solution;
