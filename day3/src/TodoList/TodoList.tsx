import React from 'react';
import { ListType, FormType } from '../Types';
import { TodoListWrapper } from './TodoList.style';

interface PropsType {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  contents: ListType;
}

const TodoList: React.FC<PropsType> = ({ form, setForm, contents }) => {
  const { id, text, importance, checked } = contents;

  const onClickCheckbox = () => {
    const obj = form.list.filter(value => value.id === id)[0];
    obj.checked = !obj.checked;
    const list = [...form.list].map(value => (value.id === id ? obj : value));
    const newForm = { ...form, list };
    setForm(newForm);
  };

  return (
    <TodoListWrapper>
      <input type='checkbox' checked={checked} onChange={onClickCheckbox} />
      <span>{text}</span>
      <div>{importance}</div>
    </TodoListWrapper>
  );
};

export default React.memo(TodoList);
