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

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <SlideWrapper photo={photos[photoIdx]}>
      <div>
        <button>◄</button>
      </div>
      <div>
        <button>►</button>
      </div>
    </SlideWrapper>
  );
};

export default Slide;
