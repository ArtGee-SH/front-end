import styles from './style.less';

const Tabs = [{
  name: '首页',
  url: '/',
  code: 'home',
},{
  name: '玩法',
  url: '/play',
  code: 'play',
}, {
  name: '市集',
  url: '/market',
  code: 'market',
},{
  name: '名录',
  url: '/list',
  code: 'list',
},{
  name: '注册',
  url: '/signup',
  code: 'signup',
},{
  name: '中/En',
  // url: '',
  code: 'lang',
}]

const Head = () => {
  return <div className={styles.head_wrapper}>
    <div>banner</div>
    <div className={styles.tabs_wrapper}>{
      Tabs.map((tab) => {
        return (
          <div className={styles.tab} key={tab.code}>
            {tab.name}
          </div>
        );
      })
    }</div>
  </div>;
};

Head.displayName = 'Head';
export default Head;
