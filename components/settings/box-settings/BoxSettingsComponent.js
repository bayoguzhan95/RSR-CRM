import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import FormItem from '../../custom-components/form-item/FormItem';
import Input from '../../custom-components/input';
import { Table, Space } from 'antd';
import { addBox, deleteBox, getAllBoxes } from '../../../functions/settings';
import { AiOutlineDelete } from 'react-icons/ai';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

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
    addBox(data)
      .then(() => {
        fetchAllData();
        toast(`successfuly created`);
        reset();
      })
      .catch((err) => {
        toast(err.response.data);
        reset();
      });
  };

  const handleRemoveBox = async (removedBox) => {
    deleteBox(removedBox)
      .then(() => {
        toast(` succesfully deleted.`);
        fetchAllData();
      })
      .catch((err) => {
        toast(err);
      });
  };

  const removeConfirmation = (removedBox) => {
    confirmAlert({
      title: <div className='border-b '> Confirmation of Delete </div>,
      childrenElement: () => <div className='text-md font-medium '>Are you sure you want to delete ?</div>,
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

  console.log(data);

  const columns = [
    {
      title: 'Lenght',
      dataIndex: 'length',
      key: 'length',
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: 'Width',
      dataIndex: 'width',
      key: 'width',
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: 'Max Weight',
      dataIndex: 'maxWeight',
      key: 'maxWeight',
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: 'Tare Weight',
      dataIndex: 'tareWeight',
      key: 'tareWeight',
      render: (text) => <h6>{text}</h6>,
    },

    {
      title: 'Action',
      key: 'action',
      render: (selected) => (
        <Space size='middle'>
          <div className='cursor-pointer'>
            <AiOutlineDelete onClick={() => removeConfirmation(selected?._id)} size={17} className='text-red-500' />
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
              <FormItem label='L' error={errors?.l}>
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
              <FormItem label='W' error={errors?.w}>
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
              <FormItem label='H' error={errors?.h}>
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
              <FormItem label='Max Weight' error={errors?.maxweight}>
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
              <FormItem label='Tare Weight' error={errors?.tareweight}>
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
