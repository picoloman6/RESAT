import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const SideBarModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
  height: 100%;
  background: white;
`;

export const SideBarModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 50px;
  padding: 10px;

  > span {
    font-size: 25px;
    font-weight: 700;
  }

  > button {
    font-size: 25px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const SideBarModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  > span {
    margin-bottom: 10px;
    cursor: pointer;
  }

  > span:first-child {
    color: blue;
  }
`;

export const LoginModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 300px;

  background: white;
`;

export const LoginModalInput = styled.div<{ $error?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;

  > span {
    font-size: 12px;
    color: #808080;
  }

  > span:last-child {
    color: ${props => (props.$error ? 'red' : 'white')};
  }
`;

export const LoginModalButton = styled.div`
  height: 25%;
  display: flex;
  align-items: center;

  > button {
    width: 70px;
    height: 35px;

    background: black;
    color: white;
    font-size: 18px;

    border: none;

    cursor: pointer;
  }
`;
