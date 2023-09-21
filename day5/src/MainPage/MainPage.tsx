import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import MainHeader from './MainHeader/MainHeader';
import Slide from './Slide/Slide';
import MiddleBar from './MiddleBar/MiddleBar';
import MainBody from './MainBody/MainBody';
import { getItemsThunk } from '../modules/items';
import { getPhotos } from '../modules/photos';
import { MainPageWrapper } from './MainPage.style';
import { ModalWrapper } from './MainPage.style';

const MainPage = () => {
  const [page, setPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [scrollpos, setScrollpos] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const updateScroll = () => {
    setScrollpos(window.scrollY);
  };

  const handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    if (window.innerHeight + scrollTop >= offsetHeight) {
      setPage(prev => prev + 1);
      setIsFetching(() => true);
    }
  };

  const getItemsData = useCallback(
    (page: number) => {
      dispatch(getItemsThunk(page));
    },
    [dispatch]
  );

  const getPhotosData = useCallback(async () => {
    const response = await axios.get(`http://localhost:3001/photos`);
    try {
      dispatch(getPhotos(response.data));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  const onClickModalButton = () => {
    setModal(() => false);
    const body = document.body;
    body.style.overflow = 'visible';
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('scroll', handleScroll);
    getItemsData(page);
    getPhotosData();
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFetching) {
      getItemsData(page);
      setIsFetching(() => false);
    }
  }, [isFetching, getItemsData, page]);

  return (
    <MainPageWrapper>
      {modal && (
        <ModalWrapper>
          <div>
            <div>
              <span>LOGO</span>
              <button onClick={onClickModalButton}>x</button>
            </div>
            <div>
              <span>미니인턴</span>
              <span>스킬업</span>
              <span>M클래스</span>
              <span>채용관</span>
              <span>해피폴리오</span>
            </div>
          </div>
        </ModalWrapper>
      )}
      <MainHeader setModal={setModal} />
      <Slide />
      <MiddleBar scrollpos={scrollpos} />
      <MainBody />
    </MainPageWrapper>
  );
};

export default MainPage;
