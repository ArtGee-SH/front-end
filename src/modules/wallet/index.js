

import useLocale from '@/hooks/useLocale';
import { _t } from '@/utils/lang';


import BannerImgCn from '@/assets/wallet@2x.png';
import BannerImgEn from '@/assets/wallet_en.png';

import styles from './style.less';

const BannerMap = {
  'zh-CN': BannerImgCn,
  'en-US': BannerImgEn,
}

const ModWallet = () => {

  const { getLocale } = useLocale();

  const lang = getLocale();

  return (
    <div className={styles.mod_wallet}>
      <div className={styles.banner} style={{ backgroundImage: `url('${BannerMap[lang] || BannerImgEn}')`}} />
      <div>
        <span className={`app_btn ${styles.btn}`}>
          {_t('wallet.connect')}
        </span>
      </div>
    </div>
  );
}

export default ModWallet;
