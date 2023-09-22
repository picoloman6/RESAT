import React from 'react';

import SideBarModal from './SideBarModal';
import LoginModal from './LoginModal';
import { ModalWrapper } from './Modal.style';

interface PropsType {
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const Modal: React.FC<PropsType> = ({ modal, setModal }) => {
  return (
    <ModalWrapper>
      {modal === 'sideBar' && <SideBarModal setModal={setModal} />}
      {modal === 'login' && <LoginModal />}
    </ModalWrapper>
  );
};

export default Modal;
