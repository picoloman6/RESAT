import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../modules';
import {
  SlideWrapper,
  ImageWrapper,
  SlideButtonWrapper,
  DotWrapper,
  StyledDot
} from './Slide.style';

const Slide = () => {
  const [photoIdx, setPhotoIdx] = useState<number>(0);
  const photos = useSelector((state: RootState) => state.photoReducer.photos);

  const onClickButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLButtonElement;

    if (element.className === 'previous') {
      if (photoIdx === 0) {
        setPhotoIdx(photos.length - 1);
      } else {
        setPhotoIdx(photoIdx - 1);
      }
    } else if (element.className === 'next') {
      if (photoIdx === photos.length - 1) {
        setPhotoIdx(0);
      } else {
        setPhotoIdx(photoIdx + 1);
      }
    }
  };

  useEffect(() => {
    const inverval = setInterval(() => {
      const nextIdx = photoIdx + 1 === photos.length ? 0 : photoIdx + 1;
      setPhotoIdx(nextIdx);
    }, 2000);

    return () => {
      clearInterval(inverval);
    };
  }, [photoIdx, photos.length]);

  return (
    <SlideWrapper onClick={onClickButton}>
      <SlideButtonWrapper>
        <button className='previous'>◄</button>
      </SlideButtonWrapper>
      {photos && (
        <div className='slide-image'>
          <ImageWrapper $photo={photos[photoIdx]}></ImageWrapper>
          <DotWrapper>
            {photos &&
              photos.map((_, i) => (
                <StyledDot key={i} $checked={i === photoIdx} />
              ))}
          </DotWrapper>
        </div>
      )}
      <SlideButtonWrapper>
        <button className='next'>►</button>
      </SlideButtonWrapper>
    </SlideWrapper>
  );
};

export default Slide;
