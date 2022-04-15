<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Map</h4>
        <h1>{{}}</h1>
        <p>Lat: {{}} Lon: {{}}</p>   
      <Map />
      </div>

      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Free Space</h4>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map.vue";

export default {
  name: "Information",

  components: {
    Map,
  },

  props: ["weatherData"],

  data: () => ({
  
  }),

  methods: {

  },
};
</script>

<style scoped>

</style>
