<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <h4 class="display-7 fw-bold">Map</h4>
        <h1>{{ coordinates }}</h1>
        <p>Lat: {{ coordinates.lat }} Lon: {{ coordinates.lon }}</p>
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

  data: () => ({
    coordinates: {
      lat: 0,
      lon: 0,
    },
  }),

  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      }),
      error => {
        console.error(error);
      };
    } else {
      console.log("Browser does not support geolocation");
    }
  },

  methods: {},
};
</script>

<style scoped></style>
