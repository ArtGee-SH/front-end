import { Web3InjectProvider } from '@/context/web3inject';
import { PolkadotProvider } from '@/context/polkadot';
import { AccountsProvider } from '@/context/accounts';
import { BalanceProvider } from '@/context/balance';
import Head from '@/components/Head';

import styles from './index.less';

const pathesWithoutPaddingTop = ['/'];

function BasicLayout(props) {

  const { pathname } = props.location;

  const _withoutPaddingTop = pathesWithoutPaddingTop.some(v => v === pathname);
  console.log('props', props);

  return (
    <Web3InjectProvider>
        <PolkadotProvider>
          <AccountsProvider>
            <BalanceProvider>
              <div className={styles.app_wrapper}>
                <Head />
                <div className={`${styles.app_body} ${_withoutPaddingTop ? styles.app_body_padding_top0: ''}`}>{props.children}</div>
              </div>
            </BalanceProvider>
          </AccountsProvider>
        </PolkadotProvider>
    </Web3InjectProvider>
  );
}

export default BasicLayout;
