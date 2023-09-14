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
  memos: MemosType;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

interface BodyPropsType {
  standardDate: Date;
  memos: MemosType;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

const CalenderDate: React.FC<DatePropsType> = ({
  standardDate,
  week,
  size,
  memos,
  setModal
}) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLTextAreaElement;
    if (element.innerText !== '') {
      const target = `${standardDate.getFullYear()}${String(
        standardDate.getMonth() + 1
      ).padStart(2, '0')}${element.innerText.padStart(2, '0')}`;
      const arr = { target, open: true };
      setModal(arr);
    }
  };

  return (
    <StyledWeek onClick={onClick} size={size}>
      {week.map((date, i) => {
        const target = `${standardDate.getFullYear()}${String(
          standardDate.getMonth() + 1
        ).padStart(2, '0')}${String(date).padStart(2, '0')}`;
        return (
          <StyledDate key={i} checked={memos[target] === undefined}>
            {date === 0 ? '' : date}
          </StyledDate>
        );
      })}
    </StyledWeek>
  );
};

const CalenderBody: React.FC<BodyPropsType> = ({
  standardDate,
  memos,
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
            memos={memos}
            setModal={setModal}
          />
        ))}
    </CalenderBodyWrapper>
  );
};

export default CalenderBody;
