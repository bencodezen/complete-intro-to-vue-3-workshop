import { defineStore } from "pinia";

export const useUsersStore = defineStore("UsersStore", {
  // Data
  state: () => ({
    usersList: [],
  }),
  // Computed - access state thru parameter
  getters: {
    getUserByEmail(state) {
      return (email) => state.usersList.find((u) => u.email === email);
    },
    getUserById(state) {
      return (id) => state.usersList.find((u) => u.id === id);
    },
  },
  // Methods
  actions: {
    async fetchUsersStore() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      this.usersList = response;
    },
  },
});
