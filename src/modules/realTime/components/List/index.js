import Avatar from '@material-ui/core/Avatar';

import styles from './style.less';

const CmptList = ({ items }) => {
  // const [ ] =
  return (
    <div className={styles.cmpt_list}>
      {items.map(item => {
        return (
          <div key={item.id} className={styles.list_row}>
            <Avatar variant="rounded" src={item.thumbnail} className={styles.avatar} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CmptList;
