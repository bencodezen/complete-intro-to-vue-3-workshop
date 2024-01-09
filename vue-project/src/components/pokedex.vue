<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
import {computed, ref, reactive} from "vue";

export default {
  async setup() {
    const regionName = ref("Kanto");

    const state = reactive({
      elementType: 'electric',
    });
    const elementTypeAllCaps = computed(() => {
      return state.elementType.toUpperCase();
    })
    const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((response) => response.json());

    return {
      pokedex,
      regionName,
      elementTypeAllCaps,
    };
  },
  methods: {
    changeRegionName() {
      this.regionName = "Hoenn";
      console.log(this.regionName)
    }
  },
  computed: {
    regionNameLowerCase() {
      return this.regionName.toLowerCase();
    }
  },
  beforeCreate() {
    console.log('Before create')
    console.log(this.pokedex)
  },
  created() {
    console.log(this.pokedex)
    console.log(this.regionName);
  }
}
</script>

<template>
    <h2>{{ regionName }}</h2>
    <h3>{{ elementTypeAllCaps }}</h3>
    <h3>{{ regionNameLowerCase }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
    <pre>{{ pokedex }}</pre>
</template>

<style scoped>

</style>