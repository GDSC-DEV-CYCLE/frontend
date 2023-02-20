import React, { useEffect } from 'react';

import Authentication from '../../utils/Authentication';

const ReissueComponent = () => {
  useEffect(() => {
    Authentication.ReissueTokens();
    // console.log('Reissue Tokens');
    setInterval(async () => {
      await Authentication.ReissueTokens();
      console.log('Reissue Tokens');
    }, 60 * 1000);
  });
  return null;
};

export default ReissueComponent;
