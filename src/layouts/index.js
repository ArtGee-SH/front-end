
import {Web3InjectProvider} from '@/context/web3inject';
import {PolkadotProvider} from '@/context/polkadot';
import Head from '@/components/Head';


import styles from './index.less';


function BasicLayout(props) {
  return (
    <Web3InjectProvider>
      <PolkadotProvider>
        <div className={styles.app_wrapper}>
          <Head />
          <div className={styles.app_body}>
            {props.children}
          </div>
        </div>
      </PolkadotProvider>
    </Web3InjectProvider>
  );
}

export default BasicLayout;
