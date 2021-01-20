<template>
  <h1>This is the houses page</h1>
  <div class="row">
    <House v-for="house in houses" :key="house.id" :house="house" />
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import House from '../components/House.vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'

export default {
  name: 'HousesPage',
  setup() {
    onMounted(() => {
      try {
        housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      houses: computed(() => AppState.houses)
    }
  },
  components: {
    House
  }
}
</script>
<style lang="scss" scope>

</style>
