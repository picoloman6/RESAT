import React from 'react';

import SideBarModal from './SideBarModal';
import { ModalWrapper } from './Modal.style';

interface PropsType {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const Modal: React.FC<PropsType> = ({ setModal }) => {
  return (
    <ModalWrapper>
      <SideBarModal setModal={setModal} />
    </ModalWrapper>
  );
};

export default Modal;
