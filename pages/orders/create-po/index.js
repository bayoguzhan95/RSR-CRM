import { Col, Row } from 'react-grid-system';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import Page from '../../../components/Layout/Page';
import Card from '../../../components/antdform/card/card';
import Input from '../../../components/antdform/input/input';
import FormItem from '../../../components/antdform/form-item/FormItem';
import { clients, composition, currency, departments, fabriccode, paymentTerm, seasons } from '../../../constant/constant';

export default function createPo() {
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
  const watchClientSelection = watch('clients');
  const watchSeasonsSelection = watch('seasons');
  const watchDepartmentSelection = watch('departments');

  return (
    <Page title={'Create User'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <fieldset className='mb-6 text-lg font-bold'>
            <legend>Create PO</legend>
          </fieldset>

          <Row gutterWidth={16}>
            <Col lg={6}>
              <FormItem label='PO' error={errors?.po}>
                <Input
                  autoComplete='off'
                  placeholder='Enter a PO'
                  id='po'
                  name='po'
                  type='text'
                  {...register('po', { required: 'po is a required field' })}
                />
              </FormItem>
            </Col>

            <Col lg={6}>
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

            <Col lg={4}>
              <FormItem label='Supplier ' error={errors?.supplier}>
                <Controller
                  name='supplier'
                  control={control}
                  render={({ field }) => <Select instanceId='supplier' {...field} options={paymentTerm} />}
                  {...register('supplier', { required: ' required field' })}
                />
              </FormItem>
            </Col>

            <Col lg={4}>
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

            <Col lg={4}>
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

            <Col lg={12}>
              <FormItem htmlFor='description' label='Description'>
                <Input.Textarea rows={4} autoComplete='off' id='description' name='description' type='text' />
              </FormItem>
            </Col>
            <Col lg={2}>
              <FormItem htmlFor='price' label='Price' error={errors?.price}>
                <Input
                  className='!h-[37px]'
                  autoComplete='off'
                  placeholder='Enter a Price'
                  id='price'
                  name='price'
                  type='text'
                  {...register('price', { required: ' required field' })}
                />
              </FormItem>
            </Col>
            <Col lg={2}>
              <FormItem label='Currency ' error={errors?.currency}>
                <Controller
                  name='currency'
                  control={control}
                  render={({ field }) => <Select instanceId='currency' {...field} options={currency} />}
                  {...register('currency', { required: ' required field' })}
                />
              </FormItem>
            </Col>
            <Col lg={2}></Col>

            <Col lg={6}>
              <FormItem label='Payment Term' error={errors?.paymentTerm}>
                <Controller
                  name='paymentTerm'
                  control={control}
                  render={({ field }) => <Select instanceId='paymentTerm' {...field} options={paymentTerm} />}
                  {...register('paymentTerm', { required: 'Payment Term is a required field' })}
                />
              </FormItem>
            </Col>
          </Row>
        </Card>
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          Save
        </button>
      </form>
    </Page>
  );
}
