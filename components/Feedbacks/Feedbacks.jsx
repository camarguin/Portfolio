import React from 'react';
import Slider from "react-slick";
import FeedbackCard from './FeedbackCard';
import { FeedbacksContainer } from './styles';

const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  }
  return (
    <FeedbacksContainer>
      <Slider {...settings}>
        <div>
          <FeedbackCard
            feedbackText="Lucas is an excellent professional, besides having a great didactic to teach programming
            in which I had the opportunity to participate in the development of the Projete's website,
            being a unique experience for me. I would recommend that companies get to know him as a person and as a professional,
            I can say that you will have a lot to gain."
            feedbackAuthor="Vinicius Tomaz "
            feedbackAuthor2="Co-Founder of Projete Informatica "
          />
        </div>
        <div>
          <FeedbackCard
            feedbackText="I have known him for the whole year as a tech-head instructor. He worked as a scrum master a few times because
            he has a great leadership. He took care of website optimization, modification, and other maintenance for his
            group. His participation, punctuality, and enthusiasm fulfilled all the requirements any companies need..."
            feedbackAuthor="Steve Kim"
            feedbackAuthor2="President of Synet Computer Inc."
          />
        </div>
        <div>
          <FeedbackCard
            feedbackText="Over two months, I had many requests and continuously changed my vision as the
            website started to come together. Lucas was patient with me,
            asked questions, made suggestions, and showed creativity and imagination by
            implementing things that were above and beyond what I could have thought of myself..."
            feedbackAuthor="Tyler Pace"
            feedbackAuthor2="Founder and CEO of Pro Caliber Lacrosse"
          />
        </div>
      </Slider>
    </FeedbacksContainer >
  );
};

export default Feedbacks;