import { Divider } from 'antd';
import { Col, Row } from 'react-grid-system';
import { useForm, Controller } from 'react-hook-form';
import Card from '../custom-components/card/card';
import FormItem from '../custom-components/form-item/FormItem';
import Input from '../custom-components/input/input';
import Select from 'react-select';
import { clients, composition, currency, departments, fabriccode, paymentTerm, seasons } from '../../constant/constant';

const CreateQuoteSheetForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const watchClientSelection = watch('clients');
  const watchSeasonsSelection = watch('seasons');
  const watchDepartmentSelection = watch('departments');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Divider orientation='center'>Create Quote Sheet</Divider>
        <Row gutterWidth={16}>
          <Col lg={12}>
            <FormItem label='Style' error={errors?.style}>
              <Input
                autoComplete='off'
                placeholder='Enter a Style'
                id='style'
                name='style'
                type='text'
                {...register('style', { required: 'style is a required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={3}>
            <FormItem label='Clients' error={errors?.clients}>
              <Controller
                name='clients'
                control={control}
                render={({ field }) => <Select instanceId='clients' {...field} options={clients} />}
                {...register('clients', { required: ' required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={2}>
            <FormItem label='Seasons' error={errors?.seasons}>
              <Controller
                name='seasons'
                control={control}
                render={({ field }) => (
                  <Select isDisabled={!watchClientSelection} instanceId='seasons' {...field} options={seasons} />
                )}
                {...register('seasons', { required: ' required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={2}>
            <FormItem label='Departments' error={errors?.departments}>
              <Controller
                name='departments'
                control={control}
                render={({ field }) => (
                  <Select isDisabled={!watchSeasonsSelection} instanceId='departments' {...field} options={departments} />
                )}
                {...register('departments', { required: ' required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={2}>
            <FormItem label='Fabric Code' error={errors?.fabriccode}>
              <Controller
                name='fabriccode'
                control={control}
                render={({ field }) => (
                  <Select isDisabled={!watchDepartmentSelection} instanceId='fabriccode' {...field} options={fabriccode} />
                )}
                {...register('fabriccode', { required: ' required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={3}>
            <FormItem label='Composition' error={errors.composition}>
              <Input
                className='!h-[37px]'
                autoComplete='off'
                placeholder='Enter a Composition'
                id='composition'
                name='composition'
                type='text'
                {...register('composition', { required: ' required field' })}
              />
            </FormItem>
          </Col>

          <Col lg={6}>
            <FormItem htmlFor='washingcode' label='Washing Code' error={errors?.washingcode}>
              <Input
                className='!h-[37px]'
                autoComplete='off'
                placeholder='Enter a Washing Code'
                id='washingcode'
                name='washingcode'
                type='text'
                {...register('washingcode', { required: ' required field' })}
              />
            </FormItem>
          </Col>

          <Col lg={6}>
            <FormItem htmlFor='washingdescription' label='Washing Description' error={errors?.washingdescription}>
              <Input
                className='!h-[37px]'
                autoComplete='off'
                placeholder='Enter a Washing Description'
                id='washingdescription'
                name='washingdescription'
                type='text'
                {...register('washingdescription', { required: ' required field' })}
              />
            </FormItem>{' '}
          </Col>
        </Row>
      </Card>
    </form>
  );
};

export default CreateQuoteSheetForm;
