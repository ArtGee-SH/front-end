
import React, { useContext, useEffect, useState, useMemo } from 'react';

import { AccountsContext } from '@/context/accounts';
import { PolkadotContext } from '@/context/polkadot';

export const BalanceContext = React.createContext({});

export const BalanceProvider = ({ children }) => {

  const [balances, updateBalances] = useState({})
  const { api,apiReady, keyring } = useContext(PolkadotContext);
  const { accountsLoaded } = useContext(AccountsContext);

  useEffect(() => {
    let unsubscribeAll
    if(apiReady && accountsLoaded ){

      const accounts = keyring.getPairs();
      const addresses = accounts.map(account => account.address);
      // const accountNames = accounts.map((account) => account.meta.name);

      api.query.balances.freeBalance
      .multi(addresses, (currentBalances) => {

        const balancesMap = addresses.reduce((acc, address, index) => ({
          ...acc,
          [address]: currentBalances[index].toString()
        }), {});

        updateBalances(balancesMap);
        // console.log('change', balancesMap)
      })
      .then(unsub => { unsubscribeAll = unsub; })
      .catch(console.error);

     return () => unsubscribeAll && unsubscribeAll();
    }

  }, [api, updateBalances, accountsLoaded, apiReady]);

  const _context = useMemo(() => {
    return {
      balances
    }
  }, [balances]);

  return (
    <BalanceContext.Provider value={_context}>
      {children}
    </BalanceContext.Provider>
  );
}
