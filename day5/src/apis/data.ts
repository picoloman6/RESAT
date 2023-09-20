import axios from 'axios';

export const getItemsData = async (page: number) => {
  const response = await axios.get<object[]>(
    `http://localhost:3001/items?_page=${page}`
  );
  return response.data;
};
