import React from 'react';

import { ItemComponentWrapper } from './MainBody.style';

interface ItemProps {
  item: {
    name?: string;
    body?: string;
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
          <span>{item.body}</span>
        </div>
      </div>
    </ItemComponentWrapper>
  );
};

export default React.memo(ItemComponent);
