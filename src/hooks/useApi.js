import React, { useContext } from 'react';
// import { ApiContext } from '@polkadot/react-api';

const ApiContext = React.createContext()
export default function useApi () {
  return useContext(ApiContext);
}
