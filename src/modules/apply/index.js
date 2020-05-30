
import { useState, useCallback } from 'react';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import SvgIcon from '@material-ui/core/SvgIcon';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import PublishSharpIcon from '@material-ui/icons/PublishSharp';

import styles from './style.less';

import BannerImg from '@/assets/apply@2.png';

const ModApply = () => {

  const [role, updateRole] = useState('arist');

  const handleRoleChange = useCallback((event) => {
    updateRole(event.target.value);
  }, []);

  return (
    <div className={styles.mod_apply}>
      <div className={styles.banner} style={{ backgroundImage: `url('${BannerImg}')` }} />
      <div className={styles.apply_form_wrapper}>
        <form className={styles.apply_form} noValidate autoComplete="off">
          <FormControl shrink fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="name" label="姓名" />
          </FormControl>
          <FormControl shrink fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="email" label="邮箱" />
          </FormControl>
          <FormControl fullWidth className={styles.form_row}>
            <InputLabel shrink>请上传一幅您最得意的代表作品</InputLabel>
            <div className={styles.upload_wrapper}>
              <div className={styles.upload_btn}>
                <input id="aaa" type="file" />
                <PublishSharpIcon className={styles.upload_icon} /> 添加文件
              </div>
            </div>
          </FormControl>
          <FormControl fullWidth className={styles.form_row}>
            <InputLabel shrink>所有上传cryptoindus的作品必须是真实原创，请选择</InputLabel>
            <div className={styles.radio_wrapper}>
              <RadioGroup aria-label="quiz" value={role} name="quiz" onChange={handleRoleChange}>
                <FormControlLabel value="arist" control={<Radio />} label="我是原创艺术家" />
                <FormControlLabel value="worst" control={<Radio />} label="我得到了艺术家的许可" />
              </RadioGroup>
            </div>
          </FormControl>
          <FormControl shrink fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="acc" label="您的作品链接/能看到您作品的任意社交账号" />
          </FormControl>
          <FormControl shrink fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="acc" label="可以讲讲作品背后的故事吗？（非必填）" />
          </FormControl>
          <FormControl shrink fullWidth className={styles.form_row}>
            <TextField InputLabelProps={{ shrink: true }} id="acc" label="通过何种渠道了解到CRYPTOINDUS？" />
          </FormControl>
          <FormControl shrink fullWidth className={styles.form_row}>
            <div className={styles.btn_wrapper}>
              <span className={`app_btn ${styles.sub_btn}`}>提交</span>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default ModApply;
