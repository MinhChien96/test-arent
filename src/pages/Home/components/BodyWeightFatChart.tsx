import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { BodyWeightFat } from '@type';

type Props = {
  data: Array<BodyWeightFat>;
};

function BodyWeightFatChart({ data }: Props) {
  return (
    <div className="w-full h-full bg-dark-600 flex">
      <ResponsiveContainer width="100%" height="100%" aspect={2.5}>
        <LineChart
          data={data}
          margin={{
            top: 12,
            right: 70,
            left: 35,
            bottom: 10
          }}
        >
          <CartesianGrid stroke="#777777" horizontal={false} />
          <YAxis domain={['dataMin - 15', 'dataMax + 15']} hide />
          <XAxis
            dataKey="month"
            axisLine={false}
            tick={{ fill: '#fff' }}
            style={{
              fontSize: '10px',
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300
            }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="fat"
            stroke="#FFCC21"
            strokeWidth={3}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#8FE9D0"
            strokeWidth={3}
            dot={{ strokeWidth: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BodyWeightFatChart;
