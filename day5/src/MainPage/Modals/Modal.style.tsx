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

  > span {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;
