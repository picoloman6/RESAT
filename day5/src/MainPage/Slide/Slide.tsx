import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  SlideWrapper,
  ImageWrapper,
  DotWrapper,
  StyledDot
} from './Slide.style';

const Slide = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoIdx, setPhotoIdx] = useState<number>(0);

  const getPhotos = async () => {
    const response = await axios.get(`http://localhost:3001/photos`);
    setPhotos(response.data);
  };

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
    getPhotos();
  }, []);

  useEffect(() => {
    const inverval = setInterval(() => {
      const nextIdx = photoIdx + 1 === photos.length ? 0 : photoIdx + 1;
      setPhotoIdx(nextIdx);
    }, 3000);

    return () => {
      clearInterval(inverval);
    };
  }, [photoIdx, photos.length]);

  return (
    <SlideWrapper onClick={onClickButton}>
      <div className='slide-button'>
        <button className='previous'>◄</button>
      </div>
      <div className='slide-image'>
        <ImageWrapper $photo={photos[photoIdx]}></ImageWrapper>
        <DotWrapper>
          {photos &&
            photos.map((_, i) => <StyledDot $checked={i === photoIdx} />)}
        </DotWrapper>
      </div>
      <div className='slide-button'>
        <button className='next'>►</button>
      </div>
    </SlideWrapper>
  );
};

export default Slide;
