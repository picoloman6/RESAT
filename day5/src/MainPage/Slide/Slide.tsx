import { useEffect, useState } from 'react';
import axios from 'axios';

import { SlideWrapper } from './Slide.style';

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

  return (
    <SlideWrapper $photo={photos[photoIdx]} onClick={onClickButton}>
      <div>
        <button className='previous'>◄</button>
      </div>
      <div>
        <button className='next'>►</button>
      </div>
    </SlideWrapper>
  );
};

export default Slide;
