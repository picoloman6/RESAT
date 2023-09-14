import styled from 'styled-components';

export const CalenderModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CalenderModalContent = styled.div`
  width: 50%;
  height: 50%;
  background: #e9e9e9;
  border: 2px solid black;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20%;
    width: 100%;
    border-bottom: 1px solid black;

    > span {
      margin-left: 10px;
    }

    > button {
      height: 35px;
      border: none;
      background: black;
      color: white;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  > textarea {
    height: 78%;
    width: 98%;
    border: none;
    resize: none;
  }
`;
