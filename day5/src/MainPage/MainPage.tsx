import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

import MainHeader from './MainHeader/MainHeader';
import Slide from './Slide/Slide';
import MiddleBar from './MiddleBar/MiddleBar';
import MainBody from './MainBody/MainBody';
import { MainPageWrapper } from './MainPage.style';

const MainPage = () => {
  const page = useRef<number>(1);
  const [scrollpos, setScrollpos] = useState<number>(0);
  const [data, setData] = useState<object[]>([]);

  const updateScroll = () => {
    setScrollpos(window.scrollY);
  };

  const getData = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:3001/data?_page=${page}`
    );

    try {
      const newData = [...data, ...response.data];
      setData(newData);
    } catch (e) {
      console.log(e);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    getData();
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <MainPageWrapper>
      <MainHeader />
      <Slide />
      <MiddleBar scrollpos={scrollpos} />
      <MainBody data={data} />
    </MainPageWrapper>
  );
};

export default MainPage;
