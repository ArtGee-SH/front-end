
import React from 'react';
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

// export function rootContainer(container) {

//   const DvaContainer = require('@tmp/DvaContainer').default;
//   return React.createElement(DvaContainer, null, container);
// }
