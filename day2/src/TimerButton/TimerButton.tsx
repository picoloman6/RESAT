import React from 'react';
import { TimeType } from '../types';
import { TimerButtonWrapper, StyledTimerButton } from './TimerButton.style';

type PropsType = {
  time: TimeType;
  //   setTime: React.Dispatch<React.SetStateAction<TimeType>>;
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

const TimerButton: React.FC<PropsType> = ({ time, setRunning }) => {
  const onClickStart = () => {
    setRunning(true);
  };

  const onClickStop = () => {
    setRunning(false);
  };

  return (
    <TimerButtonWrapper>
      <StyledTimerButton onClick={onClickStart}>start</StyledTimerButton>
      <StyledTimerButton onClick={onClickStop}>stop</StyledTimerButton>
      <StyledTimerButton>reset</StyledTimerButton>
    </TimerButtonWrapper>
  );
};

export default TimerButton;
