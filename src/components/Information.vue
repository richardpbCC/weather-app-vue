<template>
  <div class="container my-5" v-if="weatherData.day0">
    <div class="row">
      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Map</h4>
        <Map
          v-bind:weatherData="weatherData"
          v-bind:userCoordinates="userCoordinates"
        />
      </div>

      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Satellite View</h4>
        <SatelliteView
          v-bind:weatherData="weatherData"
          v-bind:userCoordinates="userCoordinates"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map.vue";
import SatelliteView from "./SatelliteView.vue";

export default {
  name: "Information",

  props: ["weatherData", "userCoordinates"],

  components: {
    Map,
    SatelliteView,
  },

  data: () => ({}),

  methods: {},
};
</script>

<style scoped></style>
