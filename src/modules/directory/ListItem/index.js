
import { useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';


import classnames from 'classnames';

import { _t } from '@/utils/lang';

import styles from './style.less';

const CmptListItem = ({ item, className, onClick = () => {} }) => {

  const _clas = classnames(styles.cmpt_list_item, className || '');

  const _onClick = useCallback((e) => {
    e.persist();
    onClick(e, item);
  }, []);

  return (
    <div className={_clas} onClick={_onClick}>
      <div className={styles.info}>
        <div>
          <Avatar className={styles.info_thumbnail} variant="rounded" alt="Remy Sharp" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3932596478,3048748214&fm=26&gp=0.jpg" />
        </div>
        <div>
           <div className={styles.info_title}>Alice</div>
  <div className={styles.info_more}>{_t('user.p.artist')}</div>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.col}>
          <div className={styles.col_title}>{_t('p.quantity')}</div>
          <div className={styles.col_val}>234234</div>
        </div>
        <div className={styles.col}>
          <div className={styles.col_title}>{_t('p.sold.vol')}</div>
          <div className={styles.col_val}>¥234234</div>
        </div>
        <div className={styles.col}>
  <div className={styles.col_title}>{_t('p.avg.price')}</div>
          <div className={styles.col_val}>¥234234</div>
        </div>
        <div className={styles.col}>
          <div className={styles.col_title}>{_t('p.sold.num')}</div>
          <div className={styles.col_val}>234</div>
        </div>
      </div>
    </div>
  );
}


export default CmptListItem;
