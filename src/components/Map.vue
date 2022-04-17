<template>
  <GoogleMap
    :api-key="apiKey"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },

  props: ["weatherData", "userCoordinates"],

  setup(props) {
    const userCoordinates = props.userCoordinates;
    const weatherData = props.weatherData;

    const center = {
      lat: weatherData.lat || userCoordinates.lat,
      lng: weatherData.lon || userCoordinates.lon,
    };

    const apiKey = import.meta.env.VITE_GMAP_KEY;

    return { center, apiKey };
  },

  data: () => ({}),

});
</script>

<style scoped></style>
