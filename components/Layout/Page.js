import Head from 'next/head';

export default function Page({ title, header, children, ...props }) {
  return (
    <>
      <Head>
        <title>{header} </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='w-full'>
        <div className='bg-[#ffffff] w-full'>
          <div className='flex justify-between items-center px-3 py-5 h-[68px] max-w-7xl '>
            <div className=' uppercase text-[#a7a7a7] text-sm tracking-wide'>{title}</div>
          </div>
        </div>
        <div className='px-6 py-3 max-w-6xl m-6 '>{children}</div>
      </div>
    </>
  );
}
