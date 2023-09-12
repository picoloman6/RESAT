import React from 'react';
import { ListType } from '../Types';

interface PropsType {
  contents: ListType;
}

const TodoList: React.FC<PropsType> = ({ contents }) => {
  const { id, text, importance, checked } = contents;
  return (
    <div>
      <input type='checkbox' checked={checked} />
      <span>{text}</span>
      <span>{importance}</span>
    </div>
  );
};

export default React.memo(TodoList);
