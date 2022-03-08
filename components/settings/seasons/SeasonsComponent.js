import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { addSeason, deleteSeason, getAllSeasons, updateSeason } from '../../../functions/settings';
import FormItem from '../../custom-components/form-item/FormItem';
import Input from '../../custom-components/input';
import { Table, Space } from 'antd';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { AiOutlineClose, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { customStyle } from '../../../constant/tableCustomStyle';
import { confirmAlert } from 'react-confirm-alert';

const SeasonsComponent = ({ getAll }) => {
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

  const fetchAllData = async () => getAllSeasons().then((res) => setData(res.data));

  const handleAddSeason = async (data) => {
    addSeason(data?.season)
      .then((res) => {
        console.log(res);
        fetchAllData();
        toast(`${res.data.season} successfuly created`);
        reset();
      })
      .catch((err) => {
        toast(err.response.data);
        reset();
      });
  };

  const handleRemoveSeason = async (removedSeasonItem) => {
    deleteSeason(removedSeasonItem)
      .then((res) => {
        toast(`${res.data.season} succesfully deleted.`);
        fetchAllData();
      })
      .catch((err) => {
        toast(err);
      });
  };

  const handleUpdateSeason = async () => {
    setModalIsOpen(false);
    updateSeason(selectedEditInputValue, {
      season: inputValue,
    })
      .then((res) => {
        toast(`${selectedEditInputValue} succesfully updated with ${res.data.season}`);
        fetchAllData();
      })
      .catch((err) => {
        toast(err);
      });
  };

  const handleEdit = (selected) => {
    setModalIsOpen(true);
    setInputValue(selected);
    setSelectedEditInputValue(selected);
  };

  const removeConfirmation = (removedSeasonItem) => {
    confirmAlert({
      title: <div className="border-b "> Confirmation of Delete </div>,
      childrenElement: () => (
        <div className="text-md font-medium ">
          Are you sure you want to delete <span className="!text-red-500"> {removedSeasonItem} ?</span>
        </div>
      ),
      buttons: [
        { label: 'Cancel', onClick: () => {} },
        {
          label: 'Yes, Delete',
          onClick: () => handleRemoveSeason(removedSeasonItem),
          className: '!bg-[#ffd100] !text-black',
        },
      ],
    });
  };

  const columns = [
    {
      title: 'Seasons',
      dataIndex: 'season',
      key: 'season',
      render: (text) => <h6>{text}</h6>,
    },

    {
      title: 'Action',
      key: 'action',
      render: (selected) => (
        <Space size="middle">
          <div className="cursor-pointer">
            <AiOutlineEdit onClick={() => handleEdit(selected?.season)} size={17} className="text-green-500" />
          </div>
          <div>I</div>
          <div className="cursor-pointer">
            <AiOutlineDelete onClick={() => removeConfirmation(selected?.season)} size={17} className="text-red-500" />
          </div>
        </Space>
      ),
    },
  ];

  console.log(data);

  return (
    <>
      <div className="px-6">
        <form onSubmit={handleSubmit(handleAddSeason)}>
          <Row gutterWidth={16}>
            <Col lg={6}>
              <FormItem label="Season" error={errors?.shipmenttype}>
                <Input
                  autoComplete="off"
                  placeholder="Enter a season"
                  id="season"
                  name="season"
                  type="text"
                  {...register('season', { required: ' required field' })}
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
        <form onSubmit={handleUpdateSeason}>
          <Row>
            <div className="!flex !justify-between border-b w-full mb-4 pb-4">
              <div className="">Update Season</div>
              <div onClick={() => setModalIsOpen(false)}>
                <AiOutlineClose size={20} className="text-red-600 cursor-pointer" />{' '}
              </div>
            </div>
            <Col md={8} lg={8}>
              <FormItem label="Season">
                <Input
                  required
                  autoComplete="off"
                  placeholder="Enter a season"
                  id="editseason"
                  name="editseason"
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

export default SeasonsComponent;
