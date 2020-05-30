

import BannerImg from '@/assets/wallet@2x.png';

import styles from './style.less';

const ModWallet = () => {
  return (
    <div className={styles.mod_wallet}>
      <div className={styles.banner} style={{ backgroundImage: `url('${BannerImg}')`}} />
      <div>
        <span className={`app_btn ${styles.btn}`}>
          链接钱包
        </span>
      </div>
    </div>
  );
}

export default ModWallet;
