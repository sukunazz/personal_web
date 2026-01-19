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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", "Segoe UI", sans-serif;
  line-height: 1.7;
}

h1,
h2,
h3 {
  font-family: "Fraunces", "Times New Roman", serif;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

p {
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 400;
  color: var(--color-ink-muted);
}

.nav-brand,
.nav-link {
  font-family: "Manrope", "Segoe UI", sans-serif;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 18px;
  }
}
</style>
