import { formatMessage } from 'umi-plugin-react/locale';

export  const  _t = (key, obj) => {
  return formatMessage({ id: key }, obj);
};
