import { MainBodyWrapper, ItemComponentWrapper } from './MainBody.style';

const ItemComponent = () => {
  return (
    <ItemComponentWrapper>
      <div></div>
      <div>
        <div>
          <span>D-1</span>
          <span>카테고리</span>
        </div>
        <div>내용이 잔뜩 들어 있습니다.</div>
      </div>
    </ItemComponentWrapper>
  );
};

const MainBody = () => {
  return (
    <MainBodyWrapper>
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
    </MainBodyWrapper>
  );
};

export default MainBody;
