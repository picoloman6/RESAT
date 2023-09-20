import styled from 'styled-components';

export const MainHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;

  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e9e9e9;
  background: white;

  > :first-child {
    width: 10%;
    margin-left: 15px;
    font-size: 25px;
    font-weight: 700;
  }

  > :last-child {
    margin-right: 15px;
  }
`;

export const MainHeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 13px;

  @media all and (max-width: 1410px) {
    display: none;
  }
`;

export const MainHeaderAccount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  font-size: 13px;

  > span {
    color: blue;
  }

  > span:first-child {
    color: black;
  }

  @media all and (max-width: 1410px) {
    display: none;
  }
`;

export const MainHeaderHamburger = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 1410px) {
    display: none;
  }
`;
