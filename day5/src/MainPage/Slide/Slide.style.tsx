import styled from 'styled-components';

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-top: 50px;
  border-bottom: 1px solid rgba(160, 160, 160);
  background: none;

  > .slide-button {
    display: flex;
    align-items: center;
    width: 8%;
    height: 100%;
  }

  > .slide-button:last-child {
    justify-content: flex-end;
  }

  > .slide-button > button {
    display: none;
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
  }

  > .slide-button:hover {
    > button {
      display: flex;
    }
  }

  > .slide-image {
    width: 84%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div<{ $photo?: string }>`
  width: 100%;
  height: 96%;
  background-image: url(${props => props.$photo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 4%;
`;

export const StyledDot = styled.div<{ $checked?: boolean }>`
  width: 5px;
  height: 5px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 5px;
  background: ${props => (props.$checked ? 'black' : 'white')};
`;
