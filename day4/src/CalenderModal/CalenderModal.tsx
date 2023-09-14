import {
  CalenderModalWrapper,
  CalenderModalContent
} from './CalenderModal.style';

const CalenderModal = () => {
  return (
    <CalenderModalWrapper>
      <CalenderModalContent>
        <div>
          <span>날짜 적는 곳</span>
          <button>제출</button>
        </div>
        <textarea placeholder='메모를 입력하세요.' />
      </CalenderModalContent>
    </CalenderModalWrapper>
  );
};

export default CalenderModal;
