import Image from 'next/image';
import { useState } from 'react';

import { useRouter } from 'next/router'

import SubMenu from './Submenu';
import { sidebarItems } from '../../constant/constant';

const Sidebar = ({path}) => {
  const [activeLink, setActiveLink] = useState('');



  return (
    <>
      <div className={`w-64 h-screen shadow-2xl overflow-y-scroll scrollbar-hide`}>
        <div className=" border-b py-3 mt-1 flex flex-col justify-around  items-center h-36">
          <Image
            src={'https://res.cloudinary.com/db6kegyyc/image/upload/v1644691054/nqn3iwom04oasukjl0ga.png'}
            width={'180'}
            height={'40px'}
          />
          <p className="text-[#a7a7a7]"> Oğuzhan </p>
        </div>

        {sidebarItems.map((item, i) => {
          return <SubMenu item={item} activeLink={activeLink} setActiveLink={setActiveLink} key={i} />;
        })}
      </div>
    </>
  );
};

export default Sidebar;
