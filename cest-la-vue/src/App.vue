<script></script>

<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/vue-heart.png" width="30" />
      <h4>C'est La Vue</h4>
    </span>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/users">Users</router-link>
    </nav>
  </header>

  <Suspense>
    <router-view />
    <template v-slot:fallback> Loading data... </template>
  </Suspense>
</template>

<style>
:root {
  --main-bg-color: papayawhip;
  --main-color-light: #3eb985;
  --main-color-dark: #31485d;
  background-color: var(--main-bg-color);
  color: var(--main-color-dark);
  width: 80%;
  margin: auto;
}
h1,
h2,
h3,
h4,
a,
button {
  color: var(--main-color-light);
  text-decoration: none;
}
button,
input {
  border: 1px solid var(--main-color-light);
  padding: 10px;
}

* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--main-color-dark);
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
</style>
