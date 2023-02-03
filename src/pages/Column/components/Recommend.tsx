const columns: Array<{
  id: number;
  title: string;
  description: string;
}> = [
  {
    id: 1,
    title: 'RECOMMENDED COLUMN',
    description: 'オススメ'
  },
  {
    id: 2,
    title: 'RECOMMENDED DIET',
    description: 'ダイエット'
  },
  {
    id: 3,
    title: 'RECOMMENDED BEAUTY',
    description: '美容'
  },
  {
    id: 4,
    title: 'RECOMMENDED HEALTH',
    description: '健康'
  }
];

function Recommend() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-0 lg:grid-cols-4">
      {columns?.map((column) => (
        <div
          key={column.id}
          className="bg-dark-600 px-2 py-6 flex flex-col justify-center items-center gap-2"
        >
          <p className="text-primary-300 font-normal text-[22px] text-center font-inter">
            {column.title}
          </p>
          <p className="w-14 border border-solid border-1 border-light" />
          <p className="text-light">{column.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Recommend;
