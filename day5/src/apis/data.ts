import axios from 'axios';

export const getItemsData = async (page: number) => {
  const response = await axios.get<object[]>(
    `https://jsonplaceholder.typicode.com/posts/${page}/comments`
  );
  return response.data;
};
