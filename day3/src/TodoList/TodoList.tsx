import React from 'react';
import { ListType } from '../Types';
import { TodoListWrapper } from './TodoList.style';

interface PropsType {
  contents: ListType;
}

const TodoList: React.FC<PropsType> = ({ contents }) => {
  const { id, text, importance, checked } = contents;
  return (
    <TodoListWrapper>
      <input type='checkbox' checked={checked} />
      <span>{text}</span>
      <div>{importance}</div>
    </TodoListWrapper>
  );
};

export default React.memo(TodoList);
