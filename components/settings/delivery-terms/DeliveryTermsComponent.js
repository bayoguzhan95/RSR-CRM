import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import FormItem from '../../custom-components/form-item/FormItem';
import Input from '../../custom-components/input/Input';

const DeliveryTermsComponent = () => {
  const [deliveryTermInput, setDeliveryTermInput] = useState('');

  const addDeliveryTerms = async () => {};
  return (
    <>
      <div className='px-6'>
        <Row gutterWidth={16}>
          <Col lg={6}>
            <FormItem label='Delivery Terms'>
              <Input
                autoComplete='off'
                placeholder='Enter a delivery term'
                id='deliveryterms'
                name='deliveryterms'
                type='text'
                onChange={(e) => setDeliveryTermInput(e.target.value)}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <button
              type='submit'
              onClick={addDeliveryTerms}
              className=' mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
            >
              Add
            </button>
          </Col>
        </Row>
      </div>

      <div className='flex flex-col'>
        <div className=' overflow-x-auto sm:-mx-2 lg:-mx-2'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Delivery Terms
                    </th>

                    <th scope='col' className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 w-1/2'>
                  {/* {shipmentTypes &&
                    shipmentTypes.map((ship, i) => (
                      <tr key={i}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='ml-4'>
                              <div className='text-sm font-medium text-gray-900'>{ship?.shipmentType}</div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap  text-sm font-medium text-center'>
                          <a className='text-indigo-600 mr-4 hover:text-indigo-900 hover:underline'>Edit</a>

                          <span> I</span>
                          <a href='#' className='text-indigo-600 ml-4 hover:text-indigo-900 hover:underline'>
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryTermsComponent;
