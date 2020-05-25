import styles from './style.less';

const Foot = () => {
  return (
    <div className={styles.cmpt_foot}>
      <div className={styles.app_info}>
        <div className={styles.app_name}>CRYPTOINDUS</div>
        <div className={styles.app_com}>
          <div>加密艺术品交易所</div>
          <div>&copy;2020-2021 CRYPTOINDUS</div>
        </div>
      </div>
      <div className={styles.contact}>
      合作请洽 feliciache@163.com
      </div>
    </div>
  );
};

export default Foot;
