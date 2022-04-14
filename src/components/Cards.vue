<template>
  <div class="container my-4" v-if="weatherData.day0">
    <div class="px-1 py-1 my-1">
      <h4 class="display-7 fw-bold">3-day forecast</h4>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img
            src="https://cdn.dribbble.com/users/2120934/screenshots/6193524/media/0e653e48615e57898805fd78918e697d.gif"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <p>YYYY-MM-DD Day</p>
            <h3 class="card-title">Weather</h3>
            <p>Max: ~~ degrees Min: ~~ degrees</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img
            src="https://cdn.dribbble.com/users/2120934/screenshots/6193524/media/0e653e48615e57898805fd78918e697d.gif"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <p>YYYY-MM-DD Day</p>
            <h3 class="card-title">Weather</h3>
            <p>Max: ~~ degrees Min: ~~ degrees</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img
            src="https://cdn.dribbble.com/users/2120934/screenshots/6193524/media/0e653e48615e57898805fd78918e697d.gif"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <p>{{weatherData.day0.date}}</p>
            <h3 class="card-title">{{weatherData.day0.type}}</h3>
            <p>
              Max: {{ weatherData.day0.tempMax }}° 
              Min: {{ weatherData.day0.tempMin }}°
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

  data: () => ({
    weather: {},
  }),

  methods: {},
};
</script>

<style scoped></style>
