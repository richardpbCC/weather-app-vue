<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="navbar-brand" href="#">Weather Forecast</div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <form
          class="d-flex"
          v-on:submit.stop.prevent="getCoordinates"
          ref="searchBox"
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="〒 160-0022"
            aria-label="Search"
            v-model="destination"
            ref="searchForm"
          />
          <button class="btn btn-outline-success" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",

  props: ["userCoordinates"],

  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          console.log(coordinates);
          this.getWeatherData(coordinates);
        },
        (error) => {
          console.error(error.message);
        }
      );
    } else {
      console.error("Browser does not support geolocation");
    }
  },

  data: () => ({
    destination: "",
  }),

  methods: {
    getCoordinates: async function () {
      try {
        //check the format of input and alert user if format is not "NNN-NNNN"
        const input = this.destination.split("");
        let validInput;
        const errorMessage = `${this.destination} is not a valid input. Please use the format "NNN-NNNN"`;

        if (input.length === 8) {
          validInput = input.reduce((result, char, index) => {
            if (index === 3) {
              if (char !== "-") {
                return false;
              } else {
                return result;
              }
            }

            if (isNaN(char)) {
              return false;
            }
            return result;
          }, true);
        }

        if (validInput) {
          console.log(validInput);
          //const postCode = this.destination;
          const postCode = "160-0022";
          const countryCode = "JP";
          this.$refs.searchBox.reset();
          const urlBase = "http://api.openweathermap.org/geo/1.0/zip?";

          const { data } = await axios.get(
            `${urlBase}zip=${postCode},${countryCode}&appid=${
              import.meta.env.VITE_API_KEY
            }`
          );
          // const data = {};
          const coordinates = { lat: data.lat, lon: data.lon };

          this.getWeatherData(coordinates);          
        } else {
          this.$refs.searchBox.reset();
          alert(errorMessage);
        }
      } catch (error) {
        console.error(error);
      }
    },

    getWeatherData: async function (coordinates) {
      try {
        const urlBase = "https://api.openweathermap.org/data/2.5/onecall?";

        const { data } = await axios.get(
          `${urlBase}lat=${coordinates.lat}&lon=${
            coordinates.lon
          }&exclude=minutely,hourly&units=metric&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        //const data = {};
        console.log("data", data);
        this.$emit("weatherData", data);
      } catch (error) {
        console.error(error);
      }
    },    
  },

  emits: ["weatherData"],
};
</script>

<style scoped></style>
