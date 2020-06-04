


import styles from './style.less';
import { _t } from '@/utils/lang';


const UserLine = (props) => {
  const { thumbnail, name, email, collection, produce, size = 12 } = props.userinfo;

  const _style = {
    backgroundImage: `url('${thumbnail}')`,
    width: `${size}rem`,
    height: `${size}rem`,
  }
  return (
    <div className={styles.cmpt_user_line} style={{ height: `${size}rem` }}>
          <div className={styles.thumbnail_wrapper}>
            <div className={styles.thumbnail} style={_style} />
          </div>
          <div className={styles.col_info}>
            <div className={styles.col_header}>{name}</div>
            <div className={styles.col_footer}>{email}</div>
          </div>
          <div className={styles.col_num}>
            <div className={styles.col_header}>{_t('num.collection')}</div>
            <div className={styles.col_footer}>{collection}</div>
          </div>
          <div className={styles.col_num}>
            <div className={styles.col_header}>{_t('num.creation')}</div>
            <div className={styles.col_footer}>{produce}</div>
          </div>
        </div>
  );
}


export default UserLine;
