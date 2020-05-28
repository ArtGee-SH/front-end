export default {

  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  },
  subscriptions: {

  },
};
