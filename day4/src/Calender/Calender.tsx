import { useState } from 'react';

import CalenderHeader from '../CalenderHeader/CalenderHeader';
import CalenderBody from '../CalenderBody/CalenderBody';
import { CalenderWrapper } from './Calender.style';

const Calender = () => {
  const [standarDate, setStandardDate] = useState<Date>(new Date());
  return (
    <CalenderWrapper>
      <CalenderHeader
        standarDate={standarDate}
        setStandardDate={setStandardDate}
      />
      <CalenderBody standarDate={standarDate} />
    </CalenderWrapper>
  );
};

export default Calender;
