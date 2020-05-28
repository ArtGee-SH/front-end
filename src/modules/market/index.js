import { useEffect, useState, useContext, useCallback } from 'react';
import { useSelector } from 'dva'

import Pagination from '@material-ui/lab/Pagination';
import TabFilters from '@/components/TabFilters';
import CardItem from '@/components/CardItem';

// import keyring from '@polkadot/ui-keyring';

import { PolkadotContext } from '@/context/polkadot';
import { AccountsContext } from '@/context/accounts';
import useDispatch from '@/hooks/useDispatch';
import useApi from '@/hooks/useApi';

import { getRandomImage, objectToArr, hexToStr } from '@/utils/tools';

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
    image: getRandomImage(),
  };
});

// const dataSource = [];
const sliceData = (arr, len) => {
  let _arr = [];
  for (let i = 0; i < arr.length; i = i + len) {
    // console.log(i)
    _arr.push(arr.slice(i, i + len));
  }
  return _arr;
};

const Market = () => {
  const { keyring } = useContext(PolkadotContext);
  const { accountsLoaded } = useContext(AccountsContext);
  const dispatch = useDispatch('market');
  const artvenues = useSelector( state => state.market.artvenues );
  const api = useApi();

  const data = [...dataSource];

  const completeRow = useCallback(_row => {
    const _len = _row.length;
    if (_len < 3) {
      return ['_c_1', '_c_2'].slice(3 - _len).map(i => {
        return <div className={styles.list_item} key={i}></div>;
      });
    }
  }, []);

  useEffect(() => {
    if (api && accountsLoaded) {
      api.rpc.chain.subscribeNewHeads(lastHeader => {
        console.log(`last block #${lastHeader.number} has hash ${lastHeader.hash}`);
      });
    }
  }, [api, accountsLoaded]);

  // 获取在售的数据
  const getOnSells = useCallback(async () => {
    const result = await api.rpc.market.getOnSells();
    const _artVenues = objectToArr(result.toJSON(), (cur, curData) => {
      return {
        ...curData,
        __id: hexToStr(cur),
      }
    });
    dispatch('update', { artvenues: [..._artVenues] });
    // dispatch({type: 'up'})
  }, [api]);

  // useEffect(() => {
  //   if (api) {
  //     getOnSells();
  //   }
  // }, [api, getOnSells]);

  const test = useCallback(async () => {
    console.log(api);
    try {
      await api.rpc.artists.getArtists(v => {
        console.log(v.toHuman());
      });
      await api.rpc.market.getOnSells(v => {
        console.log('market', v.toHuman());
      });
      await api.rpc.artvenuses.getArtvenuses(v => {
        console.log('getArtvenuses', v.toJSON());
      });
      await api.rpc.artvenuses.getArtvenusesByArtist('0', v => {
        console.log('getArtvenusesByArtist', v.toJSON());
      });
      await api.rpc.artvenuses.getArtvenusesByHolder(
        '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
        v => {
          console.log('getArtvenusesByHolder', v.toJSON());
        },
      );
    } catch (e) {
      console.log(e);
    }
    // console.log();
    // const aa = await api.rpc.rpc.methods();
    // console.log('aa', aa);

    // await api.rpc.chain.subscribeAllHeads(h => {
    //   console.log(h.toJSON());
    // })
    // await api.rpc.chain.onSell((sells) => {
    //   console.log('==========>>>', sells)
    //   // console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
    // });
    // const { nonce, data: balance } = await api.query.system.account('5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y');
    // const aa = await api.query.system.account('5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y')
    // console.log('now', now, nonce, balance);
  }, [api]);


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
