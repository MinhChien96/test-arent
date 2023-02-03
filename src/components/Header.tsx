import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'configs';
import Logo from 'resources/images/logo.png';
import MenuIcon from 'resources/images/icon_menu.png';
import MemoIcon from 'resources/images/icon_memo.png';
import ChallengeIcon from 'resources/images/icon_challenge.png';
import InforIcon from 'resources/images/icon_info.png';
import CloseIcon from 'resources/images/icon_close.png';

const menus: Array<{
  id: number;
  name: string;
  icon: any;
  to: string;
}> = [
  {
    id: 1,
    name: '自分の記録',
    icon: MemoIcon,
    to: PATHS.MY_RECORD
  },
  {
    id: 2,
    name: 'チャレンジ',
    icon: ChallengeIcon,
    to: PATHS.HOME
  },
  {
    id: 3,
    name: 'お知らせ',
    icon: InforIcon,
    to: PATHS.COLUMN
  }
];

const subMenus: Array<{
  id: number;
  name: string;
}> = [
  {
    id: 1,
    name: '自分の記録'
  },
  {
    id: 2,
    name: '体重グラフ'
  },
  {
    id: 3,
    name: '目標'
  },
  {
    id: 4,
    name: '選択中のコース '
  },
  {
    id: 5,
    name: 'コラム一覧'
  },
  {
    id: 6,
    name: '設定 '
  }
];

function Header() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleToggleSubMenu = () => {
    setShowSubMenu((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center bg-dark-500">
      <div className="container">
        <nav className="text-light">
          <div className="container flex items-center justify-between mx-auto">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-full" alt="Logo" />
            </Link>
            <div className="px-2 py-2 flex">
              <ul className="flex-row justify-between hidden md:flex">
                {menus?.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={menu.to}
                      className="py-2 pl-3 pr-6 flex flex-row items-center"
                    >
                      <img src={menu.icon} alt="" className="w-8" />
                      <span className="pl-2">{menu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className="relative"
                onMouseLeave={() => setShowSubMenu(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center p-2 ml-3 text-sm text-primary-400 rounded-lg hover:bg-gray-100 outline-none"
                  onClick={handleToggleSubMenu}
                >
                  <img src={showSubMenu ? CloseIcon : MenuIcon} alt="" />
                </button>
                {showSubMenu && (
                  <div className="bg-gray-400 absolute w-[280px] flex flex-col z-50 right-0">
                    {subMenus?.map((menu) => (
                      <div
                        key={menu.id}
                        className="px-8 py-5 text-lg border-b border-zinc-400 cursor-pointer hover:opacity-70"
                      >
                        {menu.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
