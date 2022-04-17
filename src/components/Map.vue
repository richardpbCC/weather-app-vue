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

  props: ["weatherData"],

  setup(props) {
    const weatherData = props.weatherData;

    const center = {
      lat: weatherData.lat,
      lng: weatherData.lon,
    };

    const apiKey = import.meta.env.VITE_GMAP_KEY;

    return { center, apiKey };
  },

  data: () => ({}),

});
</script>

<style scoped></style>
