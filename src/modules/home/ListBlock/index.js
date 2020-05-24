

import CardItem from '@/components/CardItem';

import styles from './style.less';


const ListBlock = (list, title) => {

  return (
    <div className={styles.list_block}>
        <div className={styles.list_title}>{title}</div>
        <div className={styles.list_wrapper}>
          {list.map(li => {
            return <div className={styles.list_item} key={li.id}>
              <CardItem info={li} className={styles.card_item}  />
              </div>
          })}
        </div>
        <div className={styles.list_more_wraper}>
          <div className={styles.list_more}>查看更多</div>
        </div>
    </div>
  );
}


export default ListBlock;
