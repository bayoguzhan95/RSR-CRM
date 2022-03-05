import { confirmAlert } from 'react-confirm-alert';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { addShipmentType, deleteShipmentType, getAllShipmentType } from '../../../functions/settings';
import FormItem from '../../custom-components/form-item/FormItem';
import Input from '../../custom-components/input';
import { toast } from 'react-toastify';

const ShipmentTypeComponent = () => {
  const [shipmentType, setShipmentType] = useState('');
  const [shipmentTypes, setShipmentTypes] = useState([]);

  useEffect(() => {
    loadAllShipmentTypes();
  }, []);

  const loadAllShipmentTypes = async () => {
    getAllShipmentType().then((res) => setShipmentTypes(res.data));
  };

  const removeShipment = async (removedShipment) => {
    deleteShipmentType(removedShipment)
      .then((res) => {
        toast(`${res.data.shipmentType} succesfully deleted.`);
        loadAllShipmentTypes();
      })
      .catch((err) => {
        toast(err);
      });
  };
  const addShipment = async () => {
    addShipmentType(shipmentType)
      .then((res) => {
        loadAllShipmentTypes();
        toast(`${res.data.shipmentType} successfuly created`);
        setShipmentType('');
      })
      .catch((err) => {
        toast(err.response.data);
        setShipmentType('');
      });
  };

  const remove = (removedShipment) => {
    confirmAlert({
      title: <div className='border-b '> Confirmation of Delete </div>,
      childrenElement: () => (
        <div className='text-md font-medium '>
          Are you sure you want to delete <span className='!text-red-500'> {removedShipment} ?</span>
        </div>
      ),
      buttons: [
        { label: 'Cancel', onClick: () => {} },
        {
          label: 'Yes, Delete',
          onClick: () => removeShipment(removedShipment),
          className: '!bg-[#ffd100] !text-black',
        },
      ],
    });
  };

  return (
    <>
      <div className='px-6'>
        <Row gutterWidth={16}>
          <Col lg={6}>
            <FormItem label='Shipment Type'>
              <Input
                autoComplete='off'
                placeholder='Enter a name'
                id='shipmenttype'
                name='shipmenttype'
                type='text'
                value={shipmentType}
                onChange={(e) => setShipmentType(e.target.value)}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <button
              type='submit'
              onClick={addShipment}
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
                      Shipment Types
                    </th>

                    <th scope='col' className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 w-1/2'>
                  {shipmentTypes &&
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
                          <a
                            onClick={() => remove(ship?.shipmentType)}
                            href='#'
                            className='text-indigo-600 ml-4 hover:text-indigo-900 hover:underline'
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentTypeComponent;
