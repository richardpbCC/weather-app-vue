<template>
  <div class="container my-5" v-if="weatherData.day0">
    <div class="row">

      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Map</h4>
        <h1>{{ }}</h1>
        <p>Lat: {{  }} Lon: {{  }}</p>
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

  props: ["weatherData"],

  data: () => ({}),

  methods: {},
};
</script>

<style scoped></style>
