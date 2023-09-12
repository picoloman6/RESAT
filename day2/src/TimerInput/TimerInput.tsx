import React from 'react';
import { TimeType } from '../types';
import { TimerInputWrapper, TimerInputDiv } from './TimerInput.style';

type PropsType = {
  time: TimeType;
  setTime: React.Dispatch<React.SetStateAction<TimeType>>;
};

const arr = [
  ['시', 'hour'],
  ['분', 'minute'],
  ['초', 'second']
];

const TimerInput: React.FC<PropsType> = ({ time, setTime }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const obj = { ...time, [name]: value };
    setTime(obj);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    let flag = false;
    const { name } = e.target;

    if (time[name] !== '' && !time[name].match(/^[0-9]+$/g)) {
      flag = true;
      alert('숫자만 입력하세요');
    }

    if (name === 'hour' && parseInt(time[name]) > 99) {
      flag = true;
      alert('시간은 99 이하만 입력할 수 있습니다');
    }

    if (name !== 'hour' && parseInt(time[name]) > 60) {
      flag = true;
      alert(
        `${name === 'minute' ? '분은' : '초는'} 60 이하만 입력할 수 있습니다`
      );
    }

    if (flag) {
      const obj = { ...time, [name]: '' };
      setTime(obj);
    }
  };

  return (
    <TimerInputWrapper>
      {arr.map(value => (
        <TimerInputDiv>
          <p>{value[0]}</p>
          <input
            name={value[1]}
            value={time[value[1]]}
            autoComplete='off'
            onChange={onChange}
            onBlur={onBlur}
          />
        </TimerInputDiv>
      ))}
    </TimerInputWrapper>
  );
};

export default TimerInput;
