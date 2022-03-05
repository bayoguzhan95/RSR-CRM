import { Button, Divider } from 'antd';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-grid-system';
import Card from '../components/custom-components/card/card';
import FormItem from '../components/custom-components/form-item/FormItem';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../context';
import Input from '../components/custom-components/input';
const Login = () => {
  // router
  const router = useRouter();

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;


  useEffect(() => {
    if (user !== null) router.push('/');
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData.email);
    try {
      const { data } = await axios.post(`/api/login`, {
        email: formData.email,
        password: formData.password,
      });

      dispatch({
        type: 'LOGIN',
        payload: data,
      });

      window.localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
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
              <FormItem label='EMail' error={errors.email}>
                <Input
                  autoComplete='off'
                  placeholder='Enter a email'
                  id='email'
                  name='email'
                  type='text'
                  {...register('email', { required: 'EMail cannot be left blank.' })}
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
