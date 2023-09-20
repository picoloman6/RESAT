import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../modules';
import { MainBodyWrapper, ItemComponentWrapper } from './MainBody.style';

interface ItemProps {
  item: {
    name?: string;
    text?: string;
  };
}

const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  return (
    <ItemComponentWrapper>
      <div></div>
      <div>
        <div>
          <span>D-1</span>
          <span>{item.name}</span>
        </div>
        <div>
          <span>{item.text}</span>
        </div>
      </div>
    </ItemComponentWrapper>
  );
};

const MainBody = () => {
  const items = useSelector((state: RootState) => state.itemReducer.items);

  return (
    <MainBodyWrapper>
      {items.length !== 0 &&
        items.map((item, i) => <ItemComponent key={i} item={item} />)}
    </MainBodyWrapper>
  );
};

export default MainBody;
