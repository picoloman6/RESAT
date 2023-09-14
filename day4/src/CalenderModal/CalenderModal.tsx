import React from 'react';

import { ModalType } from '../types';
import {
  CalenderModalWrapper,
  CalenderModalContent
} from './CalenderModal.style';

interface PropsType {
  modal: ModalType;
  setModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

const CalenderModal: React.FC<PropsType> = ({ modal, setModal }) => {
  const onClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModal({ target: '', open: false });
    }
  };

  return (
    <CalenderModalWrapper onClick={onClickModal}>
      <CalenderModalContent>
        <div>
          <span>
            {modal.target.slice(0, 4)}년 {Number(modal.target.slice(4, 6))}월{' '}
            {Number(modal.target.slice(6))}일
          </span>
          <button>제출</button>
        </div>
        <textarea placeholder='메모를 입력하세요.' />
      </CalenderModalContent>
    </CalenderModalWrapper>
  );
};

export default CalenderModal;
