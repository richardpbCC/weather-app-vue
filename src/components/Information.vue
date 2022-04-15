<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Map</h4>
        <Map />
      </div>

      <div class="col-md-6" v-if="weatherMap !==''">
        <h4 class="display-7 fw-bold">Satellite View</h4>
        <SatelliteView />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map.vue";
import SatelliteView from "./SatelliteView.vue";

export default {
  name: "Information",

  components: {
    Map,
    SatelliteView,
  },

  props: ["weatherData", "weatherMap"],

  data: () => ({}),

  methods: {},
};
</script>

<style scoped></style>
