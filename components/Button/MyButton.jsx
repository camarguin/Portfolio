import React from 'react';
import { MyButtonContainer } from './styles';

const MyButton = ({ btnLabel, btnHref }) => {
  return (
    <MyButtonContainer content={btnLabel}>
      <a href={btnHref} target="_blank" rel="noopener noreferrer"></a>
    </MyButtonContainer>
  );
};

export default MyButton;