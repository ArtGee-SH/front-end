import { formatMessage, getLocale } from 'umi-plugin-react/locale';

import { useContext } from 'react';
import { LocaleContext } from '@/context/locale';

export default () => {
  const { updateLang, lang } = useContext(LocaleContext);
  const _locale = {
    _t(key, obj) {
      return formatMessage({ id: key }, obj);
    },

    setLocale(locale) {
      updateLang(locale);
    },

    getLocale() {
      return getLocale();
    },
  };
  return {
    updateLang,
    lang,
    _t: _locale._t,
  };
};
