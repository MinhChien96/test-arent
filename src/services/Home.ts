import axiosClient from 'utils/Axios';
import { DateRate, BodyWeightFat, Record } from '@type';

const homeApi = {
  getDateRate(): Promise<DateRate> {
    const url = '/rate';
    return axiosClient.get(url);
  },
  getBodyWeightFat(): Promise<Array<BodyWeightFat>> {
    const url = '/body-weight-fat';
    return axiosClient.get(url);
  },
  getRecord(): Promise<Array<Record>> {
    const url = '/record';
    return axiosClient.get(url);
  }
};

export default homeApi;
