import { useState } from 'react';
import { TimeType } from './types';
import TimerInput from './TimerInput/TimerInput';
import TimerButton from './TimerButton/TimerButton';
import TimerDisplay from './TimerDisplay/TimerDisplay';

function App() {
  const [running, setRunning] = useState<boolean>(false);
  const [time, setTime] = useState<TimeType>({
    hour: '',
    minute: '',
    second: ''
  });

  return (
    <div className='App'>
      {running ? (
        <TimerDisplay time={time} setTime={setTime} setRunning={setRunning} />
      ) : (
        <TimerInput time={time} setTime={setTime} />
      )}
      <TimerButton time={time} setTime={setTime} setRunning={setRunning} />
    </div>
  );
}

export default App;
