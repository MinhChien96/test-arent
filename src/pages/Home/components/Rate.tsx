import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import background from 'resources/images/d01.jpg';

type Props = {
  percent: number;
  date: string;
};

export default function Rate({ percent, date }: Props) {
  return (
    <div
      className="w-full pt-[60%] bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `linear-gradient(225deg, rgba(255, 204, 33, 0.15) 0%, rgba(255, 150, 60, 0.15) 100%),
        url(${background})`
      }}
    >
      <div className="absolute w-[180px] h-[180px] text-light top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <CircularProgressbarWithChildren
          value={percent}
          strokeWidth={1.5}
          styles={buildStyles({
            trailColor: 'transparent',
            pathColor: '#fff'
          })}
        >
          <p
            style={{
              textShadow: '0px 0px 6px #FCA500'
            }}
          >
            <span className="font-inter text-lg font-normal">{date}</span>
            <span className="pl-2 font-inter text-2xl font-normal">
              {percent}%
            </span>
          </p>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}
