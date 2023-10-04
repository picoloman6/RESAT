import styled from 'styled-components';

export const MainBodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  width: 95%;
`;

export const ItemComponentWrapper = styled.div`
  width: 160px;
  height: 200px;
  margin-top: 30px;
  border: 1px solid gray;
  box-shadow: 4px 4px #d3d3d3;

  > div:first-child {
    width: 100%;
    height: 60%;
    background: #ba55d3;
  }

  > div:last-child {
    width: 100%;
    height: 40%;

    > div:first-child {
      display: flex;
      height: 20px;
      font-size: 11px;
      margin: 10px 0 0 10px;
      overflow: hidden;

      > span:first-child {
        width: 15%;
        height: 20px;
        background: black;
        border-radius: 5px;
        color: white;
        font-weight: 700;
        text-align: center;
        line-height: 20px;
      }

      > span:last-child {
        width: 80%;
        margin-left: 10px;
        color: gray;
      }
    }

    > div:last-child {
      height: 43px;
      font-size: 13px;
      margin: 5px 10px 0px 10px;
      overflow: hidden;
    }
  }
`;
