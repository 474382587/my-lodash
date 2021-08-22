import { Tabs } from 'antd';
import React, { lazy, Suspense } from 'react';

const DB = lazy(() => import('../components/DB'));
const ETL = lazy(() => import('../components/ETL'));

const { TabPane } = Tabs;

const ALL_MODULES = [
  { name: 'DB', key: 'db', content: <DB /> },
  { name: 'Kafka Cluster', key: 'kafka', content: 'This is ' },
  { name: 'ETL', key: 'etl', content: <ETL /> },
  { name: 'Metadata', key: 'metadata', content: 'This is ' },
  { name: 'Dashboard', key: 'dashboard', content: 'This is ' },
  { name: 'Analytics', key: 'analytics', content: 'This is ' },
];

const Summary = () => {
  return (
    <>
      <Tabs defaultActiveKey="db" centered>
        {ALL_MODULES.map((mod) => (
          <TabPane tab={<span>{mod.name}</span>} key={mod.key}>
            <Suspense fallback={'Loading...'}>{mod.content}</Suspense>
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default Summary;
