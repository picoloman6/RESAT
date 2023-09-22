import React from 'react';

import SideBarModal from './SideBarModal';
import LoginModal from './LoginModal';
import { ModalWrapper } from './Modal.style';

interface PropsType {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const Modal: React.FC<PropsType> = ({ setModal }) => {
  return (
    <ModalWrapper>
      {/* <SideBarModal setModal={setModal} /> */}
      <LoginModal />
    </ModalWrapper>
  );
};

export default Modal;
