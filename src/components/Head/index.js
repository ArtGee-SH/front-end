
import { useCallback, useState, useEffect } from 'react';
import classnames from 'classnames';
import router from 'umi/router';


import ConnectionPolkadotNotice from '@/components/ConnectionPolkadotNotice';

import useLocale from '@/hooks/useLocale';

import Logo from '@/assets/logo.png';

import styles from './style.less';

const Tabs = [
  {
    name: '首页',
    url: '/',
    code: 'home',
  },
  {
    name: '玩法',
    url: '/play',
    code: 'play',
  },
  {
    name: '市集',
    url: '/market',
    code: 'market',
  },
  {
    name: '名录',
    url: '/directory',
    code: 'directory',
  },
  {
    name: '注册',
    url: '/wallet',
    code: 'wallet',
  },
  {
    name: '中/En',
    url: '__lang__',
    code: 'lang',
  },
];

const Head = (props) => {

  const { pathname } = props.location
  const [curtab, updateCurTab] = useState('');
  const { setLocale, getLocale } = useLocale();

  useEffect(() => {
    const _curTab = Tabs.filter(v => v.url && v.url === pathname);
    if(_curTab.length){
      updateCurTab(_curTab[0].code)
    }
  }, [pathname])
  const onClick = useCallback((e) => {
    const url = (e.target.dataset || {}).url;
    if(url === '__lang__') {
      const nextLocale = getLocale() === 'zh-CN' ? 'en-US' : 'zh-CN';
      setLocale(nextLocale);
      return;
    }
    if(url) {
      router.push(url);
    }
  }, []);
  return (
    <div id="app_head" className={styles.head_wrapper}>
      <ConnectionPolkadotNotice />
      <div className={styles.header_wrapper}>
        <div>
          <img src={Logo}  alt="" className={styles.logo} />
        </div>
        <div className={styles.tabs_wrapper}>
          {Tabs.map(tab => {
            return (
              <div
                className={classnames(styles.tab, curtab === tab.code ? styles.active_tab : '')}
                data-url={tab.url}
                onClick={onClick}
                key={tab.code}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Head.displayName = 'Head';
export default Head;
