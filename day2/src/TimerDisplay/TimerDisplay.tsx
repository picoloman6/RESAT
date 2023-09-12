import { TimerInputWrapper } from '../TimerInput/TimerInput.style';
import { TimeType } from '../types';

type PropsType = {
  time: TimeType;
};

const TimerDisplay: React.FC<PropsType> = ({ time }) => {
  return (
    <TimerInputWrapper>
      <span>{time.hour}</span>
      <span>{time.minute}</span>
      <span>{time.second}</span>
    </TimerInputWrapper>
  );
};

export default TimerDisplay;
