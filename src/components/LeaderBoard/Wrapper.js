import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${({ playersEmpty }) => playersEmpty ? 'none' : 'block'}
`;

export default Wrapper;
