import { useState } from 'react';
import TimerInput from './TimerInput/TimerInput';
import TimerButton from './TimerButton/TimerButton';
import { TimeType } from './types';

function App() {
  const [time, setTime] = useState<TimeType>({
    hour: '',
    minute: '',
    second: ''
  });

  return (
    <div className='App'>
      <TimerInput time={time} setTime={setTime} />
      <TimerButton time={time} setTime={setTime} />
    </div>
  );
}

export default App;
