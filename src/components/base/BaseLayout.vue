<script>
export default {}
</script>
<template>
  <div class="container">
    <aside class="aside">
      <slot name="aside" />
    </aside>
    <main class="main">
      <slot name="main" />
    </main>
    <footer class="footer">
      <slot name="footer"> This is the footer </slot>
    </footer>
  </div>
</template>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.aside {
  border: 1px solid red;
}

.main {
  border: 1px solid purple;
}

.footer {
  border: 1px solid green;
}
</style>
