
import Avatar from '@material-ui/core/Avatar';


import classnames from 'classnames';


import styles from './style.less';

const CmptListItem = ({ item, className }) => {

  const _clas = classnames(styles.cmpt_list_item, className || '');
  return (
    <div className={_clas}>
      <div className={styles.info}>
        <div>
          <Avatar className={styles.info_thumbnail} variant="rounded" alt="Remy Sharp" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3932596478,3048748214&fm=26&gp=0.jpg" />
        </div>
        <div>
           <div className={styles.info_title}>title</div>
           <div className={styles.info_more}>艺术家</div>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.col}>
          <div className={styles.col_title}>作品数量</div>
          <div className={styles.col_val}>234234</div>
        </div>
        <div className={styles.col}>
          <div className={styles.col_title}>总卖出</div>
          <div className={styles.col_val}>¥234234</div>
        </div>
        <div className={styles.col}>
          <div className={styles.col_title}>平均卖出价格</div>
          <div className={styles.col_val}>¥234234</div>
        </div>
        <div className={styles.col}>
          <div className={styles.col_title}>总售出</div>
          <div className={styles.col_val}>234</div>
        </div>
      </div>
    </div>
  );
}


export default CmptListItem;
