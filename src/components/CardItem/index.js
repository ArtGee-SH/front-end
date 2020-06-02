
import { useCallback, useMemo } from 'react';
import router from 'umi/router';
import classnames from 'classnames';
import styles from './style.less';

const CardItem = ({ className, info }) => {

  const onClick = useCallback((e) => {
    const { item } = e.target.dataset;
    const _item = JSON.parse(item);
    router.push( `/artvunue/${_item.id || 1}`)
  }, []);

  const _info = useMemo(() => {
    return JSON.stringify(info);
  }, [info]);

  const _clas = classnames(styles.cmpt_card_item, className || '');
  const _style = info && info.image ? {backgroundImage: `url(${info.image})`} : undefined;
  return (
    <div data-item={_info} className={_clas} style={_style} onClick={onClick}>
      <div className={`${styles.info_wrapper} info_wrapper`}>
        <span className={`${styles.info_owner}`}>@owner</span>
        <span>price</span>
        <span>negonation</span>
      </div>
    </div>
  );
}


export default CardItem;
