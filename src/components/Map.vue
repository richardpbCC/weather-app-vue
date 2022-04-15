<template>
  <GoogleMap
    v-bind:api-key="apiKey"
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

  data: () => ({
    apiKey : import.meta.env.VITE_GMAP_KEY,
  }),

  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
</script>

<style scoped></style>
