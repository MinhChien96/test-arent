import IconKnife from 'resources/images/icon_knife.png';
import IconCup from 'resources/images/icon_cup.png';
import styled from 'styled-components';

const StyledHexagon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 120px;
  height: 135px;
  cursor: pointer;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(35.89deg, #ffcc21 8.26%, #ff963c 91.18%);
`;

const ListNavigate: Array<{ id: number; name: string; icon: any }> = [
  {
    id: 1,
    name: 'Morning',
    icon: IconKnife
  },
  {
    id: 2,
    name: 'Lunch',
    icon: IconKnife
  },
  {
    id: 3,
    name: 'Dinner',
    icon: IconKnife
  },
  {
    id: 4,
    name: 'Snack',
    icon: IconCup
  }
];

function Navigate() {
  return (
    <div className="my-6 flex justify-center">
      <div className="container">
        <div className="flex justify-center md:gap-20 gap-4">
          {ListNavigate?.map((navigate) => (
            <StyledHexagon key={navigate.id}>
              <img src={navigate.icon} alt="" className="w-10 md:w-auto" />
              <p className="text-light font-inter text-sm md:text-xl font-normal">
                {navigate.name}
              </p>
            </StyledHexagon>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigate;
