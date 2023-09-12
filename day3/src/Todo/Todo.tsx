import { useState } from 'react';
import { FormType } from '../Types';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

const Todo = () => {
  const [form, setForm] = useState<FormType>({
    text: '',
    importance: 'low',
    list: []
  });

  return (
    <div>
      <TodoInput form={form} setForm={setForm} />
      {form.list &&
        form.list.map((value, idx) => <TodoList key={idx} contents={value} />)}
    </div>
  );
};

export default Todo;
