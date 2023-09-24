import { ref } from "vue";

export const greetingsCounter = ref(0);

export const countUpGreeting = () => {
  greetingsCounter.value += 1;
};
