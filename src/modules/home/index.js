// import { useEffect, useContext } from 'react';
import classnames from 'classnames';
import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import DirectionsIcon from '@material-ui/icons/Directions';
import Paper from '@material-ui/core/Paper';
import ListBlock from './ListBlock';
import InfoBlock from './InfoBlock';

// import LocaleContext from '@/context/locale';
import useLocale from '@/hooks/useLocale';

import { _t } from '@/utils/lang';

import InfoImage1 from '@/assets/info_img1.png';
import InfoImage2 from '@/assets/info_img2.png';

import BannerEn from '@/assets/home/banner_en.png';
import BannerCn from '@/assets/home/banner_cn.png';

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

const bannerMap = {
  'zh-CN': BannerCn,
  'en-US': BannerEn
}

const ModHome = () => {
  const { getLocale } = useLocale();
  const lang = getLocale();
  return (
    <div className={styles.mod_home}>
      <div className={styles.banner} style={{ backgroundImage: `url('${bannerMap[lang] || BannerEn}')`}}>
        <div className={styles.banner_title}>
          {/* <div>传统艺术是个别人的游戏</div>
          <div>加密艺术是所有人的游戏</div> */}
          <div className={styles.banner_tip}>{_t('p.explore')}</div>
        </div>
        {/* <div className={styles.banner_tip}>即刻探索</div> */}
      </div>
      <div className={styles.content}>
        <div className={styles.row}>{ListBlock(dataSourceRea2, _t('list.popular'), '/market')}</div>
        <div className={styles.row}>{ListBlock(dataSourceReal, _t('list.realtime'), '/market/realtime')}</div>
        <div className={styles.row}>
          {InfoBlock({
            title:  _t('user.artist'),
            contents: [
              _t('p.para1.1'),
              _t('p.para1.2'),
              _t('p.para1.3'),
              _t('p.para1.4'),
              _t('p.para1.5'),
              _t('p.para1.6'),
            ],
            image: InfoImage1,
            buttons: [
              {
                text: _t('p.start.collection'),
                link: '/wallet'
              },
            ],
          })}
        </div>
        <div className={styles.row}>
          {InfoBlock(
            {
              title:_t('user.collector'),
              contents: [
                _t('p.para2.1'),
                _t('p.para2.2'),
                _t('p.para2.3'),
                _t('p.para2.4')
              ],
              image: InfoImage2,
              buttons: [
                {
                  text: _t('p.abandan'),
                  className: styles.give,
                },
                {
                  text: _t('p.realization'),
                  link: '/apply'
                },
              ],
            },
            true,
          )}
        </div>
        <div className={`${styles.row} ${styles.row_sub}`}>
          <div className={classnames(styles.row_title, 'en-app-font')}>{_t('p.subscribe.new')}</div>
          <Paper className={styles.subscribe}>
            <InputBase
              className={styles.input}
              placeholder="Email"
              inputProps={{ 'aria-label': 'Email' }}
            />
            <div className={styles.addon}>{_t('p.subscribe')}</div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default ModHome;
