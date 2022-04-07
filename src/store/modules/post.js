const post = {
  namespaced: true,

  state: () => ({
    title: "POSTS TABLE",
    postItem: {},
  }),

  getters: {},

  mutations: {
    setPost(state, payload) {
      state.postItem = payload;
    },
  },

  actions: {},
};

export default post;
