import { TodoInputWrapper } from './TodoInput.style';

const TodoInput = () => {
  return (
    <TodoInputWrapper>
      <input />
      <select>
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
      <button>추가</button>
    </TodoInputWrapper>
  );
};

export default TodoInput;
