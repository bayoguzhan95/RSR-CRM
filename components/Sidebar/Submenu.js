import Link from 'next/link';
import React, { useState } from 'react';
import * as RiIcons from 'react-icons/ri';
import { FaAffiliatetheme } from 'react-icons/fa';

const SubMenu = ({ item, setActiveLink, activeLink }) => {
  const [subnav, setSubnav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClick = () => {
    setSubnav(!subnav);
    setActiveMenu(item.title);
  };

  return (
    <>
      <a
        onClick={handleClick}
        className={`flex justify-between items-center menuItem  text-sm cursor-pointer border-t border-[#f4f4f4] text-[#3b4450] hover:text-[#3b4450]  font-medium transition duration-150 `}
      >
        <div className="flex items-center space-x-4 p-2 tracking-wider">
          <span>{item.icon}</span>
          <span> {item.title} </span>
        </div>
        <div className="">
          {subnav && <RiIcons.RiArrowUpSFill />}
          {!subnav && <RiIcons.RiArrowDownSFill />}
        </div>
      </a>

      {activeMenu === item.title &&
        subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link href={item.to} key={index}>
              <a
                onClick={() => setActiveLink(item.title)}
                className={`flex justify-start items-center  text-[#a7a7a7] menuItem  py-1 px-4 hover:!text-[#3b4450] text-sm font-medium 
                ${
                  activeLink === item.title ? 'text-[white] bg-[#bb2626] hover:!bg-[#bb2626] rounded-sm hover:!text-white' : ''
                } `}
              >
                <span>{item.title}</span>
              </a>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
// setActiveLink(item.title);
