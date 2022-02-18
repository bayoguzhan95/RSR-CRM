import { Col, Row } from 'react-grid-system';
import Card from '../components/antdform/card/card';
import FormItem from '../components/antdform/form-item/FormItem';
import Input from '../components/antdform/input/input';
import Page from '../components/Layout/Page';
import { currency, paymentTerm } from '../constant/constant';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  return (
    <Page title={'Create User'}>
      <form>
        <Card>
          <fieldset className='mb-6 text-lg font-bold'>
            <legend>Create PO</legend>
          </fieldset>

          <Row gutterWidth={16}>
            <Col lg={6}>
              <FormItem label='PO'>
                <Input autoComplete='off' placeholder='Enter a PO' id='po' name='po' type='text' />
              </FormItem>
            </Col>

            <Col lg={6}>
              <FormItem label='Style'>
                <Input autoComplete='off' placeholder='Enter a Style' id='style' name='style' type='text' />
              </FormItem>
            </Col>
            <Col lg={12}>
              <FormItem htmlFor='description' label='Description'>
                <Input.Textarea rows={4} autoComplete='off' id='description' name='description' type='text' />
              </FormItem>
            </Col>
            <Col lg={2}>
              <FormItem htmlFor='price' label='Price'>
                <Input className="!h-[37px]" autoComplete='off' placeholder='Enter a Price' id='price' name='price' type='text' />
              </FormItem>
            </Col>
            <Col lg={2}>
              <FormItem label='Currency '>
                <Controller
                  name='currency'
                  control={control}
                  render={({ field }) => <Select instanceId='currency' {...field} options={currency} />}
                />
              </FormItem>
            </Col>
            <Col lg={2} >
            </Col>

            <Col lg={6}>
              <FormItem label='Payment Term'>
                <Controller
                  name='paymentTerm'
                  control={control}
                  render={({ field }) => <Select instanceId='paymentTerm' {...field} options={paymentTerm} />}
                />
              </FormItem>
            </Col>
          </Row>
        </Card>
      </form>
    </Page>
  );
}
