import React from 'react';
import { TodoFilterWrapper } from './TodoFilter.style';

interface PropsType {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Todofilter: React.FC<PropsType> = ({ setFilter }) => {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLButtonElement;
    if (element.className === 'all') {
      setFilter('all');
    } else if (element.className === 'done') {
      setFilter('done');
    } else if (element.className === 'progress') {
      setFilter('progress');
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
