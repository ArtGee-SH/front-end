
import React, { useEffect, useContext, useState, useMemo } from 'react';
import {
  web3Accounts,
} from '@polkadot/extension-dapp';

// import UiKeyring from '@polkadot/ui-keyring';

import {Web3InjectContext} from '@/context/web3inject';
import { PolkadotContext } from '@/context/polkadot';


export const AccountsContext = React.createContext({});



export const AccountsProvider = ({ children }) => {

  const [accounts, updateAccounts] = useState([]);
  const [accountsLoaded, updateAccountsLoaded] = useState(false);

  const polkadotCtx = useContext(PolkadotContext);
  const web3Ctx = useContext(Web3InjectContext);

  // 当插件已安装并且已同意授权后获取账户信息
  useEffect(() => {
    async function init() {
      if(web3Ctx.isEnabled && polkadotCtx.keyring) {
        const _accounts = await web3Accounts();
        const injectedAccounts = _accounts.map(({ address, meta }) => {
          return {
            address,
            meta: {
            ...meta,
            name: `${meta.name} (${meta.source})`
            }
          }
        });
        console.log('injectedAccounts', injectedAccounts)
        updateAccounts(injectedAccounts);
        polkadotCtx.keyring.loadAll({
            isDevelopment: true
        }, injectedAccounts);
        updateAccountsLoaded(true);
      }
    }

    try{
      init();
    } catch(e){
      console.log(e)
    }

  }, [web3Ctx.isEnabled, polkadotCtx.keyring]);


  const _context = useMemo(() => {
    return { accounts , accountsLoaded }
  }, [accounts, accountsLoaded])

  return (
    <AccountsContext.Provider value={_context}>
      {children}
    </AccountsContext.Provider>
  );
}
