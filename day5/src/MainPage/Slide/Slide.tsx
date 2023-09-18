import { useEffect, useState } from 'react';
import axios from 'axios';

import { SlideWrapper } from './Slide.style';

const Slide = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const getPhotos = async () => {
    const response = await axios.get(`http://localhost:3001/photos`);
    setPhotos(response.data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <SlideWrapper>
      {photos &&
        photos.map((photo, i) => <img src={photo} key={i} alt='사진' />)}
    </SlideWrapper>
  );
};

export default Slide;
