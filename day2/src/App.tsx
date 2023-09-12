import React, { useState } from 'react';
import TimerInput from './TimerInput/TimerInput';
import { TimeType } from './types';

function App() {
  const [time, setTime] = useState<TimeType>({
    hour: '',
    minute: '',
    second: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const obj = { ...time, [name]: value };
    setTime(obj);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    let flag = false;
    const { name } = e.target;

    if (!time[name].match(/^[0-9]+$/g)) {
      flag = true;
      alert('숫자만 입력하세요');
    }

    if (name === 'hour' && parseInt(time[name]) > 12) {
      flag = true;
      alert('시간은 12 이하만 입력할 수 있습니다');
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
    <div className='App'>
      <TimerInput time={time} onChange={onChange} onBlur={onBlur} />
    </div>
  );
}

export default App;
