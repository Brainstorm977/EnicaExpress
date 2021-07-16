import React from "react";
import styled from "styled-components";

const ContactMap = ({ src, title }) => {
	return (
		<ContactItemMap>
			<iframe
				src={src}
				width="100%"
				height="100%"
				frameborder="0"
				title={title}
			></iframe>
		</ContactItemMap>
	);
};

const ContactItemMap = styled.div`
	margin-left: 40px;
	width: 600px;
	height: 350px;
	@media screen and (max-width: 1200px) {
		width: 400px;
	}
	@media screen and (max-width: 800px) {
		width: 90%;
		text-align: center;
		margin: 0 auto;
	}
`;

export default ContactMap;
