<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  computed: {
    benderStatistics() {
      const elements = ["Air", "Earth", "Fire", "Water"];
      const statistics = {
        Air: 0,
        Earth: 0,
        Water: 0,
        Fire: 0,
      };

      this.characters.forEach((character) => {
        elements.forEach((element) => {
          if (character.element.indexOf(element) > -1) {
            statistics[element] += 1;
          }
        });
      });

      return statistics;
    },
  },
};
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <li
      v-for="(stat, type) in benderStatistics"
      :key="`bender-${stat}-${type}`"
    >
      {{ type }}: {{ stat * 2 }}
    </li>
  </ul>
</template>
