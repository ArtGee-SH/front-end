
import TabFilters from '@/components/TabFilters';

import styles from './style.less';

const TYPES = [{
  name: '已有定价',
  code: 'Priced'
}, {
  name: '接受加价',
  code: 'Negotiated'
}, {
  name: '未开封',
  code: 'New'
}];

const SORTERS = [{
  name: '从高到低',
  code: 'decrease'
}, {
  name: '从低到高',
  code: 'increase'
}]

const Market = () => {
  return (
    <div className={styles.mod_market}>
      <div>
      <TabFilters value="Priced" items={TYPES} className={styles.types_wrapper} />
      <TabFilters items={SORTERS} className={styles.sorts_wrapper} />
      </div>
      <div>
        list
      </div>
    </div>
  );
};

export default Market;
