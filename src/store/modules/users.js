export default {
  state: {
    users: [],
    perPage: 15,
    currentPage: 1,
    isLoading: true,
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    updateIsLoading(state) {
      state.isLoading = false;
    },
  },
  actions: {
    async getUsers(ctx) {
      const resonse = await fetch(
        `http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
      );
      const users = await resonse.json();
      ctx.commit("updateUsers", users);
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    countPerPage(state) {
      return state.perPage;
    },
    currentPage(state) {
      return state.currentPage;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
};
