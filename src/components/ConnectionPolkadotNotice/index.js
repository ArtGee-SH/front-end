// import  useApi from '@/hooks/useApi';
import { useCallback, useContext } from 'react';

import { Web3InjectContext } from '@/context/web3inject';
import styles from './style.less'

const ConnectionPolkadotNotice = () => {
  // const { isApiConnected, isWaitingInjected } = useApi();

  const web3injectCtx = useContext(Web3InjectContext);
  if (!web3injectCtx.isInjected) {
    return <div className={styles.notice}>请安装或启用插件</div>;
  } else if(!web3injectCtx.isEnabled) {
    return <div className={styles.notice}>请同意授权</div>;
  }
  return null;
};

export default ConnectionPolkadotNotice;
