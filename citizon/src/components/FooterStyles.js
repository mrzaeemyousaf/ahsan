// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 1% 2.5%;
	background:  #363748;
	// position: absolute;
	bottom: 0;
	width: 100%;

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 4rem;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	text-align: left;

	&:hover {
		color: var(--golden_color);
		transition: 200ms ease-in;
		font-size: 1.2rem;
		font-weight: bold;
	}
`;

export const Heading = styled.p`
	font-size: 20px;
	color: #fff;
	margin-bottom: 10px;
	font-weight: bold;
	text-align: left;
`;
