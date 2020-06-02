import { Web3InjectProvider } from '@/context/web3inject';
import { PolkadotProvider } from '@/context/polkadot';
import { AccountsProvider } from '@/context/accounts';
import { BalanceProvider } from '@/context/balance';
import Head from '@/components/Head';
import Foot from '@/components/Foot';

import styles from './index.less';
import { useEffect } from 'react';

const pathesWithoutPaddingTop = ['/'];

function BasicLayout(props) {
  const { pathname } = props.location;

  const _withoutPaddingTop = pathesWithoutPaddingTop.some(v => v === pathname);
  console.log('props', props);

  useEffect(() => {
    setTimeout(() => {
      try {
        const head = document.querySelector('#app_head');
        const foot = document.querySelector('#app_foot');
        const body = document.querySelector('#app_body');
        body.style.minHeight =
          window.screen.availHeight -
          head.getClientRects()[0].height -
          2 * foot.getClientRects()[0].height +
          2 +
          'px';
        console.log(body.style.minHeight);
      } catch (e) {
        console.log('err', e);
      }
    }, 100);
  }, []);

  return (
    <Web3InjectProvider>
      <PolkadotProvider>
        <AccountsProvider>
          <BalanceProvider>
            <div className={styles.app_wrapper}>
              <Head {...props} />
              <div
                id="app_body"
                className={`${styles.app_body} ${
                  _withoutPaddingTop ? styles.app_body_padding_top0 : ''
                }`}
              >
                {props.children}
              </div>
              <Foot />
            </div>
          </BalanceProvider>
        </AccountsProvider>
      </PolkadotProvider>
    </Web3InjectProvider>
  );
}

export default BasicLayout;
