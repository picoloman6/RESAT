import React from 'react';

import {
  ModalWrapper,
  SideBarModalWrapper,
  SideBarModalHeader,
  SideBarModalBody
} from './Modal.style';

interface PropsType {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const SideBarModal: React.FC<PropsType> = ({ setModal }) => {
  const onClickModalButton = () => {
    setModal(() => 'none');
    const body = document.body;
    body.style.overflow = 'visible';
  };

  return (
    <ModalWrapper>
      <SideBarModalWrapper>
        <SideBarModalHeader>
          <span>LOGO</span>
          <button onClick={onClickModalButton}>x</button>
        </SideBarModalHeader>
        <SideBarModalBody>
          <span>미니인턴</span>
          <span>스킬업</span>
          <span>M클래스</span>
          <span>채용관</span>
          <span>해피폴리오</span>
        </SideBarModalBody>
      </SideBarModalWrapper>
    </ModalWrapper>
  );
};

export default SideBarModal;
