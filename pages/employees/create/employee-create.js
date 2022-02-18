import { Col, Row } from 'react-grid-system';
import FormItem from '../../../components/antdform/form-item/FormItem';
import Input from '../../../components/antdform/input/input';
import Card from '../../../components/card/card';
import Page from '../../../components/Layout/Page';
import React, { useState } from 'react';
import Select from 'react-select';
import { Checkbox } from 'antd';
import { employeeAuths } from '../../../constant/constant';
import { useForm, Controller } from 'react-hook-form';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const CreateEmployee = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Page title={'CreateEmployee'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <fieldset className="mb-6">
            <legend>Kullanıcı Oluştur</legend>
          </fieldset>

          <Row gutterWidth={16}>
            <Col lg={6}>
              <FormItem label="Ad">
                <Input autocomplate="off" placeholder="Ad girin" id="name" name="name" type="text" {...register('name')} />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem htmlFor="surname" label="Soyad">
                <Input
                  autocomplate="off"
                  placeholder="Soyad girin"
                  id="surname"
                  name="surname"
                  type="text"
                  {...register('surname')}
                />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem label="Kullanıcı Adı">
                <Input
                  autocomplate="off"
                  placeholder="Kullanıcı adı girin"
                  id="username"
                  name="username"
                  type="text"
                  {...register('username')}
                />
              </FormItem>
            </Col>
            <Col lg={6}>
              <FormItem label="Şifre">
                <Input
                  autocomplate="off"
                  placeholder="Şifre girin"
                  id="password"
                  name="password"
                  type="text"
                  {...register('password')}
                />
              </FormItem>
            </Col>
            <Col lg={6}>
              <FormItem label="Telefon">
                <Input
                  autocomplate="off"
                  placeholder="Telefon numarası girin"
                  id="phone"
                  name="phone"
                  type="text"
                  {...register('phone')}
                />
              </FormItem>
            </Col>
            <Col lg={6}>
              <FormItem label="Mail">
                <Input autocomplate="off" placeholder="Mail  girin" id="mail" name="mail" type="text" {...register('mail')} />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem label="Departman">
                <Controller name="Departman" control={control} render={({ field }) => <Select {...field} options={options} />} />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem label="Status">
                <Controller name="Status" control={control} render={({ field }) => <Select {...field} options={options} />} />
              </FormItem>
            </Col>
            {/* Connected Customer */}
            <Col lg={12}>
              <p className="font-extrabold text-sm mb-1"> Takip ettiği</p>
              <Row>
                <Col lg={2}>
                  <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
                <Col lg={2}>
                  <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
                <Col lg={2}>
                  <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
                <Col lg={2}>
                  <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
                <Col lg={2}>
                  <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>

        <Card>
          <fieldset className="mb-6">
            <legend>Yetki Mekanizması</legend>
          </fieldset>

          {employeeAuths.map((item, i) => (
            <div className="" key={i} {...register(item.menuItem)}>
              <h1 className="my-4"> {item.menuItem} </h1>
              <div className="">
                {item.subMenu.map((res, i) => (
                  <label className=" flex items-center flex-wrap cursor-pointer  ">
                    <input
                      className=" text-indigo-500 w-4 h-4 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                      name="page"
                      type="checkbox"
                      value={res.value}
                      {...register(item.menuItemToHookForm)}
                    />
                    <span>{res.item} </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </Card>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Kaydet
        </button>
      </form>
    </Page>
  );
};

export default CreateEmployee;
