import React, { useEffect, useState } from 'react';
import Page from '../../components/layout/Page';
import { Tabs, Radio, Space, Divider } from 'antd';
import ShipmentTypeComponent from '../../components/settings/shipment-type/ShipmentTypeComponent';
import DeliveryTermsComponent from '../../components/settings/delivery-terms/DeliveryTermsComponent';

const { TabPane } = Tabs;

const Descriptions = ({ shipmentTypes }) => {
  const [activeTab, setActiveTab] = useState('1');

  function callback(key) {
    setActiveTab(key);
  }

  console.log(activeTab);

  return (
    <Page title='Descriptions' header={'Descriptions'}>
      <Space style={{ marginBottom: 24 }}></Space>
      <Tabs tabPosition={'left'} defaultActiveKey='1' onChange={callback}>
        <TabPane tab='Certificates' key='1'>
          Content of Tab 1
        </TabPane>
        <TabPane tab='Countries' key='2'>
          Content of Tab 2
        </TabPane>
        <TabPane tab='Delivery Terms' key='3'>
          <DeliveryTermsComponent />
        </TabPane>
        <TabPane tab='Department' key='4'>
          Content of Tab 3
        </TabPane>
        <TabPane tab='Payment Term' key='5'>
          Content of Tab 3
        </TabPane>
        <TabPane tab='Seasons' key='6'>
          Content of Tab 3
        </TabPane>
        <TabPane tab='Shipment Type' key='7'>
          <ShipmentTypeComponent shipmentTypes={shipmentTypes} />
        </TabPane>
        <TabPane tab='Default Sizes' key='8'></TabPane>
      </Tabs>
    </Page>
  );
};

export default Descriptions;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/api/getAllShipmentTypes`);
  const shipmentTypes = await res.json();

  return {
    props: { shipmentTypes }, // will be passed to the page component as props
  };
}
