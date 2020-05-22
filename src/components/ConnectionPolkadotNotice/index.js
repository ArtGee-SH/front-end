// import  useApi from '@/hooks/useApi';
import { useCallback } from 'react';
import {
  isWeb3Injected,
  // web3Accounts,
  web3Enable,
  // web3FromAddress
} from '@polkadot/extension-dapp';

import styles from './style.less'

const ConnectionPolkadotNotice = () => {
  // const { isApiConnected, isWaitingInjected } = useApi();

  const init = useCallback(async () => {
    const result = await web3Enable('polkadot-js/apps');
    console.log('authried', result)
  }, []);

  console.log('isWeb3Injected', isWeb3Injected);
  if (!isWeb3Injected) {
    return <div className={styles.notice}>请安装或启用插件</div>;
  } else {
    init();
  }
  return null;
};

export default ConnectionPolkadotNotice;
