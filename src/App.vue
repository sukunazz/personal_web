<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* font-family: "Poppins", sans-serif; */
  font-family: "Montserrat", sans-serif;
  line-height: 1.6;
  /* color: #333; */
}
h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600; /* Semi-bold for headings */
}

p {
  font-family: "Montserrat", sans-serif;
  font-weight: 400; /* Regular weight for body text */
}

.nav-brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700; /* Bold for your logo text */
}

.nav-link {
  font-family: "Montserrat", sans-serif;
  font-weight: 500; /* Medium weight for navigation */
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}
</style>
