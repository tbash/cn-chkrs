import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 1em 2em;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid var(--PRIMARY);
  color: var(--PRIMARY);
  background: transparent;
  transition: all .2s ease;

  &:active {
    background: var(--PRIMARY);
    color: var(--LIGHT);
  }
`;

export default StyledButton;
