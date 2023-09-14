import React from 'react';

import { CalenderHeaderWrapper } from './CalenderHeader.style';

interface PropsType {
  standardDate: Date;
  setStandardDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalenderHeader: React.FC<PropsType> = ({
  standardDate,
  setStandardDate
}) => {
  const onClickButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLButtonElement;
    if (element.tagName === 'BUTTON') {
      const newDate = new Date(standardDate);
      if (element.className === 'left') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      setStandardDate(newDate);
    }
  };

  return (
    <CalenderHeaderWrapper onClick={onClickButton}>
      <button className='left'>&#11164;</button>
      <div>
        <span>{standardDate.getFullYear()}년</span>
        <span>{standardDate.getMonth() + 1}월</span>
      </div>
      <button className='right'>&#11166;</button>
    </CalenderHeaderWrapper>
  );
};

export default CalenderHeader;
