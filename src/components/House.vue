<template>
  <div class="car col-4">
    <div class="card">
      <img class="card-img-top" :src="house.imgUrl" alt="" />
      <div class="card-body">
        <h4 class="card-title">
          {{ house.bedrooms }} Bedrooms | {{ house.bathrooms }} Bathrooms
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'House',
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  setup(props) {

  }
}
</script>

<style lang="scss" scoped>

</style>
