import { useEffect } from 'react';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import DirectionsIcon from '@material-ui/icons/Directions';
import Paper from '@material-ui/core/Paper';
import ListBlock from './ListBlock';
import InfoBlock from './InfoBlock';

import InfoImage1 from '@/assets/info_img1.png';
import InfoImage2 from '@/assets/info_img2.png';

import { getRandomImage } from '@/utils/tools';

import styles from './style.less';

const dataSourceReal = new Array(3).fill(1).map((v, idx) => {
  return {
    id: idx,
    owner: 'asdfasdf',
    image: getRandomImage(),
  };
});
const dataSourceRea2 = new Array(3).fill(1).map((v, idx) => {
  return {
    id: idx,
    owner: 'asdfasdf',
    image: getRandomImage(),
  };
});

const ModHome = () => {
  return (
    <div className={styles.mod_home}>
      <div className={styles.banner}>
        <div className={styles.banner_title}>
          <div>传统艺术是个别人的游戏</div>
          <div>加密艺术是所有人的游戏</div>
          <div className={styles.banner_tip}>即刻探索</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>{ListBlock(dataSourceReal, '实时交易')}</div>
        <div className={styles.row}>{ListBlock(dataSourceRea2, '热门作品')}</div>
        <div className={styles.row}>
          {InfoBlock({
            title: '聪明的艺术藏家',
            contents: [
              '拍到你倾慕的作品，作品可以被复制，',
              '但加密技术能让这件作品永远属于你，',
              '它会永远存在在你的钱包里。',
              '当然你也可以以更高价卖出。',
              '去中心化的加密艺术世界，',
              '向世界各地的人展示你的藏品',
            ],
            image: InfoImage1,
            buttons: [
              {
                text: '市场走起',
              },
            ],
          })}
        </div>
        <div className={styles.row}>
          {InfoBlock(
            {
              title: '亲爱的创作者',
              contents: [
                '是否多年的创作却有IP瓶颈 ？',
                '互联网时代不能给你的，区块链可以。',
                '才华不该被埋没，不是吗 ？',
                '坚定艺术梦想',
              ],
              image: InfoImage2,
              buttons: [
                {
                  text: '放弃',
                  className: styles.give,
                },
                {
                  text: '市场走起',
                },
              ],
            },
            true,
          )}
        </div>
        <div className={`${styles.row} ${styles.row_sub}`}>
          <div className={styles.row_title}>订阅新奇</div>
          <Paper className={styles.subscribe}>
            <InputBase
              className={styles.input}
              placeholder="Email"
              inputProps={{ 'aria-label': 'Email' }}
            />
            <div className={styles.addon}>订阅</div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default ModHome;
