/**
 *
 * Button
 *
 */

import React, { Children } from 'react';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

const Button = ({ onClick, children }) => {
  return (
    <Wrapper>
      <StyledButton onClick={onClick}>
        {Children.toArray(children)}
      </StyledButton>
    </Wrapper>
  );
}

export default Button;
