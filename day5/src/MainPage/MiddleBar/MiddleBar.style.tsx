import styled from 'styled-components';

export const MiddleBarWrapper = styled.div<{ scrollPos: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 50px;
  width: 100%;
  height: 60px;
  box-shadow: ${props =>
    props.scrollPos > 290 ? '0 10px 10px -10px gray' : 'none'};
`;
