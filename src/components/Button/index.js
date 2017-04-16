/**
 *
 * Button
 *
 */

import React, { Children } from 'react';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

const Button = ({ href, onClick, handleRoute, children }) => {
  return (
    <Wrapper>
      <StyledButton onClick={handleRoute}>
        {Children.toArray(children)}
      </StyledButton>
    </Wrapper>
  );
}

export default Button;
