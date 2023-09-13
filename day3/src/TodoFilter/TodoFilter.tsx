import React from 'react';
import { FormType, ListType } from '../Types';
import { TodoFilterWrapper } from './TodoFilter.style';

interface PropsType {
  form: FormType;
  setList: React.Dispatch<React.SetStateAction<Array<ListType> | []>>;
}

const Todofilter: React.FC<PropsType> = ({ form, setList }) => {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLButtonElement;
    if (element.className === 'all') {
      setList(form.list);
    } else if (element.className === 'done') {
      const newList = form.list.filter(value => value.checked === true);
      setList(newList);
    } else if (element.className === 'progress') {
      const newList = form.list.filter(value => value.checked === false);
      setList(newList);
    }
  };

  return (
    <TodoFilterWrapper onClick={onClick}>
      <button className='all'>전체</button>
      <button className='done'>완료</button>
      <button className='progress'>미완료</button>
    </TodoFilterWrapper>
  );
};

export default Todofilter;
