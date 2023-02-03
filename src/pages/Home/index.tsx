import { useState, useEffect } from 'react';
import { DateRate, BodyWeightFat, Record as IRecord } from '@type';
import Spinner from 'components/Spinner';
import homeApi from 'services/Home';
import Rate from './components/Rate';
import BodyWeightFatChart from './components/BodyWeightFatChart';
import Navigate from './components/Navigate';
import Record from './components/Record';

function Home() {
  const [loading, setLoading] = useState(true);
  const [dateRate, setDateRate] = useState<DateRate>();
  const [bodyWeightFat, setBodyWeightFat] = useState<Array<BodyWeightFat>>([]);
  const [records, setRecords] = useState<Array<IRecord>>([]);

  const fetchDateRate = async () => {
    try {
      const res = await homeApi.getDateRate();
      setDateRate(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBodyWeightFat = async () => {
    try {
      const res = await homeApi.getBodyWeightFat();
      setBodyWeightFat(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecord = async () => {
    try {
      const res = await homeApi.getRecord();
      setRecords(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Promise.allSettled([
      fetchDateRate(),
      fetchBodyWeightFat(),
      fetchRecord()
    ]).then(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center flex-1">
        <Spinner />
      </div>
    );
  return (
    <div>
      <div className="w-full md:flex">
        <div className="md:w-[40%] w-full">
          <Rate percent={dateRate?.percent || 0} date={dateRate?.date || ''} />
        </div>
        <div className="md:w-[60%] w-full">
          <BodyWeightFatChart data={bodyWeightFat} />
        </div>
      </div>
      <Navigate />
      <Record records={records} />
    </div>
  );
}

export default Home;
