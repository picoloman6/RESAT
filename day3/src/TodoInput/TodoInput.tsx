import { TodoInputWrapper } from './TodoInput.style';
import { FormType } from '../Types';

interface PropsType {
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
}

const TodoInput: React.FC<PropsType> = ({ form, setForm }) => {
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
    const obj = { id: list.length + 1, text, importance, checked: false };
    const newList = [...list, obj];
    setForm({ text: '', importance: 'low', list: newList });
  };

  return (
    <TodoInputWrapper>
      <input onChange={onChangeInput} value={form.text} />
      <select onChange={onChangeSelect}>
        <option key='low' value='low'>
          낮음
        </option>
        <option key='middle' value='middle'>
          보통
        </option>
        <option key='high' value='high'>
          높음
        </option>
        <option key='higher' value='higher'>
          아주 높음
        </option>
      </select>
      <button onClick={onClickButton}>추가</button>
    </TodoInputWrapper>
  );
};

export default TodoInput;
