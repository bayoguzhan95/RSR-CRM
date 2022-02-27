import { Divider } from 'antd';
import { Col, Row } from 'react-grid-system';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import Card from '../custom-components/card/card';
import FormItem from '../custom-components/form-item/FormItem';
import Input from '../custom-components/input/input';
import Select from 'react-select';
import { paymentTerm } from '../../constant/constant';

const CreateCompaniesForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'phone',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Divider orientation='center'>Create Companies</Divider>
        <Row gutterWidth={16}>
          <Col lg={6}>
            <FormItem label='Company Title' error={errors?.companytitle}>
              <Input
                autoComplete='off'
                placeholder='Enter a Company Title'
                id='companytitle'
                name='companytitle'
                type='text'
                {...register('companytitle', { required: 'Company Title is a required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='Invoice Company Name' error={errors?.invoicecompanyname}>
              <Input
                autoComplete='off'
                placeholder='Enter a Invoice Company Name'
                id='invoicecompanyname'
                name='invoicecompanyname'
                type='text'
                {...register('invoicecompanyname', { required: 'required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='Person In Charge' error={errors?.personincharge}>
              <Input
                autoComplete='off'
                placeholder='Person In Charge'
                id='personincharge'
                name='personincharge'
                type='text'
                {...register('personincharge', { required: 'required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='Type of Company' error={errors?.typeofcompany}>
              <Controller
                name='typeofcompany'
                control={control}
                render={({ field }) => <Select instanceId='typeofcompany' {...field} options={paymentTerm} />}
                {...register('typeofcompany')}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='Phone 1' error={errors?.phone1}>
              <Input
                autoComplete='off'
                placeholder='Enter a Phone'
                id='phone1'
                name='phone1'
                type='text'
                {...register('phone1', { required: 'required field' })}
              />
            </FormItem>
          </Col>

          <Col lg={6}>
            <FormItem label='Phone 2' error={errors?.phone2}>
              <Input
                autoComplete='off'
                placeholder='Enter a Phone'
                id='phone2'
                name='phone2'
                type='text'
                {...register('phone2', { required: 'required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem htmlFor='warehouse' label='Ware House'>
              <Input.Textarea rows={4} autoComplete='off' id='warehouse' name='warehouse' type='text' />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem htmlFor='adress' label='Adress'>
              <Input.Textarea rows={4} autoComplete='off' id='adress' name='adress' type='text' />
            </FormItem>
          </Col>

          <Col lg={6}>
            <FormItem label='Email' error={errors?.email}>
              <Input
                autoComplete='off'
                placeholder='Enter a Email'
                id='email'
                name='email'
                type='text'
                {...register('email', { required: 'required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='Fax' error={errors?.fax}>
              <Input
                autoComplete='off'
                placeholder='Enter a Fax'
                id='fax'
                name='fax'
                type='text'
                {...register('fax', { required: 'required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='Customs' error={errors?.customs}>
              <Input
                autoComplete='off'
                placeholder='Enter a Customs'
                id='customs'
                name='customs'
                type='text'
                {...register('customs', { required: 'required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={6}>
            <FormItem label='Payment' error={errors?.payment}>
              <Controller
                name='payment'
                control={control}
                render={({ field }) => <Select instanceId='payment' {...field} options={paymentTerm} />}
                {...register('payment')}
              />
            </FormItem>
          </Col>
        </Row>
      </Card>
    </form>
  );
};

export default CreateCompaniesForm;
