import ButtonMore from 'components/ButtonMore';

const fakeData = Array.from({ length: 8 }, (_, i) => i);

function Diary() {
  return (
    <div className="mt-14">
      <p className="font-inter font-normal text-[22px]">MY DIARY</p>
      <div className="grid grid-cols-4 gap-3">
        {fakeData?.map(() => (
          <div className="border-2 border-solid border-[#707070] after:block after:pb-[100%] relative">
            <div className="absolute top-0 right-0 bottom-0 left-0 m-4 flex flex-col overflow-hidden text-dark-500">
              <p className="font-inter font-normal text-lg ">
                2021.05.21
                <br /> 23:25
              </p>
              <p className="mt-2 text-xs">
                私の日記の記録が一部表示されます。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <ButtonMore>自分の日記をもっと見る</ButtonMore>
      </div>
    </div>
  );
}

export default Diary;
