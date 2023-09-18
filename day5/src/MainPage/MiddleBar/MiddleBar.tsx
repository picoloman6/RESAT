import React, { useState } from 'react';

import { MiddleBarWrapper, MiddleBarSelectBox } from './MiddleBar.style';

interface PropsType {
  scrollpos: number;
}

const categories = [
  '기획/비즈니스',
  '디자인',
  '마케팅',
  '개발',
  '교육',
  '회계/인사/총무',
  '영업',
  '금융/보험/투자',
  '법률',
  '의료/제약/바이오'
];

const MiddleBar: React.FC<PropsType> = ({ scrollpos }) => {
  const [modal, setModal] = useState<string>('none');

  const onClickBox = (type: string) => {
    if (modal === type) {
      setModal('none');
    } else {
      setModal(type);
    }
  };

  return (
    <MiddleBarWrapper $scrollpos={scrollpos}>
      <div>
        <MiddleBarSelectBox
          onClick={() => onClickBox('progress')}
          type={'progress'}
          $modal={modal}
          width={80}>
          <div>
            <span>전체</span>
            <span>&#9660;</span>
          </div>
          <ul>
            <li>전체</li>
            <li>모집중</li>
            <li>모집종료</li>
          </ul>
        </MiddleBarSelectBox>
        <MiddleBarSelectBox
          onClick={() => onClickBox('category')}
          type={'category'}
          $modal={modal}
          width={130}>
          <div>
            <span>분야</span>
            <span>&#9660;</span>
          </div>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>
                <input type='checkbox' />
                {category}
              </li>
            ))}
          </ul>
        </MiddleBarSelectBox>
      </div>
      <div>&#128269;</div>
    </MiddleBarWrapper>
  );
};

export default MiddleBar;
