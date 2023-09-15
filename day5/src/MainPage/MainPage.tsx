import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import MainHeader from './MainHeader/MainHeader';
import Slide from './Slide/Slide';
import MiddleBar from './MiddleBar/MiddleBar';
import MainBody from './MainBody/MainBody';
import { MainPageWrapper } from './MainPage.style';

const MainPage = () => {
  const [page, setPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [scrollpos, setScrollpos] = useState<number>(0);
  const [data, setData] = useState<object[]>([]);

  const updateScroll = () => {
    setScrollpos(window.scrollY);
  };

  const handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    if (window.innerHeight + scrollTop >= offsetHeight) {
      setPage(page + 1);
      setIsFetching(true);
    }
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
  }, [data, page]);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('scroll', handleScroll);
    getData();
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFetching) {
      getData();
      setIsFetching(false);
    }
  }, [isFetching]);

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
