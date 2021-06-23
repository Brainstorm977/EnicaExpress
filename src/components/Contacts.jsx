import React from "react";
import styled from "styled-components";

const Contacts = () => {
	return (
		<ContactsStyled id="contacts">
			<h2>Контакты</h2>
		</ContactsStyled>
	);
};

const ContactsStyled = styled.div`
	width: 100%;
	h2 {
		text-align: center;
		font-weight: 400;
		font-size: 42px;
		color: #f36060;
		text-transform: uppercase;
		margin-bottom: 100px;
	}
`;

export default Contacts;
