<template>
  <div class="car-details" v-if="state.loaded">
    <h1>Welcome to car details</h1>
    <img :src="car.imgUrl" alt="" />
    <h1>${{ car.price }}</h1>
    <h2>{{ car.make }} | {{ car.model }}</h2>
    <h3>{{ car.year }}</h3>
    <p>{{ car.description }}</p>
  </div>
  <h1 v-else>
    Loading...
    h1> -->
  </h1>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
// IMPORTANT REVIEW
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    // onBeforeRouteLeave(() => {
    //   AppState.activeCar = {}
    // })
    onMounted(async() => {
      try {
        await carsService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      } finally {
        state.loaded = true
      }
    })
    return {
      state,
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>

<style>
</style>
