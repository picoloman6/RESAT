import MainHeader from './MainHeader/MainHeader';
import Slide from './Slide/Slide';
import MiddleBar from './MiddleBar/MiddleBar';
import MainBody from './MainBody/MainBody';
import { MainPageWrapper } from './MainPage.style';

const MainPage = () => {
  return (
    <MainPageWrapper>
      <MainHeader />
      <Slide />
      <MiddleBar />
      <MainBody />
    </MainPageWrapper>
  );
};

export default MainPage;
