import styled from 'styled-components';

export const SlideWrapper = styled.div<{ $photo?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-top: 50px;
  border-bottom: 1px solid rgba(160, 160, 160);
  background-image: url(${props => props.$photo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  > div {
    display: flex;
    align-items: center;
    width: 8%;
    height: 100%;
    cursor: pointer;
  }

  > div:last-child {
    justify-content: flex-end;
  }

  > div > button {
    display: none;
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
  }

  > div:hover {
    > button {
      display: flex;
    }
  }
`;
