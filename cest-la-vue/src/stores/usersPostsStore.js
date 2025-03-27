import { defineStore } from "pinia";

export const useUsersPostsStore = defineStore("UsersPostsStore", {
  // Data
  state: () => ({
    usersPosts: [],
  }),
  // Computed - access state thru parameter
  getters: {
    getUserPostsById(state) {
      return (id) => state.usersPosts.filter((p) => p.id === id);
    },
  },
  // Methods
  actions: {
    async fetchUsersPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((response) => response.json());
      this.usersPosts = response;
    },
  },
});
