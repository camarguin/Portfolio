import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useMediaQuery } from 'react-responsive';
import Homepage from './templates/Homepage';
import Aboutpage from './templates/Aboutpage';
import Skillspage from './templates/Skillspage';
import FeaturedProjectpage from './templates/FeaturedProjectpage';
import Projectspage from './templates/Projectspage';
import Feedbackpage from './templates/Feedbackpage';
import GithubFeedpage from './templates/GithubFeedpage';

const anchors = ["Home", "About", "Skills", "Featured Project", "Projects", "Feedbacks"];

const Fullpage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  })
  return (
    <ReactFullpage
      // licenseKey={process.env.FULLPAGE_APP_LICENSE}
      licenseKey='EE762A8F-1C5840DB-AA550FBD-A31081E0'
      navigation={isMobile ? false : true}
      navigationPosition={"left"}
      navigationTooltips={anchors}
      scrollingSpeed={1500}
      showActiveTooltip={false}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Homepage />
            </div>
            <div className="section">
              <Aboutpage />
            </div>
            <div className="section">
              <Skillspage />
            </div>
            <div className="section">
              <FeaturedProjectpage />
            </div>
            <div className="section">
              <Projectspage />
            </div>
            {/* <div className="section">
              <GithubFeedpage />
            </div> */}
            <div className="section">
              <Feedbackpage />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Fullpage;