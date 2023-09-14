import React, { useState, useEffect } from 'react';

import { makeMonth } from '../utils';
import {
  StyledWeek,
  StyledDate,
  CalenderBodyWrapper
} from './CalenderBody.style';

interface DatePropsType {
  week: number[];
  size: number;
}

interface BodyPropsType {
  standardDate: Date;
}

const CalenderDate: React.FC<DatePropsType> = ({ week, size }) => {
  const onClick = () => {
    console.log('여기');
  };

  return (
    <StyledWeek size={size}>
      {week.map((date, i) => (
        <StyledDate onClick={onClick} key={i}>
          {date === 0 ? '' : date}
        </StyledDate>
      ))}
    </StyledWeek>
  );
};

const CalenderBody: React.FC<BodyPropsType> = ({ standardDate }) => {
  const [month, setMonth] = useState<number[][] | null>(null);

  useEffect(() => {
    setMonth(makeMonth(standardDate));
  }, [standardDate]);

  return (
    <CalenderBodyWrapper>
      {month &&
        month.map((week, i) => (
          <CalenderDate key={i} week={week} size={month.length} />
        ))}
    </CalenderBodyWrapper>
  );
};

export default CalenderBody;
