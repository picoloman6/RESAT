import React, { useState, useEffect } from 'react';

import { MemosType } from '../types';
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
  memos: MemosType;
  setMemos: React.Dispatch<React.SetStateAction<MemosType>>;
}

const CalenderDate: React.FC<DatePropsType> = ({ week, size }) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLTextAreaElement;
    if (element.innerText !== '') {
      console.log(element.innerText);
    }
  };

  return (
    <StyledWeek onClick={onClick} size={size}>
      {week.map((date, i) => (
        <StyledDate key={i}>{date === 0 ? '' : date}</StyledDate>
      ))}
    </StyledWeek>
  );
};

const CalenderBody: React.FC<BodyPropsType> = ({
  standardDate,
  memos,
  setMemos
}) => {
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
