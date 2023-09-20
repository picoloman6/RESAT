import { useSelector } from 'react-redux';

import ItemComponent from './ItemComponent';
import { RootState } from '../../modules';
import { MainBodyWrapper } from './MainBody.style';

const MainBody = () => {
  const items = useSelector((state: RootState) => state.itemReducer.items);

  return (
    <MainBodyWrapper>
      {items &&
        items.length !== 0 &&
        items.map((item, i) => <ItemComponent key={i} item={item} />)}
    </MainBodyWrapper>
  );
};

export default MainBody;
