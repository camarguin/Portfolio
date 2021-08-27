import React from 'react';
import { FaHeartbeat } from 'react-icons/fa'
import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <p>Developed and Designed with &nbsp; <FaHeartbeat /> &nbsp; by Lucas</p>
    </FooterContainer>
  );
};

export default Footer;