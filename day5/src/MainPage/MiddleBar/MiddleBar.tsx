import React, { useEffect } from 'react';

import { MiddleBarWrapper } from './MiddleBar.style';

interface PropsType {
  scrollPos: number;
}

const MiddleBar: React.FC<PropsType> = ({ scrollPos }) => {
  useEffect(() => {
    console.log(scrollPos);
  }, [scrollPos]);

  return (
    <MiddleBarWrapper scrollPos={scrollPos}>
      <div>
        <input />
        <input />
      </div>
      <div>검색버튼</div>
    </MiddleBarWrapper>
  );
};

export default MiddleBar;
