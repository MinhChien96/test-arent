import BodyLineChart from 'components/BodyLineChart';

const fakeData = [
  {
    month: '6月',
    weight: 100,
    fat: 100
  },
  {
    month: '7月',
    weight: 96,
    fat: 90
  },
  {
    month: '8月',
    weight: 80,
    fat: 85
  },
  {
    month: '9月',
    weight: 70,
    fat: 75
  },
  {
    month: '10月',
    weight: 60,
    fat: 65
  },
  {
    month: '11月',
    weight: 50,
    fat: 45
  },
  {
    month: '12月',
    weight: 45,
    fat: 55
  },
  {
    month: '1月',
    weight: 35,
    fat: 40
  },
  {
    month: '2月',
    weight: 20,
    fat: 30
  },
  {
    month: '3月',
    weight: 30,
    fat: 20
  },
  {
    month: '4月',
    weight: 40,
    fat: 10
  },
  {
    month: '5月',
    weight: 35,
    fat: 0
  }
];

function Record() {
  return (
    <div className="bg-dark-500 mt-14 p-4">
      <div className="font-inter text-light font-normal flex flex-row items-center">
        <span className="text-sm">
          BODY <br />
          RECORD
        </span>
        <span className="text-[22px] pl-4">2021.05.21</span>
      </div>
      <BodyLineChart data={fakeData} aspect={3.5} />
      <div className="mt-1 flex gap-x-4">
        <div className="bg-light text-primary-300 w-14 text-center rounded-full cursor-pointer hover:opacity-80">
          日
        </div>
        <div className="bg-light text-primary-300 w-14 text-center rounded-full cursor-pointer hover:opacity-80">
          週
        </div>
        <div className="bg-light text-primary-300 w-14 text-center rounded-full cursor-pointer hover:opacity-80">
          月
        </div>
        <div className="bg-primary-300 text-light w-14 text-center rounded-full cursor-pointer hover:opacity-80">
          年
        </div>
      </div>
    </div>
  );
}

export default Record;
