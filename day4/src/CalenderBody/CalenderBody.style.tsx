import styled from 'styled-components';

export const StyledWeek = styled.div<{ size: number }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(${props => (1 / props.size) * 100}% - 1.3px);
  border-bottom: 1px solid #e2e2e2;
`;

export const StyledDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 14.28%;
  height: 100%;
  font-size: 18px;
  border-right: 1px solid #e2e2e2;
  cursor: pointer;
`;

export const CalenderBodyWrapper = styled.div`
  width: 100%;
  height: 80%;
`;
