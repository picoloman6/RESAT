import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import MainHeader from './MainHeader/MainHeader';
import Slide from './Slide/Slide';
import MiddleBar from './MiddleBar/MiddleBar';
import MainBody from './MainBody/MainBody';
import Modal from './Modals/Modal';
import { getItemsThunk } from '../modules/items';
import { getPhotos } from '../modules/photos';
import { MainPageWrapper } from './MainPage.style';

interface PhotoType {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const MainPage = () => {
  const [page, setPage] = useState<number>(2);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [scrollpos, setScrollpos] = useState<number>(0);
  const [modal, setModal] = useState<string>('none');
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
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=1&limit=5%E2%80%8B`
    );
    const photos = response.data
      .map((photo: PhotoType) => photo['download_url'])
      .slice(0, 6);
    try {
      dispatch(getPhotos(photos));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('scroll', handleScroll);
    getItemsData(page - 1);
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
      {modal !== 'none' && <Modal modal={modal} setModal={setModal} />}
      <MainHeader setModal={setModal} />
      <Slide />
      <MiddleBar scrollpos={scrollpos} />
      <MainBody />
    </MainPageWrapper>
  );
};

export default MainPage;
