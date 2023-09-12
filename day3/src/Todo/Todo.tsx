import { useState } from 'react';
import { FormType } from '../Types';
import TodoInput from '../TodoInput/TodoInput';

const Todo = () => {
  const [form, setForm] = useState<FormType>({
    text: '',
    importance: 'low',
    list: []
  });

  return (
    <div>
      <TodoInput form={form} setForm={setForm} />
    </div>
  );
};

export default Todo;
