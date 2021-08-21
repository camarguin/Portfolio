import React from 'react';
import { Mouse, MouseScrollContainer, MouseWheel } from './styles';

const MouseScroll = () => {
  return (
    <MouseScrollContainer>
      <Mouse>
        <MouseWheel></MouseWheel>
      </Mouse>
      <div>
        <span class="m_scroll_arrows unu"></span>
        <span class="m_scroll_arrows doi"></span>
        <span class="m_scroll_arrows trei"></span>
      </div>
    </MouseScrollContainer >
  );
};

export default MouseScroll;