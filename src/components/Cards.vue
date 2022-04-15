<template>
  <div class="container my-4" v-if="weatherData.day0">
    <div class="px-1 py-1 my-1">
      <h4 class="display-7 fw-bold">3-day forecast</h4>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img v-if="weatherData.day0.type === 'Clear'" src=".././assets/Clear.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day0.type === 'Clouds'" src=".././assets/Clouds.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day0.type === 'Drizzle'" src=".././assets/Drizzle.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day0.type === 'Rain'" src=".././assets/Rain.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day0.type === 'Snow'" src=".././assets/Snow.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day0.type === 'Thunderstorm'" src=".././assets/Thunderstorm.gif" class="card-img-top" alt="" />
          <div class="card-body">
            <p>{{ weatherData.day0.date }}</p>
            <h3 class="card-title">{{ weatherData.day0.type }}</h3>
            <p>
              Max: {{ weatherData.day0.tempMax }}° Min:
              {{ weatherData.day0.tempMin }}°
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img v-if="weatherData.day1.type === 'Clear'" src=".././assets/Clear.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day1.type === 'Clouds'" src=".././assets/Clouds.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day1.type === 'Drizzle'" src=".././assets/Drizzle.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day1.type === 'Rain'" src=".././assets/Rain.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day1.type === 'Snow'" src=".././assets/Snow.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day1.type === 'Thunderstorm'" src=".././assets/Thunderstorm.gif" class="card-img-top" alt="" />
          <div class="card-body">
            <p>{{ weatherData.day1.date }}</p>
            <h3 class="card-title">{{ weatherData.day1.type }}</h3>
            <p>
              Max: {{ weatherData.day1.tempMax }}° Min:
              {{ weatherData.day1.tempMin }}°
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img v-if="weatherData.day2.type === 'Clear'" src=".././assets/Clear.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day2.type === 'Clouds'" src=".././assets/Clouds.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day2.type === 'Drizzle'" src=".././assets/Drizzle.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day2.type === 'Rain'" src=".././assets/Rain.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day2.type === 'Snow'" src=".././assets/Snow.gif" class="card-img-top" alt="" />
          <img v-if="weatherData.day2.type === 'Thunderstorm'" src=".././assets/Thunderstorm.gif" class="card-img-top" alt="" />
          <div class="card-body">
            <p>{{ weatherData.day2.date }}</p>
            <h3 class="card-title">{{ weatherData.day0.type }}</h3>
            <p>
              Max: {{ weatherData.day2.tempMax }}° Min:
              {{ weatherData.day2.tempMin }}°
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",

  props: ["weatherData"],

  data: () => ({}),

  methods: {},    
};
</script>

<style scoped></style>
