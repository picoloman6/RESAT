import React from 'react';

import {
  MainHeaderWrapper,
  MainHeaderMenu,
  MainHeaderAccount,
  MainHeaderHamburger
} from './MainHeader.style';

interface PropsType {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeader: React.FC<PropsType> = ({ setModal }) => {
  const onClickButton = () => {
    setModal(() => 'sideBar');
    const body = document.body;
    body.style.overflow = 'hidden';
  };

  return (
    <MainHeaderWrapper>
      <span>LOGO</span>
      <MainHeaderMenu>
        <span>미니인턴</span>
        <span>스킬업</span>
        <span>M클래스</span>
        <span>채용관</span>
        <span>해피폴리오</span>
      </MainHeaderMenu>
      <MainHeaderAccount>
        <span>서비스소개</span>
        <span>회원가입</span>
        <span>로그인</span>
        <span>기업회원</span>
      </MainHeaderAccount>
      <MainHeaderHamburger onClick={onClickButton}>
        <img src='hamburger_button.png' alt='버튼' />
      </MainHeaderHamburger>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
