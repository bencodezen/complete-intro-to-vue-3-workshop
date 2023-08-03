<script>
export default {
  data: () => ({
    colorPreference: "#ffffff",
    textPreference: "#000000",
  }),
};
</script>

<template>
  <div class="bg-wrapper">
    <header class="header">
      <span class="logo">
        <img src="@/assets/vue-heart.png" width="30" />C'est La Vue
      </span>
      <div>
        <label>Change background color:</label>
        <input type="color" v-model="colorPreference" />
      </div>
      <div>
        <label>Change text color:</label>
        <input type="color" v-model="textPreference" />
      </div>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
    </header>

    <Suspense>
      <router-view></router-view>
      <template #fallback> Fetching Data </template>
    </Suspense>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.bg-wrapper {
  background-color: v-bind(colorPreference);
  color: v-bind(textPreference);
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

.header label {
  margin-right: 8px;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}

main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
