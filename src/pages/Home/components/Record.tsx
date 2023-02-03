import { Record as IRecord } from '@type';

type Props = {
  records: Array<IRecord>;
};

function Record({ records }: Props) {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {records?.map((record) => (
            <div
              key={record.id}
              style={{ backgroundImage: `url(${record.image})` }}
              className="bg-no-repeat bg-cover relative w-full pt-[100%]"
            >
              <div className="absolute bottom-0 left-0 bg-primary-300 text-light font-inter">
                <span className="p-2 md:text-lg font-inter">{record.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 mb-16 flex justify-center w-full">
          <button
            className="text-lg text-light py-4 px-14 bg-primary-300/400 rounded-md"
            type="button"
          >
            記録をもっと見る
          </button>
        </div>
      </div>
    </div>
  );
}

export default Record;
