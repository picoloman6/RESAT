import { useEffect } from 'react';
import { TimerDisplayWrapper } from './TimerDisplay.style';
import { TimeType } from '../types';

type PropsType = {
  time: TimeType;
  setTime: React.Dispatch<React.SetStateAction<TimeType>>;
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

const TimerDisplay: React.FC<PropsType> = ({ time, setTime, setRunning }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const { hour, minute, second } = time;
      let sum =
        parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second) - 1;

      if (sum < 0) {
        setRunning(false);
        setTime({ hour: '', minute: '', second: '' });
        alert('시간이 경과하였습니다.');
      } else {
        const newHour = String(Math.floor(sum / 3600));
        sum = sum % 3600;
        const newMinute = String(Math.floor(sum / 60));
        const newSecond = String(Math.floor(sum % 60));
        const obj = { hour: newHour, minute: newMinute, second: newSecond };
        setTime(obj);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <TimerDisplayWrapper>
      <span>{time.hour}</span>
      <span>:</span>
      <span>{time.minute}</span>
      <span>:</span>
      <span>{time.second}</span>
    </TimerDisplayWrapper>
  );
};

export default TimerDisplay;
