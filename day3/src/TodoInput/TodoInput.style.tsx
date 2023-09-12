import styled from 'styled-components';

export const TodoInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  border: 1px solid black;
  padding: 10px;
  margin-top: 15px;
  margin-left: 15px;

  input {
    width: 60%;
  }

  button {
    font-weight: 700;
  }
`;
