


import MatePagination from '@material-ui/lab/Pagination';

import styles from './style.less';

const Pagination = (props) => {
  return (
    <div className={styles.cmp_pagination}>
        <MatePagination {...props} />
    </div>
  );
}

export default Pagination;
