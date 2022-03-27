import CreateQuoteSheetForm from '../../components/forms/CreateQuoteSheetForm';
import Page from '../../components/layout/Page';
import { createQuoteSheetApi } from '../../functions/quote-sheet';

const CreateQuoteSheet = () => {
  const onSubmit = (data) => {
    createQuoteSheetApi(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Page title={' Create quote sheet'} header={' Create quote sheet'}>
      <CreateQuoteSheetForm onSubmit={onSubmit} />
    </Page>
  );
};

export default CreateQuoteSheet;
