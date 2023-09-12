import React from 'react';
import { TimeType } from '../types';
import { TimerButtonWrapper, StyledTimerButton } from './TimerButton.style';

type PropsType = {
  time: TimeType;
  setTime: React.Dispatch<React.SetStateAction<TimeType>>;
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

const TimerButton: React.FC<PropsType> = ({ time, setTime, setRunning }) => {
  const onClickStart = () => {
    const { hour, minute, second } = time;
    if (hour === '' && minute === '' && second === '') {
      alert('숫자를 입력하세요');
      return;
    }

    setRunning(true);
  };

  const onClickStop = () => {
    setRunning(false);
  };

  const onClickReset = () => {
    setRunning(false);
    setTime({ hour: '', minute: '', second: '' });
  };

  return (
    <TimerButtonWrapper>
      <StyledTimerButton onClick={onClickStart}>start</StyledTimerButton>
      <StyledTimerButton onClick={onClickStop}>stop</StyledTimerButton>
      <StyledTimerButton onClick={onClickReset}>reset</StyledTimerButton>
    </TimerButtonWrapper>
  );
};

export default TimerButton;
