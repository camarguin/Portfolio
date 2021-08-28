import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { FeedbackCardContainer, FeedbackContentH4, FeedbackContentH6, FeedbackContentP, FeedbackQuotes } from './styles';

const FeedbackCard = ({ feedbackText, feedbackAuthor, feedbackAuthor2 }) => {
  return (
    <FeedbackCardContainer>
      <FeedbackQuotes>
        <ImQuotesLeft />
      </FeedbackQuotes>
      <FeedbackContentP>
        <q>{feedbackText}</q>
      </FeedbackContentP>
      <FeedbackContentH4>
        {feedbackAuthor}
      </FeedbackContentH4>
      <FeedbackContentH6>
        {feedbackAuthor2}
      </FeedbackContentH6>
    </FeedbackCardContainer>
  );
};

export default FeedbackCard;