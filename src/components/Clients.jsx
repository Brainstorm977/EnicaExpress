import React from "react";
import styled from "styled-components";

const Clients = () => {
	return (
		<ClientsStyled id="clients">
			<h2>Наши клиенты</h2>
		</ClientsStyled>
	);
};

const ClientsStyled = styled.div`
	width: 100%;
	height: 600px;
	background-color: #8fc5a6;
	padding: 5rem;
	h2 {
		text-align: center;
		font-weight: normal;
		font-size: 40px;
		color: white;
	}
`;

export default Clients;
