

import classnames from 'classnames';
import styles from './style.less';

const CardItem = ({ className, info }) => {

  const _clas = classnames(styles.cmpt_card_item, className || '');
  const _style = info && info.image ? {backgroundImage: `url(${info.image})`} : undefined;
  return (
    <div className={_clas} style={_style}>
      <div className={`${styles.info_wrapper} info_wrapper`}>
        <span className={`${styles.info_owner}`}>@owner</span>
        <span>price</span>
        <span>negonation</span>
      </div>
    </div>
  );
}


export default CardItem;
