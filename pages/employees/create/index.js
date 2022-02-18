import { Col, Row } from 'react-grid-system';
import FormItem from '../../../components/antdform/form-item/FormItem';
import Input from '../../../components/antdform/input/input';
import Card from '../../../components/antdform/card/card';
import Page from '../../../components/Layout/Page';
import React, { useState } from 'react';
import Select from 'react-select';
import { employeeAuths, userDepartment, userStatus } from '../../../constant/constant';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const CreateEmployee = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().max(255).min(6).required(),
    mail: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    department: Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required('departman is required field'),
    }),
    status: Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required('status is required field'),
    }),
  });

  const [selectedOption, setSelectedOption] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Page title={'Create User'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <fieldset className='mb-6 text-lg font-bold'>
            <legend>Create User</legend>
          </fieldset>

          <Row gutterWidth={16}>
            <Col lg={6}>
              <FormItem label='Ad' error={errors.name}>
                <Input autoComplete='off' placeholder='Enter a name' id='name' name='name' type='text' {...register('name')} />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem htmlFor='surname' label='Soyad' error={errors.surname}>
                <Input
                  autoComplete='off'
                  placeholder='Enter a surname'
                  id='surname'
                  name='surname'
                  type='text'
                  {...register('surname')}
                />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem label='Kullanıcı Adı' error={errors.username}>
                <Input
                  autoComplete='off'
                  placeholder='Enter a username'
                  id='username'
                  name='username'
                  type='text'
                  {...register('username')}
                />
              </FormItem>
            </Col>
            <Col lg={6}>
              <FormItem label='Şifre' error={errors?.password}>
                <Input
                  autoComplete='new-password'
                  placeholder='Enter a password'
                  id='password'
                  name='password'
                  type='password'
                  {...register('password')}
                />
              </FormItem>
            </Col>
            <Col lg={6}>
              <FormItem label='Telefon'>
                <Input
                  autoComplete='off'
                  placeholder='Enter a phone number'
                  id='phone'
                  name='phone'
                  type='text'
                  {...register('phone')}
                />
              </FormItem>
            </Col>
            <Col lg={6}>
              <FormItem label='Mail' error={errors.mail}>
                <Input autoComplete='off' placeholder='Enter a mail' id='mail' name='mail' type='text' {...register('mail')} />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem label='Department' error={errors?.department?.value}>
                <Controller
                  name='department'
                  control={control}
                  render={({ field }) => <Select instanceId='departmanId' {...field} options={userDepartment} />}
                />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem label='Status' error={errors?.status?.value}>
                <Controller
                  name='status'
                  control={control}
                  render={({ field }) => <Select instanceId='statusId' {...field} options={userStatus} />}
                />
              </FormItem>
            </Col>
            {/* Connected Customer */}
            <Col lg={12}>
              <p className='font-extrabold text-sm mb-1'> Followed by</p>
              <Row>
                <Col lg={2}>
                  <Select instanceId='u1' defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
                <Col lg={2}>
                  <Select instanceId='u2' defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
                <Col lg={2}>
                  <Select instanceId='u3' defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
                <Col lg={2}>
                  <Select instanceId='u4' defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
                <Col lg={2}>
                  <Select instanceId='u5' defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>

        <Card>
        <fieldset className='mb-6 text-lg font-bold'>
            <legend>Authorization</legend>
          </fieldset>

          {employeeAuths.map((item, i) => (
            <div className='' key={i} {...register(item.menuItem)}>
              <h1 className='my-4'> {item.menuItem} </h1>
              <div className=''>
                {item.subMenu.map((res, i) => (
                  <label key={i} className=' flex items-center flex-wrap cursor-pointer  '>
                    <input
                      className=' text-indigo-500 w-4 h-4 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded'
                      name='page'
                      type='checkbox'
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
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          Save
        </button>
      </form>
    </Page>
  );
};

export default CreateEmployee;
