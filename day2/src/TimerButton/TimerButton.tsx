import React from 'react';
import { TimeType } from '../types';
import { TimerButtonWrapper, StyledTimerButton } from './TimerButton.style';

type PropsType = {
  time: TimeType;
  setTime: React.Dispatch<React.SetStateAction<TimeType>>;
};

const TimerButton: React.FC<PropsType> = () => {
  const onClickStart = () => {};

  return (
    <TimerButtonWrapper>
      <StyledTimerButton>start</StyledTimerButton>
      <StyledTimerButton>stop</StyledTimerButton>
      <StyledTimerButton>reset</StyledTimerButton>
    </TimerButtonWrapper>
  );
};

export default TimerButton;
