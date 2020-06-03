import { formatMessage, setLocale, getLocale } from 'umi-plugin-react/locale';

const _locale = {
  _t(key, obj){
    return formatMessage({ id: key}, obj);
  },

  setLocale(locale) {
    setLocale(locale);
  },

  getLocale() {
    return getLocale();
  }
}

export default () => {
  return _locale;
}
