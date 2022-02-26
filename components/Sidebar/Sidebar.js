import Image from 'next/image';
import { useContext, useState } from 'react';
import SubMenu from './Submenu';
import { sidebarItems } from '../../constant/constant';
import { AiOutlineLogout } from 'react-icons/ai';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Context } from '../../context';

const Sidebar = ({ path }) => {
  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;

  const [activeLink, setActiveLink] = useState('');

  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    window.localStorage.removeItem('user');
    const { data } = await axios.get('/api/logout');
    toast(data.message);
    router.push('/login');
  };

  return (
    <>
      <div className={`w-64 h-screen shadow-2xl overflow-y-scroll scrollbar-hide`}>
        <div className=' border-b py-3 mt-1 flex flex-col justify-around  items-center h-36'>
          <Image
            src={'https://res.cloudinary.com/db6kegyyc/image/upload/v1644691054/nqn3iwom04oasukjl0ga.png'}
            width={'180'}
            height={'40px'}
          />
          <p className='text-[#a7a7a7]'> {user?.name} </p>
        </div>

        {sidebarItems.map((item, i) => {
          return <SubMenu item={item} activeLink={activeLink} setActiveLink={setActiveLink} key={i} />;
        })}
        <a
          onClick={logout}
          className={`flex justify-between items-center menuItem  text-sm cursor-pointer border-t border-[#f4f4f4] text-[#3b4450] hover:text-[#3b4450]  font-medium transition duration-150 `}
        >
          <div className='flex items-center space-x-4 p-2 tracking-wider text-red-700'>
            <span>
              <AiOutlineLogout size={17} />
            </span>
            <span> Logout </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
