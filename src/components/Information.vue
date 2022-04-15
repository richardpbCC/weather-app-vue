<template>
  <div class="container my-5" v-if="userCoordinates.lon">
    <div class="row">
      
      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Map</h4>
        <h1>{{ userCoordinates }}</h1>
        <p>Lat: {{ userCoordinates.lat }} Lon: {{ userCoordinates.lon }}</p>
      </div>

      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Free Space</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",

  props: ["userCoordinates"],

  data: () => ({}),

  methods: {},
};
</script>

<style scoped></style>
