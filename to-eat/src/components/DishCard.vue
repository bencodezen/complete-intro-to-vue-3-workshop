<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Dish } from '@/types'

export default defineComponent({
  props: {
    dish: {
      type: Object as PropType<Dish>,
      required: true,
    },
  },
  emits: ['delete-dish'],
  computed: {
    statusColor() {
      switch (this.dish.status) {
        case 'Want to Try':
          return 'is-warning'
        case 'Recommended':
          return 'is-success'
        case 'Do Not Recommend':
          return 'is-danger'
        default:
          return ''
      }
    },
  },
  methods: {
    deleteDish() {
      this.$emit('delete-dish', this.dish)
    },
  },
})
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          {{ dish.name }}
        </p>
        <p class="subtitle mb-2">
          <span class="tag" :class="statusColor">{{ dish.status }}</span>
        </p>
        <div>
          <button @click="deleteDish" class="button is-small is-danger is-light">Delete</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
