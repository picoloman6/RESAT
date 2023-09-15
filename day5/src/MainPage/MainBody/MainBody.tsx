import React, { useEffect } from 'react';

import { MainBodyWrapper, ItemComponentWrapper } from './MainBody.style';

interface ItemProps {
  item: {
    name?: string;
    text?: string;
  };
}

interface MainPropsType {
  data: object[];
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

const MainBody: React.FC<MainPropsType> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MainBodyWrapper>
      {data.length !== 0 &&
        data.map((item, i) => <ItemComponent key={i} item={item} />)}
    </MainBodyWrapper>
  );
};

export default MainBody;
