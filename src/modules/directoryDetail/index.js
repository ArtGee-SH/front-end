import Button from '@material-ui/core/Button';

import Pagination from '@/components/Pagination';
import TabFilters from '@/components/TabFilters';
import CardItem from '@/components/CardItem';
import { getRandomImage } from '@/utils/tools';

import styles from './style.less';
import { useMemo } from 'react';

const Filters = [
  {
    name: '收藏',
    code: 'a',
  },
  {
    name: '创作',
    code: 'b',
  },
];



const ModDirectoryDetail = () => {
  const imageUrl = getRandomImage();

  const list = new Array(1).fill(1).map((v, idx) => {
    return {
      id: idx,
      owner: 'asdfasdf',
      image: getRandomImage(),
    };
  });
  const hasMore = list.length > 3;

  const MoreBtn = useMemo(() => {
    if(!hasMore) {
      return null;
    }
    return (
      <div className="flex-center">
        <Button variant="contained" color="default" className={styles.more_btn}>
          查看更多
        </Button>
      </div>
    );
  }, [hasMore]);
  return (
    <div className={styles.mod_directory_detail}>
      <div className={styles.info_row}>
        <div className={styles.part_left}>
          <div>
            <img className={styles.thumbnail} src={imageUrl} alt="" />
          </div>
          <div className={styles.col_info}>
            <div className={styles.col_header}>露露</div>
            <div className={styles.col_footer}>asdf@www.com</div>
          </div>
          <div className={styles.col_num}>
            <div className={styles.col_header}>收集数</div>
            <div className={styles.col_footer}>90</div>
          </div>
          <div className={styles.col_num}>
            <div className={styles.col_header}>创作数</div>
            <div className={styles.col_footer}>90</div>
          </div>
        </div>
        <div className={styles.part_right}>
          <div className={styles.i_title}>adfsdf.asdf.cd</div>
          <div className={styles.i_content}>
            我对加密艺术的理解是任何人都能玩的一种游戏，而我的创作风趣是趋于抽象感的印象派，我喜欢用特殊的材质，欢迎各位在微博与我联系。或者在CI官方群。
          </div>
        </div>
      </div>

      <div>
        <TabFilters value="b" items={Filters} className={styles.tab_filters} />
        <div className={styles.list_wrapper}>
          {list.map(li => {
            return (
              <div className={styles.list_item} key={li.id}>
                <CardItem info={li} className={styles.card_item} />
              </div>
            );
          })}
        </div>
      </div>
      {MoreBtn}
    </div>
  );
};

export default ModDirectoryDetail;
