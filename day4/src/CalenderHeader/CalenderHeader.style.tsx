import styled from 'styled-components';

export const CalenderHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  border-bottom: 2px solid black;

  > button {
    width: 15%;
    height: 100%;
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
  }
`;
