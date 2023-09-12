import styled from 'styled-components';

export const TimerInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  height: 80px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
  border: 3px solid black;
  border-radius: 10px;
`;

export const TimerInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  p {
    font-size: 18px;
    margin: 0;
    margin-bottom: 10px;
  }

  input {
    font-size: 25px;
    text-align: center;
    width: 70%;
    height: 30px;
  }
`;
