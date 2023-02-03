import BodyLineChart from 'components/BodyLineChart';
import { BodyWeightFat } from '@type';

type Props = {
  data: Array<BodyWeightFat>;
};

function BodyWeightFatChart({ data }: Props) {
  return (
    <div className="w-full h-full bg-dark-600 flex">
      <BodyLineChart data={data} />
    </div>
  );
}

export default BodyWeightFatChart;
