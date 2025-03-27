import { defineStore } from "pinia";

export const useUsersPhotosStore = defineStore("UsersPhotosStore", {
  // Data
  state: () => ({
    usersPhotos: [],
  }),
  // Computed - access state thru parameter
  getters: {
    getUserPhotosById(state) {
      return (id) => state.usersPhotos.filter((p) => p.id === id);
    },
  },
  // Methods
  actions: {
    async fetchUsersPhotos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      ).then((response) => response.json());
      this.usersPhotos = response;
    },
  },
});
