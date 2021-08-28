import React from 'react';
import Carousel from 'react-grid-carousel'
import FeedbackCard from './FeedbackCard';
import { FeedbacksContainer } from './styles';

const Feedbacks = () => {
  return (
    <FeedbacksContainer>
      <Carousel
        autoplay={6000}
        cols={1}
        rows={1}
        containerClassName="carousel"
        dotColorActive="#fff"
        dotColorInactive="#808080"
        loop
        hideArrow
        showDots
        scrollSnap
      >
        <Carousel.Item>
          <FeedbackCard
            feedbackText="I have known him for the whole year as a tech-head instructor. He worked as a scrum master a few times because
            he has a great leadership. He took care of website optimization, modification, and other maintenance for his
            group. His participation, punctuality, and enthusiasm fulfilled all the requirements any companies need..."
            feedbackAuthor="Steve Kim"
            feedbackAuthor2="President of Synet Computer Inc."
          />
        </Carousel.Item>
        <Carousel.Item>
          <FeedbackCard
            feedbackText="Over two months, I had many requests and continuously changed my vision as the
            website started to come together. Lucas was patient with me,
            asked questions, made suggestions, and showed creativity and imagination by
            implementing things that were above and beyond what I could have thought of myself..."
            feedbackAuthor="Tyler Pace"
            feedbackAuthor2="Founder and CEO of Pro Caliber Lacrosse"
          />
        </Carousel.Item>
      </Carousel>
    </FeedbacksContainer>
  );
};

export default Feedbacks;