<script>
import { useCount } from "../composables/countStore";
import { useCountStore } from "@/stores/CountStore";

export default {
  setup() {
    const countStore = useCount();
    const newCountStore = useCountStore();

    return {
      countStore,
      newCountStore,
    };
  },
  data: () => ({
    count: 10,
    counterTitle: "Counter Standard",
    incrementAmount: 8,
  }),
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return "Counter Standard - Very Long";
      } else {
        return "Counter Standard";
      }
    },
    optimizedIncrementAmount() {
      return this.displayTitle.length * this.incrementAmount;
    },
  },
  methods: {
    incrementCount(newAmount, event) {
      console.log(newAmount);
      console.log(event);
      this.count += this.optimizedIncrementAmount;
      // this.newCount += 10;
    },
  },
};
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <h2>Third Counter Version: {{ newCountStore.count }}</h2>
  <button @click="newCountStore.increment">New Increment</button>
  <h2>New Counter</h2>
  <p>Global Count: {{ countStore.globalCount }}</p>
  <p>Local Count: {{ countStore.localCount }}</p>
  <button class="button" @click="countStore.incrementGlobalCount">
    Global
  </button>
  <button class="button" @click="countStore.incrementLocalCount">Local</button>
  <hr />
  <p :data-increment-by="incrementAmount">{{ count }}</p>
  <button class="button" @click="incrementCount">Increment Count</button>
  <h1>{{ incrementAmount }}</h1>
  <p>{{ optimizedIncrementAmount }}</p>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <input type="text" v-model="incrementAmount" />
  </div>
</template>
