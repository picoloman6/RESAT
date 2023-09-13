import { useState } from 'react';
import { FormType, ListType } from '../Types';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import Todofilter from '../TodoFilter/TodoFilter';

const Todo = () => {
  const [form, setForm] = useState<FormType>({
    text: '',
    importance: '낮음',
    list: []
  });
  const [list, setList] = useState<Array<ListType>>([]);
  const [modify, setModify] = useState<number>(0);

  return (
    <div>
      <TodoInput
        form={form}
        setForm={setForm}
        setList={setList}
        modify={modify}
        setModify={setModify}
      />
      <Todofilter form={form} setList={setList} />
      {list &&
        list.map((value, idx) => (
          <TodoList
            key={idx}
            form={form}
            setForm={setForm}
            contents={value}
            setModify={setModify}
          />
        ))}
    </div>
  );
};

export default Todo;
