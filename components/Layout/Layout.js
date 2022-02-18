import { useRouter } from 'next/router';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className="h-screen overflow-hidden ">
        <main className="flex">
          <Sidebar path={router.route} />
          <div className=" bg-[#fbfbfd]  flex-grow  h-screen overflow-y-scroll scrollbar-hide">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
