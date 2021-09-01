import styled from "styled-components";

export const FeedbackCardContainer = styled.div`
	margin: 0px;
	padding: 0px;
	& * {
		padding: 10px 0px;
	}
	@media screen and (max-width: 600px) {
		padding: 0px 5px;
	}
	@media screen and (max-width: 400px) {
   & * {
		 padding: 5px 0px;
	 } 
  }
`;

export const FeedbackQuotes = styled.div`
	position: absolute;
	color: var(--white);
	opacity: 0.2;
	font-size: 4rem;
`;

export const FeedbackContentP = styled.p`
	display: grid;
	text-align: justify;
	font-style: italic;
	color: var(--white);
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 157.19%;
	@media screen and (max-width: 400px) {
		font-size: 1rem;
		line-height: 150%;
	}
`;

export const FeedbackContentH4 = styled.h4`
	font-size: 1.5rem;
	text-align: left;
	font-weight: 600;
	color: var(--white);
	@media screen and (max-width: 400px) {
	 font-size: 1.4rem;
	}
`;

export const FeedbackContentH6 = styled.h6`
	font-size: 1.2rem;
	text-align: left;
	font-weight: 300;
	color: var(--white);
	@media screen and (max-width: 400px) {
		font-size: 1.1rem;
	}
`;

export const FeedbacksContainer = styled.div`
	padding: 10px 0px;
	.slick-dots li button:before {
		color: var(--orange-default);
		font-size: 1rem;
		margin-top: 15px;
	}
	@media screen and (max-width: 600px) {
		max-width: 90vw;
		margin: 0 auto;
	}
	@media screen and (max-width: 500px) {
		max-width: 80vw;
	}
`;