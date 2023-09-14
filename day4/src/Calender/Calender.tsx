import { useState } from 'react';

import { MemosType, ModalType } from '../types';
import CalenderHeader from '../CalenderHeader/CalenderHeader';
import CalenderBody from '../CalenderBody/CalenderBody';
import CalenderModal from '../CalenderModal/CalenderModal';
import { CalenderWrapper } from './Calender.style';

const Calender = () => {
  const [standardDate, setStandardDate] = useState<Date>(new Date());
  const [memos, setMemos] = useState<MemosType>({});
  const [modal, setModal] = useState<ModalType>({ target: '', open: false });

  return (
    <CalenderWrapper>
      <CalenderHeader
        standardDate={standardDate}
        setStandardDate={setStandardDate}
      />
      <CalenderBody
        standardDate={standardDate}
        memos={memos}
        setMemos={setMemos}
        setModal={setModal}
      />
      {modal.open && <CalenderModal modal={modal} setModal={setModal} />}
    </CalenderWrapper>
  );
};

export default Calender;
