export default {

  reducers: {
    update({ payload }, state) {
      return {
        ...state,
        ...payload,
      }
    }
  },
  subscriptions: {

  },
};
