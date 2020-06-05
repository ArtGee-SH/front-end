
import { useCallback, useState, useEffect } from 'react';
import classnames from 'classnames';
import router from 'umi/router';


import ConnectionPolkadotNotice from '@/components/ConnectionPolkadotNotice';

import useLocale from '@/hooks/useLocale';
import { _t } from '@/utils/lang';

import Logo from '@/assets/logo.png';

import styles from './style.less';

const Tabs = [
  {
    name: 'head.home',
    url: '/',
    code: 'home',
  },
  {
    name: 'head.strategy',
    url: '/strategy',
    code: 'play',
  },
  {
    name: 'head.market',
    url: '/market',
    code: 'market',
  },
  {
    name: 'head.directory',
    url: '/directory',
    code: 'directory',
  },
  {
    name: 'head.signin',
    url: '/wallet',
    code: 'wallet',
  },
  {
    name: 'head.lang',
    url: '__lang__',
    code: 'lang',
  },
];

const LangClassMap = {
  'zh-CN': 'app-cn',
  'en-US': 'app-en',
}

const Head = (props) => {

  const { pathname } = props.location
  const [curtab, updateCurTab] = useState('');
  const { updateLang, lang } = useLocale();

  useEffect(() => {
    const _curTab = Tabs.filter(v => v.url && v.url === pathname);
    if(_curTab.length){
      updateCurTab(_curTab[0].code)
    }
  }, [pathname]);
  const onClick = useCallback((e) => {
    const url = (e.target.dataset || {}).url;
    if(url === '__lang__') {
      const nextLocale = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      updateLang(nextLocale);
      document.body.classList.remove(LangClassMap[lang]);
      document.body.classList.add(LangClassMap[nextLocale]);
      return;
    }
    if(url) {
      router.push(url);
    }
  }, [lang]);
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
                {_t(tab.name)}
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
