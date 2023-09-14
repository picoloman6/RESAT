import CalenderHeader from '../CalenderHeader/CalenderHeader';
import CalenderBody from '../CalenderBody/CalenderBody';
import { CalenderWrapper } from './Calender.style';

const Calender = () => {
  return (
    <CalenderWrapper>
      <CalenderHeader />
      <CalenderBody />
    </CalenderWrapper>
  );
};

export default Calender;
