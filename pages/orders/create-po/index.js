import Page from '../../../components/layout/Page';
import CreatePoForm from '../../../components/forms/createpoform';

export default function CreatePo() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Page title={'Create PO'} header={"Create PO"} >
      <CreatePoForm onSubmit={onSubmit} />
    </Page>
  );
}
