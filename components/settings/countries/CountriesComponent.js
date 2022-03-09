import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { addCountry, deleteCountry, getAllCountries, updateCountry } from '../../../functions/settings';
import FormItem from '../../custom-components/form-item/FormItem';
import Input from '../../custom-components/input';
import { Table, Space } from 'antd';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { AiOutlineClose, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { customStyle } from '../../../constant/tableCustomStyle';
import { confirmAlert } from 'react-confirm-alert';
const CountriesComponent = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEditInputValue, setSelectedEditInputValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => getAllCountries().then((res) => setData(res.data));
  const handleAddCountry = async (data) => {
    addCountry(data?.country)
      .then((res) => {
        fetchAllData();
        toast(`${res.data.country} successfuly created`);
        reset();
      })
      .catch((err) => {
        toast(err.response.data);
        reset();
      });
  };

  const handleRemoveCountry = async (removedCountryItem) => {
    deleteCountry(removedCountryItem)
      .then((res) => {
        toast(`${res.data.country} succesfully deleted.`);
        fetchAllData();
      })
      .catch((err) => {
        toast(err);
      });
  };

  const handleUpdateCountry = async () => {
    setModalIsOpen(false);
    updateCountry(selectedEditInputValue, {
      country: inputValue,
    })
      .then((res) => {
        toast(`${selectedEditInputValue} succesfully updated with ${res.data.country}`);
        fetchAllData();
      })
      .catch((err) => {
        toast(err);
      });
  };

  const removeConfirmation = (removedCountryItem) => {
    confirmAlert({
      title: <div className="border-b "> Confirmation of Delete </div>,
      childrenElement: () => (
        <div className="text-md font-medium ">
          Are you sure you want to delete <span className="!text-red-500"> {removedCountryItem} ?</span>
        </div>
      ),
      buttons: [
        { label: 'Cancel', onClick: () => {} },
        {
          label: 'Yes, Delete',
          onClick: () => handleRemoveCountry(removedCountryItem),
          className: '!bg-[#ffd100] !text-black',
        },
      ],
    });
  };

  const handleEdit = (selected) => {
    setModalIsOpen(true);
    setInputValue(selected);
    setSelectedEditInputValue(selected);
  };

  const columns = [
    {
      title: 'Countries',
      dataIndex: 'country',
      key: 'country',
      render: (text) => <h6>{text}</h6>,
    },

    {
      title: 'Action',
      key: 'action',
      render: (selected) => (
        <Space size="middle">
          <div className="cursor-pointer">
            <AiOutlineEdit onClick={() => handleEdit(selected?.country)} size={17} className="text-green-500" />
          </div>
          <div>I</div>
          <div className="cursor-pointer">
            <AiOutlineDelete onClick={() => removeConfirmation(selected?.country)} size={17} className="text-red-500" />
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="px-6">
        <form onSubmit={handleSubmit(handleAddCountry)}>
          <Row gutterWidth={16}>
            <Col lg={6}>
              <FormItem label="Country" error={errors?.country}>
                <Input
                  autoComplete="off"
                  placeholder="Enter a country"
                  id="country"
                  name="country"
                  type="text"
                  {...register('country', { required: ' required field' })}
                />
              </FormItem>
            </Col>
            <Col lg={6}>
              <button className=" mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Add
              </button>
            </Col>
          </Row>
        </form>
      </div>
      <Table columns={columns} dataSource={data} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyle}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <form onSubmit={handleUpdateCountry}>
          <Row>
            <div className="!flex !justify-between border-b w-full mb-4 pb-4">
              <div className="">Update Country</div>
              <div onClick={() => setModalIsOpen(false)}>
                <AiOutlineClose size={20} className="text-red-600 cursor-pointer" />{' '}
              </div>
            </div>
            <Col md={8} lg={8}>
              <FormItem label="Country">
                <Input
                  required
                  autoComplete="off"
                  placeholder="Enter a country"
                  id="editcountry"
                  name="editcountry"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </FormItem>
            </Col>
            <Col md={3} lg={4}>
              <button
                type="submit"
                className=" mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Update
              </button>
            </Col>
          </Row>
        </form>
      </Modal>
    </>
  );
};

export default CountriesComponent;
