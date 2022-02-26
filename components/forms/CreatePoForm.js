import { Col, Row } from 'react-grid-system';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import Card from '../custom-components/card/card';
import Input from '../custom-components/input/input';
import FormItem from '../custom-components/form-item/FormItem';
import { clients, composition, currency, departments, fabriccode, paymentTerm, seasons } from '../../constant/constant';
import { DatePicker, Divider, Space } from 'antd';
import { Checkbox } from 'antd';
import { Tabs } from 'antd';
  
  const { TabPane } = Tabs;

const CreatePoForm = ({ onSubmit }) => {
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
        <Divider orientation='center'>Create PO</Divider>
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

          <Col lg={4}>
            <FormItem label='Payment Term' error={errors?.paymentTerm}>
              <Controller
                name='paymentTerm'
                control={control}
                render={({ field }) => <Select instanceId='paymentTerm' {...field} options={paymentTerm} />}
                {...register('paymentTerm', { required: 'required field' })}
              />
            </FormItem>
          </Col>
          <Col lg={3}>
            <FormItem label='Certificate ' error={errors?.certificate}>
              <Controller
                name='certificate'
                control={control}
                render={({ field }) => <Select instanceId='certificate' {...field} options={currency} />}
                {...register('certificate', { required: ' required field' })}
              />
            </FormItem>
          </Col>
        </Row>
      </Card>

      <Tabs defaultActiveKey='1'>
        <TabPane tab='Assignment for Division' key='1'>
          <Card>
            <Row gutterWidth={16}>
              <Col lg={3}>
                <FormItem label='Division Manager ' error={errors?.divisionmanager}>
                  <Controller
                    name='divisionmanager'
                    control={control}
                    render={({ field }) => <Select instanceId='divisionmanager' {...field} options={currency} />}
                    {...register('divisionmanager', { required: ' required field' })}
                  />
                </FormItem>
              </Col>
              <Col lg={3}>
                <FormItem label='Merchandiser ' error={errors?.merchandiser}>
                  <Controller
                    name='merchandiser'
                    control={control}
                    render={({ field }) => <Select instanceId='merchandiser' {...field} options={currency} />}
                    {...register('merchandiser', { required: ' required field' })}
                  />
                </FormItem>
              </Col>
              <Col lg={3}>
                <FormItem label='QC Manager ' error={errors?.qcmanager}>
                  <Controller
                    name='qcmanager'
                    control={control}
                    render={({ field }) => <Select instanceId='qcmanager' {...field} options={currency} />}
                    {...register('qcmanager', { required: ' required field' })}
                  />
                </FormItem>
              </Col>
              <Col lg={3}>
                <FormItem label='QC ' error={errors?.qc}>
                  <Controller
                    name='qc'
                    control={control}
                    render={({ field }) => <Select instanceId='qc' {...field} options={currency} />}
                    {...register('qc', { required: ' required field' })}
                  />
                </FormItem>
              </Col>
              <Col lg={3}>
                <FormItem label='Fit ' error={errors?.fit}>
                  <Controller
                    name='fit'
                    control={control}
                    render={({ field }) => <Select instanceId='fit' {...field} options={currency} />}
                    {...register('fit', { required: ' required field' })}
                  />
                </FormItem>
              </Col>
              <Col lg={3}>
                <FormItem label='Accounting + Traffic ' error={errors?.accountingwithtraffic}>
                  <Controller
                    name='accountingwithtraffic'
                    control={control}
                    render={({ field }) => <Select instanceId='accountingwithtraffic' {...field} options={currency} />}
                    {...register('accountingwithtraffic', { required: ' required field' })}
                  />
                </FormItem>
              </Col>
              <Col lg={3}>
                <FormItem label='Fit Assistant ' error={errors?.fitassistant}>
                  <Controller
                    name='fitassistant'
                    control={control}
                    render={({ field }) => <Select instanceId='fitassistant' {...field} options={currency} />}
                    {...register('fitassistant', { required: ' required field' })}
                  />
                </FormItem>
              </Col>
            </Row>
          </Card>
        </TabPane>
        <TabPane tab='Dates' key='2'>
          <Card>
            <Row gutterWidth={16}>
              <Col lg={2}>
                <FormItem label='Entry Date ' error={errors?.entrydate}>
                  <Controller
                    name='entrydate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('entrydate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label='Approval Date ' error={errors?.approvaldate}>
                  <Controller
                    name='approvaldate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('approvaldate')}
                  />
                </FormItem>
              </Col>

              <Col lg={2}>
                <FormItem label='Sup Ship Date ' error={errors?.suppliershipmentdate}>
                  <Controller
                    name='supshipdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('supshipdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' Shipment Date ' error={errors?.shipmentdate}>
                  <Controller
                    name='shipmentdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('shipmentdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={12}>
                <Divider orientation='center'>Approval Deadlines</Divider>
              </Col>

              <Col lg={2}>
                <FormItem label=' Fabric '>
                  <Controller
                    name='fabricdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('fabricdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' Color '>
                  <Controller
                    name='colordate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('colordate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' Fit '>
                  <Controller
                    name='fitdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('fitdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' Internal Test '>
                  <Controller
                    name='internaltestdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('internaltestdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' International Test '>
                  <Controller
                    name='internationaltestdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('internationaltestdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={1}></Col>
              <Col lg={1}></Col>
              <Col lg={2}>
                <FormItem label=' Printing '>
                  <Controller
                    name='printingdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('printingdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' Size Set '>
                  <Controller
                    name='sizesetdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('sizesetdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' Pre Pro '>
                  <Controller
                    name='preprodate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('preprodate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' Washing '>
                  <Controller
                    name='washingdate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('washingdate')}
                  />
                </FormItem>
              </Col>
              <Col lg={2}>
                <FormItem label=' Accessory '>
                  <Controller
                    name='accessorydate'
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                    {...register('accessorydate')}
                  />
                </FormItem>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Card>
        </TabPane>
        <TabPane tab='Color-Size' key='3'>
          Color-Size
        </TabPane>
        <TabPane tab='Accessories' key='4'>
          Accessories
        </TabPane>
        <TabPane tab='Fitting' key='5'>
          <Card>
            <Row>
              <Col lg={3} className='border-r'>
                <h1> Fitting Approval </h1>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Fit / Pps</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Size Set</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Top / Gold</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Prod Sample</span>
                </label>
              </Col>
              <Col lg={3} className='border-r'>
                <h1> Test Approval </h1>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Internal Wash Test</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>International Wash Test</span>
                </label>
              </Col>
              <Col lg={3} className='border-r'>
                <h1> Shipment Approval </h1>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Top Sample</span>
                </label>
              </Col>
              <Col lg={3}>
                <h1> More Approval </h1>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Print-Embroidery</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Wash</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Bom</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>QIMA</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer  '>
                  <Checkbox className='' />
                  <span>Hanger</span>
                </label>
              </Col>
            </Row>
          </Card>
        </TabPane>
        <TabPane tab='Note' key='6'>
          <Col lg={12}>
            <FormItem htmlFor='Note' label='Note'>
              <Input.Textarea rows={4} autoComplete='off' id='note' name='note' type='text' />
            </FormItem>
          </Col>
        </TabPane>
        <TabPane tab='Company' key='7'>
          Company
        </TabPane>
      </Tabs>

      <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
        Save
      </button>
    </form>
  );
};

export default CreatePoForm;
