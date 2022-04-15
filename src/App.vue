<script>
import Navbar from "./components/Navbar.vue";
import Cards from "./components/Cards.vue";
import Information from "./components/Information.vue";
import Location from "./components/Location.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Location,
    Cards,
    Information,
    Footer,
  },  

  data: () => ({    
    weatherData: {},
  }),

  methods: {
    updateWeatherData: function (data) {
      this.weatherData = {
        day0: {
          temp: Math.round(data.daily[0].temp.day),
          tempMin: Math.round(data.daily[0].temp.min),
          tempMax: Math.round(data.daily[0].temp.max),
          type: data.daily[0].weather[0].main,
          description: data.current.weather[0].description,
          date: this.formatDate(data.daily[0].dt),
        },

        day1: {
          temp: Math.round(data.daily[1].temp.day),
          tempMin: Math.round(data.daily[1].temp.min),
          tempMax: Math.round(data.daily[1].temp.max),
          type: data.daily[1].weather[0].main,
          description: data.current.weather[0].description,
          date: this.formatDate(data.daily[1].dt),
        },

        day2: {
          temp: Math.round(data.daily[2].temp.day),
          tempMin: Math.round(data.daily[2].temp.min),
          tempMax: Math.round(data.daily[2].temp.max),
          type: data.daily[2].weather[0].main,
          description: data.current.weather[0].description,
          date: this.formatDate(data.daily[2].dt),
        },
      };
    },
    formatDate: function (unixFormatDate) {
      const date = new Date(unixFormatDate * 1000);
      const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
      const year = date.getFullYear();
      const month = date.getMonth();
      const dt = date.getDate();
      const day = date.getDay();
      const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${dt} ${
        days[day]
      }`;

      return formattedDate;
    },
  },
};
</script>

<template>
  <header>
    <div id="app">
      <Navbar v-on:weatherData="updateWeatherData" />
      <Location />
      <Cards v-bind:weatherData="weatherData" />
      <Information v-bind:weatherData="weatherData" />
      <Footer />
    </div>
  </header>

  <main></main>
</template>

<style></style>
