import {
  MainHeaderWrapper,
  MainHeaderMenu,
  MainHeaderAccount,
  MainHeaderHamburger
} from './MainHeader.style';

const MainHeader = () => {
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
      <MainHeaderHamburger>
        <span></span>
        <span></span>
        <span></span>
      </MainHeaderHamburger>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
