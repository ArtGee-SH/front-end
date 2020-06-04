
import { useCallback, useState, useEffect } from 'react';
import router from 'umi/router';

import Pagination from '@/components/Pagination';
import TabFilters  from '@/components/TabFilters';

import ListItem from './ListItem';

import styles from './style.less'

const Filters = [{
  name: 'user.p.collector',
  code: 'a'
}, {
  name: 'user.p.artist',
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

  const list = new Array(1).fill(1).map((v, idx) => {
    return {
      id: idx,
      // name: ''
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
      {
        list.length > 10 ? <Pagination count={list.length} showFirstButton showLastButton /> : null
      }
    </div>
  );
}


export default ModuleDirectory
