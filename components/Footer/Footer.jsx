import React from 'react';
import { FooterContainer } from './styles';
import { FaHeartbeat } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <p>Developed and Designed with &nbsp; <FaHeartbeat /> &nbsp; by Lucas</p>
    </FooterContainer>
  );
};

export default Footer;