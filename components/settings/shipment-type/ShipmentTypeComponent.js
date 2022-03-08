import { confirmAlert } from 'react-confirm-alert';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { addShipmentType, deleteShipmentType, getAllShipmentType, updateShipmentType } from '../../../functions/settings';
import FormItem from '../../custom-components/form-item/FormItem';
import Input from '../../custom-components/input';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { AiOutlineClose, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Table, Space } from 'antd';
import { useForm } from 'react-hook-form';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
  },
};

const ShipmentTypeComponent = () => {
  const [shipmentTypes, setShipmentTypes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEditInputValue, setSelectedEditInputValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Get all Shipment Types
  useEffect(() => {
    loadAllShipmentTypes();
  }, []);

  const loadAllShipmentTypes = async () => getAllShipmentType().then((res) => setShipmentTypes(res.data));

  const addShipment = async (data) => {
    addShipmentType(data?.shipmenttype)
      .then((res) => {
        loadAllShipmentTypes();
        toast(`${res.data.shipmentType} successfuly created`);
        reset();
      })
      .catch((err) => {
        toast(err.response.data);
        reset();
      });
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

  const removeConfirmation = (removedShipment) => {
    confirmAlert({
      title: <div className="border-b "> Confirmation of Delete </div>,
      childrenElement: () => (
        <div className="text-md font-medium ">
          Are you sure you want to delete <span className="!text-red-500"> {removedShipment} ?</span>
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

  const updateShip = async () => {
    setModalIsOpen(false);
    updateShipmentType(selectedEditInputValue, {
      shipmentType: inputValue,
    })
      .then((res) => {
        toast(`${selectedEditInputValue} succesfully updated with ${res.data.shipmentType}`);
        loadAllShipmentTypes();
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

  const columns = [
    {
      title: 'Shipment Type',
      dataIndex: 'shipmentType',
      key: 'shipmentType',
      render: (text) => <h6>{text}</h6>,
    },

    {
      title: 'Action',
      key: 'action',
      render: (selected) => (
        <Space size="middle">
          <div className="cursor-pointer">
            <AiOutlineEdit onClick={() => handleEdit(selected?.shipmentType)} size={17} className="text-green-500" />
          </div>
          <div>I</div>
          <div className="cursor-pointer">
            <AiOutlineDelete onClick={() => removeConfirmation(selected?.shipmentType)} size={17} className="text-red-500" />
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="px-6">
        <form onSubmit={handleSubmit(addShipment)}>
          <Row gutterWidth={16}>
            <Col lg={6}>
              <FormItem label="Shipment Type" error={errors?.shipmenttype}>
                <Input
                  autoComplete="off"
                  placeholder="Enter a shipment Type"
                  id="shipmenttype"
                  name="shipmenttype"
                  type="text"
                  {...register('shipmenttype', { required: ' required field' })}
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
      <Table columns={columns} dataSource={shipmentTypes} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <form onSubmit={updateShip}>
          <Row>
            <div className="!flex !justify-between border-b w-full mb-4 pb-4">
              <div className="">Update Shipment Type</div>
              <div onClick={() => setModalIsOpen(false)}>
                <AiOutlineClose size={20} className="text-red-600 cursor-pointer" />{' '}
              </div>
            </div>
            <Col md={8} lg={8}>
              <FormItem label="Shipment Type">
                <Input
                  required
                  autoComplete="off"
                  placeholder="Enter a name"
                  id="name"
                  name="name"
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

export default ShipmentTypeComponent;
