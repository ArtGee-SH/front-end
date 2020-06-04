
import { useCallback } from 'react';
import router from 'umi/router';

import { v4 as uuidv4 } from 'uuid';

import CmptList from './components/List';
import CmptMarketList from './components/MarketList';

import { getRandomImage } from '@/utils/tools';

import styles from './style.less';
import { _t } from '@/utils/lang';

const ModRealTime = () => {

  const goPage = useCallback((e) => {
    const { page } = e.target.dataset;
    router.push(page);
  }, []);

  const UserList = new Array(4).fill(1).map(i => {
    return {
      id: uuidv4(),
      name: uuidv4().slice(2,8),
      thumbnail: getRandomImage(),
    }
  });

  const dataSource = new Array(23).fill(1).map((v, idx) => {
    return {
      id: uuidv4(),
      owner: uuidv4().slice(2,8),
      image: getRandomImage(),
    };
  });

  return (
    <div className={styles.mod_realtime}>
      <div className={styles.user_list}>
  <div className={styles.list_title} data-page="/directory?t=1" onClick={goPage}>{_t('user.topcollecor')}</div>
        <CmptList items={UserList} />
        <div className={styles.divider} />
        <div className={styles.list_title} data-page="/directory?t=2" onClick={goPage}>{_t('user.trendingartist')}</div>
        <CmptList items={UserList} />
      </div>
      <CmptMarketList className={styles.market_list} items={dataSource} />
    </div>
  );
}

export default ModRealTime;
