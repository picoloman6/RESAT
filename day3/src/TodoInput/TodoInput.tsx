import { TodoInputWrapper } from './TodoInput.style';
import { FormType, ListType } from '../Types';

interface PropsType {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  setList: React.Dispatch<React.SetStateAction<Array<ListType> | []>>;
  modify: number;
  setModify: React.Dispatch<React.SetStateAction<number>>;
}

const TodoInput: React.FC<PropsType> = ({
  form,
  setForm,
  setList,
  modify,
  setModify
}) => {
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, importance: e.target.value });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, text: e.target.value });
  };

  const onClickButton = () => {
    const { text, importance, list } = form;

    if (text === '') {
      alert('글자를 입력하세요!');
      return;
    }

    if (modify === 0) {
      const obj = { id: list.length + 1, text, importance, checked: false };
      const newList = [...list, obj];
      setForm({ text: '', importance: '낮음', list: newList });
      setList(newList);
    } else {
      const target = form.list.filter(value => value.id === modify)[0];
      target.text = text;
      target.importance = importance;
      const newList = form.list.map(value =>
        value.id === target.id ? target : value
      );
      setForm({ text: '', importance: '낮음', list: newList });
      setList(newList);
      setModify(0);
    }
  };

  return (
    <TodoInputWrapper>
      <input onChange={onChangeInput} value={form.text} />
      <select onChange={onChangeSelect} value={form.importance}>
        <option key='low' value='낮음'>
          낮음
        </option>
        <option key='middle' value='보통'>
          보통
        </option>
        <option key='high' value='높음'>
          높음
        </option>
        <option key='higher' value='아주 높음'>
          아주 높음
        </option>
      </select>
      <button onClick={onClickButton}>{modify === 0 ? '추가' : '수정'}</button>
    </TodoInputWrapper>
  );
};

export default TodoInput;
