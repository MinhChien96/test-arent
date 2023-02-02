import React from 'react';

const menus: Array<{
  id: number;
  name: string;
}> = [
  {
    id: 1,
    name: '会員登録'
  },
  {
    id: 2,
    name: '運営会社'
  },
  {
    id: 3,
    name: '利用規約'
  },
  {
    id: 4,
    name: '個人情報の取扱について'
  },
  {
    id: 5,
    name: '特定商取引法に基づく表記'
  },
  {
    id: 6,
    name: 'お問い合わせ'
  }
];

function Footer() {
  return (
    <div className="flex justify-center items-center bg-dark-500 text-light">
      <div className="container">
        <div className="flex flex-row items-center py-14">
          {menus.map((menu) => (
            <div key={menu.id} className="pr-11 text-xs">
              {menu.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
