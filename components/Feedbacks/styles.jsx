import styled from "styled-components";

export const FeedbackCardContainer = styled.div`
  margin: 0px;
  padding: 0px;
  & * {
    padding: 10px 0px;
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
`;

export const FeedbackContentH4 = styled.h4`
  font-size: 1.5rem;
  text-align: left;
  font-weight: 600;
  color: var(--white);
`;

export const FeedbackContentH6 = styled.h6`
  font-size: 1.2rem;
  text-align: left;
  font-weight: 300;
  color: var(--white);
`;

export const FeedbacksContainer = styled.div`
  padding: 10px 0px;
  .carousel {
    width: 100%;
    padding: 0px 0px;
    margin-left: 0px;
    :nth-child(1) > div {
      margin: 0;
    }
  }
`;