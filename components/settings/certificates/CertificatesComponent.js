import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { addCertification, deleteCertificate, getAllCertifications, updateCertification } from '../../../functions/settings';
import FormItem from '../../custom-components/form-item/FormItem';
import Input from '../../custom-components/input';
import { Table, Space } from 'antd';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { AiOutlineClose, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { customStyle } from '../../../constant/tableCustomStyle';
import { confirmAlert } from 'react-confirm-alert';

const CertificatesComponent = () => {
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

  const fetchAllData = async () => getAllCertifications().then((res) => setData(res.data));

  const handleAddCertification = async (data) => {
    addCertification(data?.certification)
      .then((res) => {
        fetchAllData();
        toast(`${res.data.certification} successfuly created`);
        reset();
      })
      .catch((err) => {
        toast(err.response.data);
        reset();
      });
  };

  const handleRemoveCertification = async (removedCertificationItem) => {
    deleteCertificate(removedCertificationItem)
      .then((res) => {
        toast(`${res.data.certification} succesfully deleted.`);
        fetchAllData();
      })
      .catch((err) => {
        toast(err);
      });
  };

  const handleUpdateCertification = async () => {
    setModalIsOpen(false);
    updateCertification(selectedEditInputValue, {
      certification: inputValue,
    })
      .then((res) => {
        toast(`${selectedEditInputValue} succesfully updated with ${res.data.certification}`);
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

  const removeConfirmation = (removedCertificationItem) => {
    confirmAlert({
      title: <div className="border-b "> Confirmation of Delete </div>,
      childrenElement: () => (
        <div className="text-md font-medium ">
          Are you sure you want to delete <span className="!text-red-500"> {removedCertificationItem} ?</span>
        </div>
      ),
      buttons: [
        { label: 'Cancel', onClick: () => {} },
        {
          label: 'Yes, Delete',
          onClick: () => handleRemoveCertification(removedCertificationItem),
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
        <Space size="middle">
          <div className="cursor-pointer">
            <AiOutlineEdit onClick={() => handleEdit(selected?.certification)} size={17} className="text-green-500" />
          </div>
          <div>I</div>
          <div className="cursor-pointer">
            <AiOutlineDelete onClick={() => removeConfirmation(selected?.certification)} size={17} className="text-red-500" />
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="px-6">
        <form onSubmit={handleSubmit(handleAddCertification)}>
          <Row gutterWidth={16}>
            <Col lg={6}>
              <FormItem label="Certification" error={errors?.certification}>
                <Input
                  autoComplete="off"
                  placeholder="Enter a certification"
                  id="certification"
                  name="certification"
                  type="text"
                  {...register('certification', { required: ' required field' })}
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
        <form onSubmit={handleUpdateCertification}>
          <Row>
            <div className="!flex !justify-between border-b w-full mb-4 pb-4">
              <div className="">Update Certification</div>
              <div onClick={() => setModalIsOpen(false)}>
                <AiOutlineClose size={20} className="text-red-600 cursor-pointer" />{' '}
              </div>
            </div>
            <Col md={8} lg={8}>
              <FormItem label="Certification">
                <Input
                  required
                  autoComplete="off"
                  placeholder="Enter a certification"
                  id="editcertification"
                  name="editcertification"
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

export default CertificatesComponent;
