import { Button, Divider } from 'antd';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-grid-system';
import Card from '../components/antdform/card/card';
import FormItem from '../components/antdform/form-item/FormItem';
import Input from '../components/antdform/input/Input';
import { useForm } from 'react-hook-form';
const Login = () => {
  // router
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=' h-screen flex justify-center items-center flex-col bg-red-500 '>
      <h1 className='text-4xl'>RSR</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card hoverEffect>
          <Divider style={{ border: '2px' }} orientation='center'>
            Login into your account
          </Divider>
          <Row gutterWidth={16}>
            <Col lg={12}>
              <FormItem label='Username' error={errors.username}>
                <Input
                  autoComplete='off'
                  placeholder='Enter a username'
                  id='username'
                  name='username'
                  type='text'
                  {...register('username', { required: 'Username cannot be left blank.' })}
                />
              </FormItem>
            </Col>
            <Col lg={12}>
              <FormItem label='Password' error={errors?.password}>
                <Input
                  autoComplete='new-password'
                  placeholder='Enter a password'
                  id='password'
                  name='password'
                  type='password'
                  {...register('password', { required: 'Password cannot be left blank.' })}
                />
              </FormItem>
            </Col>
            <Col lg={12}>
              <button className=' w-full text-white bg-[#CE0D0D] hover:bg-[#CE0D0D]/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-[#CE0D0D]/80 dark:focus:ring-[#CE0D0D]/40 mr-2 mb-2'>
                Login
              </button>
            </Col>
          </Row>
        </Card>
      </form>
    </div>
  );
};

export default Login;
