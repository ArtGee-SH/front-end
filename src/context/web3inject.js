

import React, { useState, useEffect, useMemo } from 'react';

import {
  isWeb3Injected,
  // web3Accounts,
  web3Enable,
  // web3FromAddress
} from '@polkadot/extension-dapp';


export const Web3InjectContext = React.createContext([]);


export const Web3InjectProvider = ({children}) => {

  const [isInjected, updateIsInjected] = useState(false);
  const [isEnabled, updateIsEnabled] = useState(false);
  const [ provider, updateProvider] = useState(null);

  useEffect(() => {
    async function init () {
      if(isWeb3Injected) {
        updateIsInjected(true);
        const result = await web3Enable('cryptoindus-front-end');
        console.log('result', result);
        // const source = 'polkadot-js';
        // const found = source && result.find(({ name }) => name === source);
        // console.log('found', found);
        if(result) {
          updateIsEnabled(true);
          // updateProvider(found.provider);
        }
      }
    }
    init();
  }, []);

  const _context = useMemo(() => {
    return {
      isInjected,
      isEnabled,
      provider,
    }
  }, [isInjected, isEnabled, provider])
  return (
    <Web3InjectContext.Provider value={_context}>
      {children}
    </Web3InjectContext.Provider>
  );

}
