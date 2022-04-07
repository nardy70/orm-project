const account = {
  namespaced: true,

  state: () => ({
    title: "USERS TABLE",
    userItem: {},
  }),

  getters: {},

  mutations: {
    setUser(state, payload) {
      state.userItem = payload;
    },
  },

  actions: {},
};

export default account;
