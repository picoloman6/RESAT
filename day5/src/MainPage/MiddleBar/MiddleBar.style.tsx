import styled from 'styled-components';

export const MiddleBarWrapper = styled.div<{ $scrollpos: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 51px;
  width: 100%;
  max-width: 945.8px;
  min-width: 600px;
  height: 60px;
  box-shadow: ${props =>
    props.$scrollpos > 290 ? '0 8px 8px -6px gray' : 'none'};
  background: white;
  > div:first-child {
    display: flex;
    width: 250px;

    > div:nth-child(2) {
      margin-left: 30px;
    }
  }

  > div:last-child {
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const MiddleBarSelectBox = styled.div<{
  $modal?: string;
  type: string;
  width: number;
}>`
  width: ${props => props.width}px;
  margin-left: 10px;
  font-size: 12px;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    width: ${props => props.width}px;
    background: white;
    border: 1px solid #a0a0a0;
    border-radius: 3px;
    padding: 3px;
    cursor: pointer;
  }

  > ul {
    display: ${props => (props.$modal === props.type ? 'block' : 'none')};
    position: absolute;
    width: ${props => props.width}px;
    background: white;
    border: 1px solid #a0a0a0;
    border-radius: 3px;
    padding: 3px;
    margin-top: 8px;
  }

  li {
    list-style-type: none;
  }
`;
