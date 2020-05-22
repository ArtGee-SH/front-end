
import TabFilters from '@/components/TabFilters';
import CardItem from '@/components/CardItem';

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
}];

const dataSource = new Array(23).fill(1).map((v, idx)=> {
  return {
    id: idx,
    owner: 'asdfasdf',
    image: 'http://img0.imgtn.bdimg.com/it/u=1594910827,1412095439&fm=26&gp=0.jpg',
  }
});

const sliceData = (arr, len) => {
  let _arr = [];
  for(let i = 0; i< arr.length; i=i+len){
    // console.log(i)
    _arr.push(arr.slice(i, i+len));
  }
  return _arr;
}

const Market = () => {
  const data = [...dataSource];
  return (
    <div className={styles.mod_market}>
      <div>
      <TabFilters value="Priced" items={TYPES} className={styles.types_wrapper} />
      <TabFilters items={SORTERS} className={styles.sorts_wrapper} />
      </div>
      <div className={styles.list_wrapper}>
        {sliceData(data, 4).map(row => {
          return row.map(item => {
            return (
              <div className={styles.list_item} key={item.id}>
                <CardItem  info={item} />
              </div>
            )
          })
        })}
      </div>
    </div>
  );
};

export default Market;
