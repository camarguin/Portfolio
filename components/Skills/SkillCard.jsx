import React from 'react';
import { SkillCardContainer, SkillCardIcon, SkillCardText } from './styles';

const SkillCard = ({ skillName, skillIcon }) => {
  return (
    <SkillCardContainer>
      <SkillCardIcon>{skillIcon}</SkillCardIcon>
      <SkillCardText>{skillName}</SkillCardText>
    </SkillCardContainer>
  );
};

export default SkillCard;