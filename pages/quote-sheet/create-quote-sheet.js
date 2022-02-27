import CreateQuoteSheetForm from '../../components/forms/CreateQuoteSheetForm';
import Page from '../../components/layout/Page';

const CreateQuoteSheet = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Page title={' Create quote sheet'} header={' Create quote sheet'}>
      <CreateQuoteSheetForm onSubmit={onSubmit} />
    </Page>
  );
};

export default CreateQuoteSheet;
