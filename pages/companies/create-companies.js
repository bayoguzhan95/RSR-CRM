import CreateCompaniesForm from "../../components/forms/CreateCompaniesForm";
import Page from "../../components/layout/Page";

const CreateCompanies = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Page title={'Create Companies'}>
      <CreateCompaniesForm onSubmit={onSubmit} />
    </Page>
  );
};

export default CreateCompanies;
