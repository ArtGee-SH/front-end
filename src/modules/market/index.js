import { useEffect, useState, useContext, useCallback } from 'react';

import Pagination from '@material-ui/lab/Pagination';

import TabFilters from '@/components/TabFilters';
import CardItem from '@/components/CardItem';

// import keyring from '@polkadot/ui-keyring';

import { PolkadotContext } from '@/context/polkadot';

import styles from './style.less';

const TYPES = [
  {
    name: '已有定价',
    code: 'Priced',
  },
  {
    name: '接受加价',
    code: 'Negotiated',
  },
  {
    name: '未开封',
    code: 'New',
  },
];

const SORTERS = [
  {
    name: '从高到低',
    code: 'decrease',
  },
  {
    name: '从低到高',
    code: 'increase',
  },
];

const dataSource = new Array(23).fill(1).map((v, idx) => {
  return {
    id: idx,
    owner: 'asdfasdf',
    image: 'http://img2.imgtn.bdimg.com/it/u=705534832,2601567304&fm=26&gp=0.jpg',
  };
});

const sliceData = (arr, len) => {
  let _arr = [];
  for (let i = 0; i < arr.length; i = i + len) {
    // console.log(i)
    _arr.push(arr.slice(i, i + len));
  }
  return _arr;
};

const Market = () => {
  const data = [...dataSource];

  const completeRow = useCallback((_row) => {
    const _len = _row.length;
    if(_len < 3) {
      return ['_c_1', '_c_2'].slice(3 - _len).map(i => {
        return (
          <div className={styles.list_item} key={i}>
        </div>
        )
      })
    }
  }, []);

  return (
    <div className={styles.mod_market}>
      <div>
        <TabFilters value="Priced" items={TYPES} className={styles.types_wrapper} />
        <TabFilters items={SORTERS} className={styles.sorts_wrapper} />
      </div>
      <div className={styles.list_wrapper}>
        {sliceData(data, 3).map((row, idex) => {
          return (
            <div key={idex} className={styles.list_row}>
              {row.map(item => {
                return (
                  <div className={styles.list_item} key={item.id}>
                    <CardItem className={styles.card_item} info={item} />
                  </div>
                );
              })}
              {completeRow(row)}
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <Pagination count={10} showFirstButton showLastButton />
      </div>
    </div>
  );
};

export default Market;
