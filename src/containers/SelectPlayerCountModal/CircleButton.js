import styled from 'styled-components';
import { colors } from 'globalStyles'

const CircleButton = styled.button`
  border: 2px solid ${colors.SECONDARY};
  border-radius: 50%;
  width: 3em;
  height: 3em;
  display: inline-block;
  box-sizing: border-box;
  margin: 1em;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.SECONDARY};
  background: transparent;
  transition: all .2s ease;

  &:active {
    background: ${colors.SECONDARY};
    color: ${colors.LIGHT};
  }
`;

export default CircleButton;
