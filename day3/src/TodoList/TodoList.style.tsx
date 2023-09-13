import styled from 'styled-components';

export const TodoListWrapper = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 15px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;

  input {
    width: 10%;
    zoom: 1.5;
  }

  span {
    width: 65%;
  }

  div {
    border: 1px solid black;
    padding: 5px;
  }
`;
