import React, { useState, useEffect } from 'react';

import ArchitectureOverview from './ArchitectureOverview';
import ArchitectureSelection from './ArchitectureSelection';

import './index.less';

const getMockValue = () => {
  const queryParams = window.location.href.split('?')[1]?.split('&');
  if (!queryParams) return false;
  let res = false;
  queryParams.forEach((e) => {
    const val = e.split('=');
    console.log(val);
    if (val[0] === 'selection') {
      console.log(val[1]);
      res = val[1] === 'true';
    }
  });
  return res;
};

const Architecture = () => {
  const [showSelection, setShowSelection] = useState<boolean | undefined>();

  // mock get user information for now -----> TODO
  const getUserInfo = () => {
    setTimeout(() => {
      setShowSelection(getMockValue());
    }, 500);
  };
  /*
    1. determine if the user has selected an architecture
    2. 
  */
  useEffect(() => {
    getUserInfo();
  }, []);

  if (showSelection === undefined) {
    return 'Loading...';
  }

  if (showSelection) {
    return <ArchitectureSelection />;
  }

  return (
    <div>
      <ArchitectureOverview />
    </div>
  );
};

export default Architecture;
