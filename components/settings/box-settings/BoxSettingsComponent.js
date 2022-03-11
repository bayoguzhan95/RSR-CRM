import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import FormItem from '../../custom-components/form-item/FormItem';
import Input from '../../custom-components/input';
import { Table, Space } from 'antd';
import { addBox, deleteBox, getAllBoxes } from '../../../functions/settings';

const BoxSettingsComponent = () => {
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => getAllBoxes().then((res) => setData(res.data));

  const handleAddBox = async (data) => {
    addBox(data?.boxes)
      .then((res) => {
        fetchAllData();
        toast(`${res.data.boxes} successfuly created`);
        reset();
      })
      .catch((err) => {
        toast(err.response.data);
        reset();
      });
  };

  const handleRemoveBox = async (removedBox) => {
    deleteBox(removedBox)
      .then((res) => {
        toast(`${res.data.certification} succesfully deleted.`);
        fetchAllData();
      })
      .catch((err) => {
        toast(err);
      });
  };

  const removeConfirmation = (removedBox) => {
    confirmAlert({
      title: <div className='border-b '> Confirmation of Delete </div>,
      childrenElement: () => (
        <div className='text-md font-medium '>
          Are you sure you want to delete <span className='!text-red-500'> {removedBox} ?</span>
        </div>
      ),
      buttons: [
        { label: 'Cancel', onClick: () => {} },
        {
          label: 'Yes, Delete',
          onClick: () => handleRemoveBox(removedBox),
          className: '!bg-[#ffd100] !text-black',
        },
      ],
    });
  };

  const columns = [
    {
      title: 'Certifications',
      dataIndex: 'certification',
      key: 'certification',
      render: (text) => <h6>{text}</h6>,
    },

    {
      title: 'Action',
      key: 'action',
      render: (selected) => (
        <Space size='middle'>
          <div className='cursor-pointer'>
            <AiOutlineEdit onClick={() => handleEdit(selected?.certification)} size={17} className='text-green-500' />
          </div>
          <div>I</div>
          <div className='cursor-pointer'>
            <AiOutlineDelete onClick={() => removeConfirmation(selected?.certification)} size={17} className='text-red-500' />
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className='px-6'>
        <form onSubmit={handleSubmit(handleAddBox)}>
          <Row gutterWidth={16}>
            <Col lg={2}>
              <FormItem label='L'>
                <Input
                  autoComplete='off'
                  placeholder='L'
                  id='l'
                  name='l'
                  type='number'
                  {...register('l', { required: 'required field' })}
                />
              </FormItem>
            </Col>
            <Col lg={2}>
              <FormItem label='W'>
                <Input
                  autoComplete='off'
                  placeholder='W'
                  id='w'
                  name='w'
                  type='number'
                  {...register('w', { required: 'required field' })}
                />
              </FormItem>
            </Col>
            <Col lg={2}>
              <FormItem label='H'>
                <Input
                  autoComplete='off'
                  placeholder='H'
                  id='h'
                  name='h'
                  type='number'
                  {...register('h', { required: 'required field' })}
                />
              </FormItem>
            </Col>
            <Col lg={2}>
              <FormItem label='Max Weight'>
                <Input
                  autoComplete='off'
                  placeholder='Max Weight'
                  id='maxweight'
                  name='maxweight'
                  type='text'
                  {...register('maxweight', { required: 'required field' })}
                />
              </FormItem>
            </Col>
            <Col lg={2}>
              <FormItem label='Tare Weight'>
                <Input
                  autoComplete='off'
                  placeholder='Tare Weight'
                  id='tareweight'
                  name='tareweight'
                  type='text'
                  {...register('tareweight', { required: 'required field' })}
                />
              </FormItem>
            </Col>
            <Col lg={2}>
              <button className=' mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                Add
              </button>
            </Col>
          </Row>
        </form>
      </div>

      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default BoxSettingsComponent;
