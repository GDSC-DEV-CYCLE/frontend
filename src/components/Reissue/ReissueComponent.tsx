import React, { useEffect } from 'react';

import Authentication from '../../utils/Authentication';

const ReissueComponent = () => {
  useEffect(() => {
    setInterval(async () => {
      await Authentication.ReissueTokens();
    }, 60 * 1000);
  });
  return null;
};

export default ReissueComponent;
