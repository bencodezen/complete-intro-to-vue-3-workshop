<script>
export default {
  props: ['tagline'],
  data: () => ({
    navList: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Restaurants',
        path: '/restaurants',
      },
      {
        name: 'Dishes',
        path: '/dishes',
      },
    ],
  }),
}
</script>

<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <img src="@/assets/to-eat-logo.svg" alt="" width="100" />
      </RouterLink>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <small>{{ tagline }}</small>
        </div>
      </div>
      <div class="navbar-end">
        <div v-for="navItem in navList" class="navbar-item" :key="`nav-${navItem.name}`">
          <RouterLink :to="navItem.path">{{ navItem.name }}</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
