import Page from '../../../components/layout/Page';
import React from 'react';
import axios from 'axios';
import EmployeeForm from '../../../components/forms/employeeform';

const CreateEmployee = () => {
  const onSubmit = async (formData) => {
    console.log(formData);
    // const {
    //   name,
    //   surname,
    //   username,
    //   email,
    //   password,
    //   phone,
    //   department,
    //   status,
    //   followedby,
    //   followedbyfit,
    //   orders,
    //   quotesheet,
    //   finance,
    //   proformas,
    //   traffic,
    //   companies,
    //   reports,
    //   packing,
    //   quality,
    //   employees,
    //   settings,
    //   shipmentplan,
    // } = formData;

    // const { data } = await axios.post(`/api/register`, {
    //   name,
    //   surname,
    //   username,
    //   email,
    //   password,
    //   phone,
    //   department,
    //   status,
    //   followedby,
    //   followedbyfit,
    //   orders,
    //   quotesheet,
    //   finance,
    //   proformas,
    //   traffic,
    //   companies,
    //   reports,
    //   packing,
    //   quality,
    //   employees,
    //   settings,
    //   shipmentplan,
    // });
  };

  return (
    <Page title={'Create User'}>
      <EmployeeForm onSubmit={onSubmit} />
    </Page>
  );
};

export default CreateEmployee;
