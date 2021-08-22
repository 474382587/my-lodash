import React, { useEffect } from 'react';
import { ReactComponent as SVG } from '../../../images/arch2.svg';

import './option1.less';

export default ({ clickCallback }) => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('svg>image>title'));
    console.log(elements);
  }, []);

  return (
    <SVG
      onMouseOver={(event: React.SyntheticEvent<MouseEvent>) => {
        if ((event.target as HTMLElement).id) {
          console.log((event.target as HTMLElement).id);
        }
      }}
      onClick={(e) => {
        if (e.target.id) clickCallback(e.target.id);
      }}
    />
  );
};
