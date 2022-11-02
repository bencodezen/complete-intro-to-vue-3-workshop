import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    userList: [],
  }),
  getters: {
    shortUserList: (state) => {
      return state.userList.splice(0, 5);
    },
  },
  actions: {
    async fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());

      this.userList = response;
    },
  },
});
