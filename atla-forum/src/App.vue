<script>
import BenderStatistics from "./components/BenderStatistics.vue";
import CharacterCard from "./components/CharacterCard.vue";

export default {
  components: {
    BenderStatistics,
    CharacterCard,
  },
  data: () => ({
    newCharacter: {
      name: "",
      element: [],
    },
    characterList: [
      {
        name: "Aang",
        element: ["Air", "Earth", "Water", "Fire"],
      },
      {
        name: "Zuko",
        element: ["Fire"],
      },
      {
        name: "Toph",
        element: ["Earth"],
      },
      {
        name: "Katara",
        element: ["Water"],
      },
    ],
    favoriteList: [],
  }),
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter);
      this.newCharacter = { name: "" };
    },
    addFavoriteCharacter(payload) {
      this.favoriteList.push(payload);
    },
  },
};
</script>

<template>
  <BenderStatistics :characters="characterList" />
  <h2>Characters</h2>
  <p v-if="characterList.length === 0">There are no characters</p>
  <ul v-else-if="characterList.length % 2 === 0">
    <li
      v-for="(character, index) in characterList"
      :key="`even-character-${index}`"
    >
      <CharacterCard :character="character" @favorite="addFavoriteCharacter" />
    </li>
  </ul>
  <p v-else>There are odd characters!</p>
  <h2>Favorite Characters</h2>
  <ul v-if="favoriteList.length > 0">
    <li
      v-for="(character, index) in favoriteList"
      :key="`odd-character-${index}`"
    >
      {{ character }}
    </li>
  </ul>
  <p v-else>No favorite characters yet!</p>
  <h2>New Character</h2>
  <pre>{{ newCharacter }}</pre>
  <label for="character-name">Name</label>
  <input
    type="text"
    v-model="newCharacter.name"
    @keyup.enter="addNewCharacter"
  />
  <p>
    <span
      v-for="(character, index) in characterList"
      :key="`comma-list-character-${index}`"
      >{{ character.name }}{{ index === characterList.length - 1 ? "" : ", " }}
    </span>
  </p>
</template>
