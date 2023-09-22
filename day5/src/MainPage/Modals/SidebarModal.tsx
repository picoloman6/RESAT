import React from 'react';

import { ModalWrapper } from './Modal.style';

interface PropsType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarModal: React.FC<PropsType> = ({ setModal }) => {
  const onClickModalButton = () => {
    setModal(() => false);
    const body = document.body;
    body.style.overflow = 'visible';
  };

  return (
    <ModalWrapper>
      <div>
        <div>
          <span>LOGO</span>
          <button onClick={onClickModalButton}>x</button>
        </div>
        <div>
          <span>미니인턴</span>
          <span>스킬업</span>
          <span>M클래스</span>
          <span>채용관</span>
          <span>해피폴리오</span>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SideBarModal;
