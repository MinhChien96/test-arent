import axiosClient from 'utils/Axios';
import { Post } from '@type';

const columnApi = {
  getAll(): Promise<Array<Post>> {
    const url = '/posts';
    return axiosClient.get(url);
  }
};

export default columnApi;
