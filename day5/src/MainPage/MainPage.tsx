import { useState, useEffect } from 'react';

import MainHeader from './MainHeader/MainHeader';
import Slide from './Slide/Slide';
import MiddleBar from './MiddleBar/MiddleBar';
import MainBody from './MainBody/MainBody';
import { MainPageWrapper } from './MainPage.style';

const MainPage = () => {
  const [scrollpos, setScrollpos] = useState<number>(0);

  const updateScroll = () => {
    setScrollpos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <MainPageWrapper>
      <MainHeader />
      <Slide />
      <MiddleBar scrollpos={scrollpos} />
      <MainBody />
    </MainPageWrapper>
  );
};

export default MainPage;
