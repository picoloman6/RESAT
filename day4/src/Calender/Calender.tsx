import { useState } from 'react';

import CalenderHeader from '../CalenderHeader/CalenderHeader';
import CalenderBody from '../CalenderBody/CalenderBody';
import { CalenderWrapper } from './Calender.style';

const Calender = () => {
  const [standardDate, setStandardDate] = useState<Date>(new Date());
  return (
    <CalenderWrapper>
      <CalenderHeader
        standardDate={standardDate}
        setStandardDate={setStandardDate}
      />
      <CalenderBody standardDate={standardDate} />
    </CalenderWrapper>
  );
};

export default Calender;
