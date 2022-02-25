import { useRouter } from 'next/router';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  const router = useRouter();
  console.log();

  return (
    <>
      <div className='h-screen overflow-hidden '>
        <main className='flex'>
          {router?.pathname === '/login' ? '' : <Sidebar path={router.route} />}
          <div className=' bg-[#fbfbfd]  flex-grow  h-screen overflow-y-scroll '>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
