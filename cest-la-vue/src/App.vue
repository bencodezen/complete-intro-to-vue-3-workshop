<script>
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import UsersPage from "@/components/UsersPage.vue";

export default {
  components: {
    HomePage,
    LoginPage,
    UsersPage
  },
  data: () => ({
    currentPage: 'Home'
  }),
  computed: {
    renderPage() {
      return this.currentPage + 'Page';
    }
  },
  methods: {
    showHomePage() {
      this.currentPage = 'Home';
    },
    showLoginPage() {
      this.currentPage = 'Login';
    },
    showUsersPage() {
      this.currentPage = 'Users'
    }
  }
}
</script>

<template>
  <header class="header">
    <span class="logo"> <img src="@/assets/vue-heart.png" width="30" />C'est La Vue </span>
    <nav class="nav">
      <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
      <a href="#" @click.prevent="showUsersPage">Users</a>
    </nav>
  </header>
  <Suspense>
    <component :is="renderPage" :key="renderPage"/>
    <template v-slot:fallback> Data is loading... </template>
  </Suspense>
<!--  <HomePage v-if="currentPage === 'Home'" />-->
<!--  <LoginPage v-else-if="currentPage === 'Login'" />-->
<!--  <UsersPage v-else />-->
</template>

<style>
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
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
