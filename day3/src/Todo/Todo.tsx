import { useState } from 'react';
import { FormType } from '../Types';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import Todofilter from '../TodoFilter/TodoFilter';

const Todo = () => {
  const [form, setForm] = useState<FormType>({
    text: '',
    importance: '낮음',
    list: []
  });
  const [filter, setFilter] = useState<string>('all');

  return (
    <div>
      <TodoInput form={form} setForm={setForm} />
      <Todofilter setFilter={setFilter} />
      {form.list &&
        form.list.map((value, idx) => (
          <TodoList key={idx} form={form} setForm={setForm} contents={value} />
        ))}
    </div>
  );
};

export default Todo;
