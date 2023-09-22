import React from 'react';

import {
  SideBarModalWrapper,
  SideBarModalHeader,
  SideBarModalBody
} from './Modal.style';

interface PropsType {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const SideBarModal: React.FC<PropsType> = ({ setModal }) => {
  const onClickCancelButton = () => {
    setModal(() => 'none');
    const body = document.body;
    body.style.overflow = 'visible';
  };

  const onClickLogin = () => {
    setModal(() => 'login');
    const body = document.body;
    body.style.overflow = 'visible';
  };

  return (
    <SideBarModalWrapper>
      <SideBarModalHeader>
        <span>LOGO</span>
        <button onClick={onClickCancelButton}>x</button>
      </SideBarModalHeader>
      <SideBarModalBody>
        <span onClick={onClickLogin}>로그인</span>
        <span>미니인턴</span>
        <span>스킬업</span>
        <span>M클래스</span>
        <span>채용관</span>
        <span>해피폴리오</span>
      </SideBarModalBody>
    </SideBarModalWrapper>
  );
};

export default SideBarModal;
