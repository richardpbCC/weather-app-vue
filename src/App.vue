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
};
</script>

<template>
  <header>
    <div id="app">
      <Navbar />
      <Location /> 
      <Cards />
      <Information />
      <Footer />
    </div>
  </header>

  <main></main>
</template>

<style></style>
