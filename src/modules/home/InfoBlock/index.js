
import { useMemo, useCallback } from 'react';
import router from 'umi/router';
import classnames from 'classnames';


import styles from './style.less';

const InfoBlock = (info, imageLeft = false) => {

  const { title, contents, buttons, image } = info;

  const goLink = useCallback((e)=>{
    const { link } = e.target.dataset;
    if(link) {
      router.push(link);
    }
  }, []);

  const TextPart = useMemo(() => {
    return (
      <div className={styles.part_info}>
          <div className={styles.info_title}>
            {title}
          </div>
          <div className={classnames(styles.info_content, 'en-app-font')}>{
            contents.map((cnt, idx) => {
            return <div key={idx} className={styles.cnt}>{cnt}</div>
            })
          }</div>
          <div className={styles.info_btns}>
            {buttons.map((btn, indx) => {
              return <span data-link={btn.link} onClick={goLink} className={classnames(styles.info_btn, btn.className || '')} key={indx}>{btn.text}</span>
            })}
          </div>
      </div>
    );
  }, [title, contents, buttons]);
  const ImagePart = useMemo(() => {
    return (
      <div>
        <div className={styles.info_title}>
            &nbsp;&nbsp;
          </div>
        <img className={styles.img} src={image} alt="" />
      </div>
    );
  }, [image]);

  const _content = imageLeft ? [ImagePart, TextPart] : [TextPart, ImagePart];

  return (
    <div className={styles.info_block}>

        <div className={styles.info_content_wrapper}>
        {_content}
        </div>
    </div>
  );
}

export default InfoBlock;
