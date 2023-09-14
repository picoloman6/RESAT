import React from 'react';

import { CalenderHeaderWrapper } from './CalenderHeader.style';

const CalenderHeader = () => {
  const onClickButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLButtonElement;
    if (element.tagName === 'BUTTON') {
      console.log('버튼 클릭');
    }
  };

  return (
    <CalenderHeaderWrapper onClick={onClickButton}>
      <button>&#11164;</button>
      <span>날짜</span>
      <button>&#11166;</button>
    </CalenderHeaderWrapper>
  );
};

export default CalenderHeader;
