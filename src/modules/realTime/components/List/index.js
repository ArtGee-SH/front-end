import { useCallback } from 'react';

import router from 'umi/router';

import Avatar from '@material-ui/core/Avatar';

import styles from './style.less';

const CmptList = ({ items }) => {
  // const [ ] =

  const goUser = useCallback((e) => {
    const { uid } = e.currentTarget.dataset;
    if(uid){
      router.push(`/user/${uid}`)
    }
  }, []);
  return (
    <div className={styles.cmpt_list}>
      {items.map(item => {
        return (
          <div data-uid={item.id} key={item.id} className={styles.list_row} onClick={goUser}>
            <Avatar variant="rounded" src={item.thumbnail} className={styles.avatar} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CmptList;
