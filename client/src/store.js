import { createStore } from 'vuex';

const store = createStore({
  state: {
    page: "ABOUT"
  },
  mutations: {
    setPage(state, page) {
      state.page = page;
    },
  }
})

export default store
