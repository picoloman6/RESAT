import { useEffect } from 'react';
import { TimerInputWrapper } from '../TimerInput/TimerInput.style';
import { TimeType } from '../types';

type PropsType = {
  time: TimeType;
  setTime: React.Dispatch<React.SetStateAction<TimeType>>;
};

const TimerDisplay: React.FC<PropsType> = ({ time, setTime }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const { hour, minute, second } = time;
      let sum =
        parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second) - 1;
      const newHour = String(Math.floor(sum / 3600));
      sum = sum % 3600;
      const newMinute = String(Math.floor(sum / 60));
      const newSecond = String(Math.floor(sum % 60));

      const obj = { hour: newHour, minute: newMinute, second: newSecond };
      setTime(obj);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <TimerInputWrapper>
      <span>{time.hour}</span>
      <span>{time.minute}</span>
      <span>{time.second}</span>
    </TimerInputWrapper>
  );
};

export default TimerDisplay;
