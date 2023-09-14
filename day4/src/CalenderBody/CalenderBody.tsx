import React, { useState, useEffect } from 'react';

import { MemosType, ModalType } from '../types';
import { makeMonth } from '../utils';
import {
  StyledWeek,
  StyledDate,
  CalenderBodyWrapper
} from './CalenderBody.style';

interface DatePropsType {
  standardDate: Date;
  week: number[];
  size: number;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

interface BodyPropsType {
  standardDate: Date;
  memos: MemosType;
  setMemos: React.Dispatch<React.SetStateAction<MemosType>>;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

const CalenderDate: React.FC<DatePropsType> = ({
  standardDate,
  week,
  size,
  setModal
}) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLTextAreaElement;
    if (element.innerText !== '') {
      const target = `${standardDate.getFullYear()}${String(
        standardDate.getMonth()
      ).padStart(2, '0')}${element.innerText.padStart(2, '0')}`;
      const arr = { target, open: true };
      setModal(arr);
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
  setMemos,
  setModal
}) => {
  const [month, setMonth] = useState<number[][] | null>(null);

  useEffect(() => {
    setMonth(makeMonth(standardDate));
  }, [standardDate]);

  return (
    <CalenderBodyWrapper>
      {month &&
        month.map((week, i) => (
          <CalenderDate
            key={i}
            standardDate={standardDate}
            week={week}
            size={month.length}
            setModal={setModal}
          />
        ))}
    </CalenderBodyWrapper>
  );
};

export default CalenderBody;
