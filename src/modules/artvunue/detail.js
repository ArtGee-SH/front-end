

import UserLine from '@/components/UserLine';



import ArtImag1 from '@/assets/detail-1.png';
import ArtImag2 from '@/assets/detail-2.png';

import styles from './style.less';
import { _t } from '@/utils/lang';


const userinfo = {
  thumbnail: 'http://img0.imgtn.bdimg.com/it/u=1620609776,1825794982&fm=26&gp=0.jpg',
  name: 'Alice',
  collection: 23,
  produce: 12,
  email: 'ss@123.com'
}

const ArtDetail = () => {


  return (
    <div className={styles.mod_art_detail}>
        <div>
          <UserLine userinfo={userinfo} />
        </div>
        <div className={styles.part_info}>
            <div className={styles.img_wrapper}>
              <img src={ArtImag1} className={styles.img1} alt="" />
            </div>
            <div className={styles.info_wrapper}>
              <div>
                <div className={styles.info_title}>所向披靡#意志</div>
                <div className={styles.info_subtitle}>Edition 1 of 1</div>
                <div className={styles.info_desc}>
                  <p>我将永远忠于自己，</p>
                  <p>披星戴月奔向理想和自由。</p>
                  <p>我将永远忠于自己，</p>
                  <p>温柔无声的奔向我的爱。</p>
                  <br />
                  <p>没有不变的方法论，</p>
                  <p>科学的梦幻泡影。</p>
                  <p>复仇的游戏，</p>
                  <p>从未停止却已经开始。</p>
                  <p>对自己诚实，</p>
                  <p>方能获得所向披靡的意志。</p>
                </div>
              </div>
              <div>
                <div className={styles.start_btn}>
                  {_t('p.start.collectiing')}
                </div>
              </div>
            </div>
        </div>
        <div className={styles.part_his}>
          <div className={styles.his_title}>
            {_t('p.history')}
          </div>
          <div className={styles.his_list}>
            <div className={styles.his_row}>
              <span className={styles.his_u}>大悲宇宙</span>
              <span className={styles.his_a}>出售给</span>
              <span className={styles.his_u}>酒鬼</span>
              <div className={styles.time}>1小时前</div>
            </div>
            <div className={styles.his_row}>
              <span className={styles.his_u}>酒鬼</span>
              <span className={styles.his_a}>{_t('p.bidaprice')}</span>
              <span className={styles.his_u}>19990 DUS</span>
              <div className={styles.time}>1.4小时前</div>
            </div>
            <div className={styles.his_row}>
              <span className={styles.his_u}>秦智倪倪</span>
              <span className={styles.his_a}>{_t('p.bidaprice')}</span>
              <span className={styles.his_u}>19990 DUS</span>
              <div className={styles.time}>3小时前</div>
            </div>
            <div className={styles.his_row}>
              <span className={styles.his_u}>三林西</span>
              <span className={styles.his_a}>{_t('p.bidaprice')}</span>
              <span className={styles.his_u}>19990 DUS</span>
              <div className={styles.time}>12小时前</div>
            </div>
            <div className={styles.his_row}>
              <span className={styles.his_a}>{_t('p.creator')}</span>
              <span className={styles.his_u}>大悲宇宙</span>
              <div className={styles.time}>4年前</div>
            </div>
          </div>
        </div>

        <div className={styles.part_btm}>
          <img src={ArtImag2} className={styles.btm_img} alt="" />
        </div>
    </div>
  );
}


export default ArtDetail;
