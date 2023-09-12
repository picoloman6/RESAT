import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
  border: 3px solid black;
  border-radius: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  p {
    font-size: 20px;
    margin: 0;
    margin-bottom: 10px;
  }

  input {
    width: 70%;
    height: 30px;
  }
`;

function TimerInput() {
  return (
    <Wrapper>
      <StyledDiv>
        <p>시</p>
        <input />
      </StyledDiv>
      <StyledDiv>
        <p>분</p>
        <input />
      </StyledDiv>
      <StyledDiv>
        <p>초</p>
        <input />
      </StyledDiv>
    </Wrapper>
  );
}

export default TimerInput;
