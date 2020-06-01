

import classnames from 'classnames';
import CardItem from '@/components/CardItem'

import styles from './style.less';



const MarketList = (props) => {
  const { items = [], className } =  props
  return (
    <div className={classnames(styles.cmpt_market_list, className || '')}>
      { items.map(item => {
        return <div className={styles.list_item} key={item.id}>
        <CardItem className={styles.card_item} info={item} />
      </div>
      })}
    </div>
  );
}


export default MarketList;
