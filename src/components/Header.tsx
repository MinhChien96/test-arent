import React from 'react';
import Logo from 'resources/images/logo.png';
import MenuIcon from 'resources/images/icon_menu.png';
import MemoIcon from 'resources/images/icon_memo.png';
import ChallengeIcon from 'resources/images/icon_challenge.png';
import InforIcon from 'resources/images/icon_info.png';

type Props = {};

const menus: Array<{
  id: number;
  name: string;
  icon: any;
}> = [
  {
    id: 1,
    name: '自分の記録',
    icon: MemoIcon
  },
  {
    id: 2,
    name: 'チャレンジ',
    icon: ChallengeIcon
  },
  {
    id: 3,
    name: 'お知らせ',
    icon: InforIcon
  }
];

// eslint-disable-next-line no-empty-pattern
function Header({}: Props) {
  return (
    <div className="flex justify-center items-center bg-dark-500">
      <div className="container">
        <nav className=" text-light">
          <div className="container flex items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
              <img src={Logo} className="h-full" alt="Logo" />
            </a>
            <div className="px-2 py-2 flex">
              <ul className="flex flex-row justify-between">
                {menus?.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href="#"
                      className="py-2 pl-3 pr-6 flex flex-row items-center"
                    >
                      <img src={menu.icon} alt="" className="w-8" />
                      <span className="pl-2">{menu.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-primary-400 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <img src={MenuIcon} alt="" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
