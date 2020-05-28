import { useDispatch } from "dva"


export default (namespace) => {
  const dispatch = useDispatch();

  return (type, payload, other = {}, model) => {
    if(!namespace && !model) {
      throw new Error('action must be type of [namespace/effects]');
    }
    return dispatch({
      type: `${model || namespace}/${type}`,
      payload,
      ...other,
    })
  }
}
