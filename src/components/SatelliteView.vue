<template>
  <div class="container">
    <GoogleMap
      :api-key="apiKey"
      style="width: 100%; height: 500px"
      mapTypeId="hybrid"
      :center="center"
      :zoom="21"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },

  props: ["weatherData"],

  setup(props) {
    console.log(props.weatherData)
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
