import React, { useState, useMemo, useContext, useEffect } from 'react';

import { ApiPromise, WsProvider } from '@polkadot/api';

import { Web3InjectContext } from '@/context/web3inject';

  const WS_PROVIDER = 'wss://dev-node.substrate.dev:9944';


export const PolkadotContext = React.createContext({
  api: null,
  apiReady: false,
});

export const PolkadotProvider = ({ children }) => {
  const [api, updateApi] = useState(null);
  const [apiReady, updateApiReady] = useState(false);
  const web3injectCtx = useContext(Web3InjectContext);

  const context = useMemo(() => {
    return {
      api,
      apiReady,
    };
  }, [api, apiReady]);
  useEffect(() => {
    if (web3injectCtx.provider && web3injectCtx.isEnabled && web3injectCtx.isInjected){
      const provider = new WsProvider(WS_PROVIDER);

      ApiPromise.create({ provider })
        .then((apiIns) => {
          updateApi(apiIns);
          apiIns.isReady.then(() => updateApiReady(true));
        })
        .catch((e) => console.error(e));
    }

  }, [web3injectCtx]);
  return <PolkadotContext.Provider value={context}>{children}</PolkadotContext.Provider>;
};
