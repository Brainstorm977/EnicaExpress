import React from "react";
import styled from "styled-components";

const Alliance = () => {
	return (
		<AllianceStyled id="alliance">
			<h2>Представительства</h2>
		</AllianceStyled>
	);
};

const AllianceStyled = styled.div`
	width: 100%;
	height: 600px;
	background-color: #9e8fc5;
	padding: 2rem;
	h2 {
		text-align: center;
		font-weight: normal;
		font-size: 36px;
		color: white;
	}
`;

export default Alliance;
