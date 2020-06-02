
import { useCallback, useState, useEffect } from 'react';
import router from 'umi/router';

import Pagination from '@/components/Pagination';
import TabFilters  from '@/components/TabFilters';

import ListItem from './ListItem';

import styles from './style.less'

const Filters = [{
  name: '收藏家',
  code: 'a'
}, {
  name: '艺术家',
  code: 'b'
}]

const ModuleDirectory = (props) => {

  const { query } = props.location;
  const [ curType, updateCurType ] =  useState('a');

  useEffect(() => {
    if(query.t && query.t == 2) {
      updateCurType('b');
    }
  }, []);

  const list = new Array(10).fill(1).map((v, idx) => {
    return {
      id: idx,
    }
  });

  const goDirectoryDetail = useCallback((e, item) => {
    router.push(`/user/${item.id}`);
  }, []);

  return (
    <div className={styles.mod_directory}>
      <TabFilters value={curType} items={Filters} className={styles.tab_filters} />
      <div className={styles.list_wrapper}>
        {list.map(li => {
          return (
            <ListItem onClick={goDirectoryDetail} item={li} key={li.id} className={styles.list_item} />
          );
        })}
      </div>
      <Pagination count={10} showFirstButton showLastButton />
    </div>
  );
}


export default ModuleDirectory
