import React from 'react';
import styled from 'styled-components';
import { TimeType } from '../types';

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

type PropsType = {
  time: TimeType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const arr = [
  ['시', 'hour'],
  ['분', 'minute'],
  ['초', 'second']
];

const TimerInput: React.FC<PropsType> = ({ time, onChange, onBlur }) => {
  return (
    <Wrapper>
      {arr.map(value => (
        <StyledDiv>
          <p>{value[0]}</p>
          <input
            name={value[1]}
            value={time[value[1]]}
            autoComplete='off'
            onChange={onChange}
            onBlur={onBlur}
          />
        </StyledDiv>
      ))}
    </Wrapper>
  );
};

export default TimerInput;
