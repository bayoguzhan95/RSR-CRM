import { useForm, Controller } from 'react-hook-form';
import { Divider } from 'antd';
import { Col, Row } from 'react-grid-system';
import FormItem from '../../components/antdform/form-item/FormItem';
import Input from '../../components/antdform/input/input';
import Card from '../../components/antdform/card/card';
import { authTypes, currency, employeeAuths, userDepartment, userStatus } from '../../constant/constant';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const EmployeeForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const animatedComponents = makeAnimated();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Divider orientation='center'>Create User</Divider>
        <Row gutterWidth={16}>
          <Col lg={6}>
            <FormItem label='Name' error={errors.name}>
              <Input autoComplete='off' placeholder='Enter a name' id='name' name='name' type='text' {...register('name')} />
            </FormItem>
          </Col>

          <Col lg={6}>
            <FormItem htmlFor='surname' label='Surname' error={errors.surname}>
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
            <FormItem label='Username' error={errors.username}>
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
            <FormItem label='Password' error={errors?.password}>
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
            <FormItem label='Phone'>
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
            <FormItem label='Email' error={errors.email}>
              <Input autoComplete='off' placeholder='Enter a email' id='email' name='email' type='text' {...register('email')} />
            </FormItem>
          </Col>

          <Col lg={6}>
            <FormItem label='Department' error={errors?.department}>
              <Controller
                name='department'
                control={control}
                render={({ field }) => <Select instanceId='departmanId' {...field} options={userDepartment} />}
                {...register('department')}
              />
            </FormItem>
          </Col>

          <Col lg={6}>
            <FormItem label='Status' error={errors?.status}>
              <Controller
                name='status'
                control={control}
                render={({ field }) => <Select instanceId='statusId' {...field} options={userStatus} />}
                {...register('status')}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='FollowedBy' error={errors?.followedby}>
              <Controller
                name='followedby'
                control={control}
                render={({ field }) => (
                  <Select
                    instanceId='followedby'
                    {...field}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[colourOptions[4], colourOptions[5]]}
                    isMulti
                    options={options}
                  />
                )}
                {...register('followedby')}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='FollowedByFit' error={errors?.followedbyfit}>
              <Controller
                name='followedbyfit'
                control={control}
                render={({ field }) => (
                  <Select
                    instanceId='followedbyfit'
                    {...field}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[colourOptions[4], colourOptions[5]]}
                    isMulti
                    options={options}
                  />
                )}
                {...register('followedbyfit')}
              />
            </FormItem>
          </Col>
        </Row>
      </Card>

      <Card>
        <Divider orientation='center'>Authorization</Divider>

        {employeeAuths.map((item, i) => (
          <div className='' key={i}>
            <h1 className='my-4'> {item.menuItem} </h1>
            {item.subMenu.map((res, index) => (
              <Row key={index}>
                <Col xs={3}>
                  <label key={index} className=' cursor-pointer  '>
                    <input
                      className=' text-indigo-500 w-4 h-4 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded'
                      type='checkbox'
                      name='AuthPages'
                      {...register(`${item.menuItemToHookForm}.${res.value}.page`)}
                    />
                    <span>{res.item} </span>
                  </label>
                </Col>
                <Col xs={4}>
                  <label className='cursor-pointer'>
                    <Controller
                      control={control}
                      {...register(`${item.menuItemToHookForm}.${res.value}.auth`, { value: 1 })}
                      render={({ field }) => <Select {...field} instanceId='fullyAuth' name='auths' options={authTypes} />}
                    />
                  </label>
                </Col>
              </Row>
            ))}
          </div>
        ))}
      </Card>
      <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;
