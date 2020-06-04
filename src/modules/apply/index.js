
import { useState, useCallback } from 'react';

// import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
// import FormLabel from '@material-ui/core/FormLabel';
// import SvgIcon from '@material-ui/core/SvgIcon';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import PublishSharpIcon from '@material-ui/icons/PublishSharp';

import useLocale from '@/hooks/useLocale';


import BannerImg from '@/assets/apply@2.png';
import BannerImgEn from '@/assets/signin_en.png';

import styles from './style.less';
import { _t } from '../../utils/lang';


const BannerMap = {
  'zh-CN': BannerImg,
  'en-US': BannerImgEn,
}

const ModApply = () => {

  const [role, updateRole] = useState('arist');
  const { getLocale } = useLocale();
  const lang = getLocale();

  const handleRoleChange = useCallback((event) => {
    updateRole(event.target.value);
  }, []);

  return (
    <div className={styles.mod_apply}>
      <div className={styles.banner} style={{ backgroundImage: `url('${BannerMap[lang] || BannerImg}')` }} />
      <div className={styles.apply_form_wrapper}>
        <form className={styles.apply_form} noValidate autoComplete="off">
          <FormControl fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="name" label={_t('u.name')} />
          </FormControl>
          <FormControl fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="email" label={_t('u.email')} />
          </FormControl>
          <FormControl fullWidth className={styles.form_row}>
  <InputLabel shrink>{_t('u.work1')}<span>{_t('u.work2')}</span></InputLabel>
            <div className={styles.upload_wrapper}>
              <div className={styles.upload_btn}>
                <input id="aaa" type="file" />
                <PublishSharpIcon className={styles.upload_icon} /> {_t('u.fileadd')}
              </div>
            </div>
          </FormControl>
          <FormControl fullWidth className={styles.form_row}>
  <InputLabel shrink>{_t('u.rule1')}</InputLabel>
            <div className={styles.radio_wrapper}>
              <RadioGroup aria-label="quiz" value={role} name="quiz" onChange={handleRoleChange}>
                <FormControlLabel value="arist" control={<Radio />} label={_t('u.role1')} />
                <FormControlLabel value="worst" control={<Radio />} label={_t('u.role2')} />
              </RadioGroup>
            </div>
          </FormControl>
          <FormControl  fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="acc" label={_t('u.links')} />
          </FormControl>
          <FormControl  fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="acc" label={_t('u.story')} />
          </FormControl>
          <FormControl  fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="acc" label={_t('u.about')} />
          </FormControl>
          <FormControl  fullWidth className={styles.form_row}>
            <div className={styles.btn_wrapper}>
              <span className={`app_btn ${styles.sub_btn}`}>{_t('u.submit')}</span>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default ModApply;
