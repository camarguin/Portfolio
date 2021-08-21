import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Homepage from './templates/Homepage';
import MouseScroll from './MouseScroll/MouseScroll';
import Aboutpage from './templates/Aboutpage';

const anchors = ["Home", "About", "Skills", "Featured Project", "Projects", "Github", "Feedbacks"];

const Fullpage = () => {
  return (
    <ReactFullpage
      // licenseKey={'YOUR_KEY_HERE'}
      navigation
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
              Skills
            </div>
            <div className="section">
              Featured Project
            </div>
            <div className="section">
              Other Projects
            </div>
            <div className="section">
              Github Feed
            </div>
            <div className="section">
              People Feedbacks
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Fullpage;