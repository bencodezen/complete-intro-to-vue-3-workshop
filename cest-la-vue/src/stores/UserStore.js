import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore("UsersStore", {
  state: () => ({ users: [] }),
  getters: {
    shortUserList: (state) => {
      return state.users.slice(0, 5);
    },
  },
  actions: {
    async fecthUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());

      this.users = response;
    },
  },
});
