import { Col, Row, PageHeader, Divider } from 'antd';
import React, { useState } from 'react';

import Option1 from './components/option1';
import Summary from './components/Summary';

export default () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <PageHeader backIcon={false} title="Architecture Overview" subTitle="A glance of your org usage" />
      <Divider />

      <Row>
        <Col xl={12} md={24}>
          <div className="container" style={{padding: '30px 0', maxHeight: 600}}>
            <Option1
              clickCallback={(id: string) => {
                setContent(id);
              }}
            />
          </div>
        </Col>
        <Col xl={12} md={24} style={{ padding: '0 30px' }}>
          <Summary />
        </Col>
      </Row>
    </div>
  );
};
