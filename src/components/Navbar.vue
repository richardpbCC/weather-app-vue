<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form
          class="d-flex"
          v-on:submit.stop.prevent="getWeatherData"
          ref="searchBox"
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="160-0022"
            aria-label="Search"
            v-model="destination"
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

  data: () => ({
    destination: "",
  }),

  methods: {
    getWeatherData: async function (event) {
      try {
        //const postCode = this.destination;
        const postCode = "160-0022";
        const urlBase = "https://api.openweathermap.org/data/2.5/weather?";
        const countryCode = "JP";
        this.$refs.searchBox.reset();

        const { data } = await axios.get(
          `${urlBase}zip=${postCode},${countryCode}&units=metric&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        console.log(data);
        
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
