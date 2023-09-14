import styled from 'styled-components';

export const StyledWeek = styled.div<{ size: number }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(${props => (1 / props.size) * 100}% - 1.3px);
  border-bottom: 1px solid #e2e2e2;
`;

export const StyledDate = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.checked ? 'white' : '#4B89DC')};
  font-weight: ${props => (props.checked ? '400' : '600')};
  width: 14.28%;
  height: 100%;
  font-size: 18px;
  border-right: 1px solid ${props => (props.checked ? '#e2e2e2' : '#4B89DC')};
  cursor: pointer;
`;

export const CalenderBodyWrapper = styled.div`
  width: 100%;
  height: 80%;
`;
