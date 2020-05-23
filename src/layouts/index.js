import { Web3InjectProvider } from '@/context/web3inject';
import { PolkadotProvider } from '@/context/polkadot';
import { AccountsProvider } from '@/context/accounts';
import { BalanceProvider } from '@/context/balance';
import Head from '@/components/Head';

import styles from './index.less';

function BasicLayout(props) {
  return (
    <Web3InjectProvider>
        <PolkadotProvider>
          <AccountsProvider>
            <BalanceProvider>
              <div className={styles.app_wrapper}>
                <Head />
                <div className={styles.app_body}>{props.children}</div>
              </div>
            </BalanceProvider>
          </AccountsProvider>
        </PolkadotProvider>
    </Web3InjectProvider>
  );
}

export default BasicLayout;
