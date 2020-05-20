
import Head from '@/components/Head';

import styles from './index.less';


function BasicLayout(props) {
  return (
    <div className={styles.app_wrapper}>
      <Head />
      <div className={styles.app_body}>
        {props.children}
      </div>
    </div>
  );
}

export default BasicLayout;
