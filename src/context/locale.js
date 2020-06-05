
import React, { useState, useCallback, useMemo, useEffect } from 'react';
// import { useSelector } from 'dva';
import { setLocale, getLocale } from 'umi-plugin-react/locale';


const defaultLang = 'zh-CN';

const LangClassMap = {
  'zh-CN': 'app-cn',
  'en-US': 'app-en',
}


export const LocaleContext = React.createContext({
  lang: defaultLang,
  updatedLang() {},
});


export const LocaleProvider = (props) => {

  const [lang, updateLang] = useState(defaultLang);

  const update = useCallback((nextLang) => {
    updateLang(nextLang);
    setLocale(nextLang, false);
  }, []);

  // 初始化，同步已有的数据
  useEffect(() => {
    const lang = getLocale() || defaultLang;
    updateLang(lang);
    document.body.classList.add(LangClassMap[lang]);
  }, []);

  return (
    <LocaleContext.Provider value={useMemo(() => {
      return {lang, updateLang: update}
    }, [lang, update])}>
      {props.children}
    </LocaleContext.Provider>
  );
}
