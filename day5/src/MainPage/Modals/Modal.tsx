import React, { useEffect, useCallback } from 'react';

import SideBarModal from './SideBarModal';
import LoginModal from './LoginModal';
import { ModalWrapper } from './Modal.style';

interface PropsType {
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const Modal: React.FC<PropsType> = ({ modal, setModal }) => {
  const globalModalEvent = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modal !== 'none') {
        setModal('none');
        const body = document.body;
        body.style.overflow = 'visible';
      }
    },
    [modal, setModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', globalModalEvent);
    return () => {
      window.removeEventListener('keydown', globalModalEvent);
    };
  }, [globalModalEvent]);

  return (
    <ModalWrapper>
      {modal === 'sideBar' && <SideBarModal setModal={setModal} />}
      {modal === 'login' && <LoginModal setModal={setModal} />}
    </ModalWrapper>
  );
};

export default Modal;
