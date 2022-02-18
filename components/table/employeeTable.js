import Link from 'next/link';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

const EmployeeTable = ({ userData, i }) => {
  
  const remove = (userData) => {
    confirmAlert({
      title: 'Silme Onayı', // Title dialog
      message: `${userData?.name} adlı kişiyi silmek istediğinize emin misiniz ?`, // Message dialog
      childrenElement: () => (
        <div style={{ margin: '18px 0' }}>{/* <Avatar src={profilePicturePath} name={visibleName} /> */}</div>
      ), // Custom UI or Component
      buttons: [
        { label: 'Vazgeç', onClick: () => {}, className: 'button size-medium button-face-ghost' },
        {
          label: 'Evet, Sil',
          onClick: () => {
            removeUser(userData.id);
          },
          style: { color: 'red' },
          className: 'button size-medium button-face-default',
        },
      ],
    });
  };

  const removeUser = (id) => {
    toast.success(` ${id} Kişi silindi`);
  };

  return (
    <tr key={i}>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <img
              className='h-10 w-10 rounded-full'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
              alt=''
            />
          </div>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>
              {userData.name} {'  '} {userData.surname}
            </div>
            <div className='text-sm text-gray-500'>{userData.email}</div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'> {userData.department} </div>
        <div className='text-sm text-gray-500'>Optimization</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          {userData.role}
        </span>
      </td>

      <td className='px-6 py-4 whitespace-nowrap  text-sm font-medium text-center'>
        <Link href={`/employees/` + userData.id}>
          <a className='text-indigo-600 mr-4 hover:text-indigo-900 hover:underline'>Edit</a>
        </Link>

        <span> I</span>
        <a
          onClick={(e) => {
            e.stopPropagation();
            remove(userData);
          }}
          href='#'
          className='text-indigo-600 ml-4 hover:text-indigo-900 hover:underline'
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default EmployeeTable;
