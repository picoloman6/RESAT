import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  width: 50%;
  max-width: 945.8px;
  min-width: 600px;
  margin: 0 auto;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  > div {
    width: 240px;
    height: 100%;
    background: white;
  }
`;
