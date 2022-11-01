<template>
  <div class="grid">
    <div>
      <slot name="one" />
    </div>
    <div>
      <slot name="two" />
    </div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 5px solid papayawhip;
}
</style>
