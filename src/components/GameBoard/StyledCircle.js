import styled from 'styled-components';
import { colors } from 'globalStyles'

const StyledCircle = styled.div`
  background-color: ${({ color }) => color ? color : 'transparent'};
  border: 2px solid ${colors.DARK};
  border-radius: 50%;
  width: 2em;
  height: 2em;
  cursor: ${({ canMove }) => canMove ? 'move' : 'default'};
  margin: 0 0.125em;
`;

export default StyledCircle;
