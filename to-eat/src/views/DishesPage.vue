<script lang="ts">
import NewDishForm from '../components/NewDishForm.vue'
import DishCard from '../components/DishCard.vue'
import SideMenu from '../components/SideMenu.vue'
import type { Dish } from '@/types'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    NewDishForm,
    DishCard,
    SideMenu,
  },
  setup () {
    /**
     * Dish Module
     */
     const dishList = ref<Dish[]>([
      {
        id: '7d9f3f17-964a-4e82-98e5-ecbba4d709a1',
        name: 'Ghost Pepper Poppers',
        status: 'Want to Try',
      },
      {
        id: '5c986b74-fa02-4a22-98f2-b1ff3559e85e',
        name: 'A Little More Chowder Now',
        status: 'Recommended',
      },
      {
        id: 'c113411d-1589-414f-a283-daf7eedb631e',
        name: 'Full Laptop Battery',
        status: 'Do Not Recommend',
      },
    ])


    const filteredDishList= computed((): Dish[] => {
      return dishList.value.filter((dish) => {
        if (dish.name) {
          return dish.name.toLowerCase().includes(filterText.value.toLowerCase())
        } else {
          return dishList
        }
      })
    })

    const numberOfDishes= computed(() => {
      return filteredDishList.value.length
    })

    const addDish = (payload: Dish) => {
      dishList.value.push(payload)
      hideForm()
    }
    const deleteDish = (payload: Dish) => {
      dishList.value = dishList.value.filter((dish) => {
        return dish.id !== payload.id
      })
    }

      /**
     * New form modulw
     */
    const filterText = ref<string>('')

    const showNewForm = ref<boolean>(false)

    const hideForm = () => {
      showNewForm.value = false
    },

    /**
     * lifecycle hooks
     */

    onMounted(() => {
      const route = useRoute();
      if (route.query.new) {
        showNewForm.value = true
      }
    })

    return {
      filterText,
      dishList,
      showNewForm,
      filteredDishList,
      numberOfDishes,
      addDish,
      deleteDish,
      hideForm
    }
  }
})
</script>

<template>
  <main class="section">
    <div class="columns">
      <!-- Side Menu -->
      <SideMenu />

      <!-- Main Content -->
      <div class="column">
        <h1 class="title">Dishes</h1>

        <!-- CTA Bar -->
        <nav v-if="!showNewForm" class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ numberOfDishes }}</strong> dishes
              </p>
            </div>

            <p class="level-item">
              <button @click="showNewForm = true" class="button is-success">New</button>
            </p>

            <div class="level-item is-hidden-tablet-only">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="Dish name" v-model="filterText" />
                </p>
                <p class="control">
                  <button class="button">Search</button>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <!-- New Dish Form -->
        <NewDishForm v-if="showNewForm" @add-new-dish="addDish" @cancel-new-dish="hideForm" />

        <!-- Display Results -->
        <div v-else class="columns is-multiline">
          <div v-for="item in filteredDishList" class="column is-full" :key="`item-${item}`">
            <DishCard :dish="item" @delete-dish="deleteDish" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
