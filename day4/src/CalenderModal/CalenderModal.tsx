import React, { useState } from 'react';

import { MemosType, ModalType } from '../types';
import {
  CalenderModalWrapper,
  CalenderModalContent
} from './CalenderModal.style';

interface PropsType {
  memos: MemosType;
  setMemos: React.Dispatch<React.SetStateAction<MemosType>>;
  modal: ModalType;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

const CalenderModal: React.FC<PropsType> = ({
  memos,
  setMemos,
  modal,
  setModal
}) => {
  const [date] = useState<string>(modal.target);
  const [text, setText] = useState<string>(memos[date]);

  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModal({ target: '', open: false });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    setMemos({ ...memos, [date]: text });
    setText('');
    setModal({ target: '', open: false });
  };

  return (
    <CalenderModalWrapper onClick={onClickModal}>
      <CalenderModalContent>
        <div>
          <span>
            {date.slice(0, 4)}년 {Number(date.slice(4, 6))}월{' '}
            {Number(date.slice(6))}일
          </span>
          <button onClick={onClickButton}>제출</button>
        </div>
        <textarea
          placeholder='메모를 입력하세요.'
          onChange={onChange}
          value={text}
        />
      </CalenderModalContent>
    </CalenderModalWrapper>
  );
};

export default CalenderModal;
