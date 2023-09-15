import styled from 'styled-components';

export const MainHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: inherit;
  min-width: 780px;

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
`;
