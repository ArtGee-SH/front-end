import { useContext } from 'react';
// import { ApiContext } from '@polkadot/react-api';
import { PolkadotContext } from '@/context/polkadot'


export default () => {
  return useContext(PolkadotContext).api
}
