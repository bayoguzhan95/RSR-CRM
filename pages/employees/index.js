import { mockUserData } from '../../constant/constant';
import EmployeeTable from '../../components/table/employeeTable';
import Page from '../../components/layout/Page';
import Link from 'next/link';

const Employees = () => {
  return (
    <Page title='Employees' header={"Employees"} >
      <div className='mb-4'>
        <Link href='/employees/create'>
          <a className='bg-[#DA0A10] hover:bg-[#f80810] text-white font-bold py-2 px-4 rounded mb-4 hover:text-white'>
            Create Employee
          </a>
        </Link>
      </div>

      <div className='flex flex-col'>
        <div className=' overflow-x-auto sm:-mx-2 lg:-mx-2'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Employee Name
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Department
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Role
                    </th>
                    <th scope='col' className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 w-1/2'>
                  {mockUserData.map((employee, i) => (
                    <EmployeeTable userData={employee} key={i} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Employees;
