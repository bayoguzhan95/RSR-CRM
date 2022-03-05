import React, { useEffect, useState } from 'react';
import Page from '../../components/layout/Page';
import { Tabs, Radio, Space, Divider } from 'antd';
import ShipmentTypeComponent from '../../components/settings/shipment-type/ShipmentTypeComponent';
import DeliveryTermsComponent from '../../components/settings/delivery-terms/DeliveryTermsComponent';
import SeasonsComponent from '../../components/settings/seasons/SeasonsComponent';
import CertificatesComponent from '../../components/settings/certificates/CertificatesComponent';
import CountriesComponent from '../../components/settings/countries/CountriesComponent';
import PaymentTermComponent from '../../components/settings/payment-term/PaymentTermComponent';
import SizesComponent from '../../components/settings/sizes/SizesComponent';
import DefaultSizeComponent from '../../components/settings/default-size/DefaultSizeComponent';

const { TabPane } = Tabs;

const Descriptions = () => {
  const [activeTab, setActiveTab] = useState('1');

  function callback(key) {
    setActiveTab(key);
  }
  return (
    <Page title='Descriptions' header={'Descriptions'}>
      <Space style={{ marginBottom: 24 }}></Space>
      <Tabs tabPosition={'left'} defaultActiveKey='1' onChange={callback}>
        <TabPane tab='Certificates' key='1'>
          <CertificatesComponent />
        </TabPane>
        <TabPane tab='Countries' key='2'>
          <CountriesComponent />
        </TabPane>
        <TabPane tab='Delivery Terms' key='3'>
          <DeliveryTermsComponent />
        </TabPane>
        <TabPane tab='Sizes Type' key='4'>
          <SizesComponent />
        </TabPane>
        <TabPane tab='Payment Term' key='5'>
          <PaymentTermComponent />
        </TabPane>
        <TabPane tab='Seasons' key='6'>
          <SeasonsComponent />
        </TabPane>
        <TabPane tab='Shipment Type' key='7'>
          <ShipmentTypeComponent />
        </TabPane>
        <TabPane tab='Default Sizes' key='8'>
          <DefaultSizeComponent />
        </TabPane>
      </Tabs>
    </Page>
  );
};

export default Descriptions;
