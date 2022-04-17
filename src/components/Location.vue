<template>
  <div class="container" v-if="locationData.city">
    <div class="px-1 py-1 my-5 text-center">
      <h1 class="display-5 fw-bold">
        {{locationData.city}}, 
        {{locationData.country}},  
        {{locationData.postCode}}
        </h1>      
    </div>
  </div>
</template>

<script>
export default {
  name: "Location",

  props: ["locationData"],

};
</script>

<style scoped></style>
