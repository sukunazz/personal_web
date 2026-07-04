<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
    <SiteFooter />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    SiteFooter,
  },
};
</script>

<style>
h1,
h2,
h3 {
  font-family: "IBM Plex Serif", "Georgia", serif;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--color-text-900);
}

p {
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
  font-weight: 400;
  color: var(--color-text-700);
}

.nav-brand,
.nav-link {
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
}

.container {
  width: min(97vw, var(--site-max-width));
  max-width: none;
  margin: 0 auto;
  padding: 0;
}

@media (max-width: 768px) {
  .container {
    width: min(95vw, var(--site-max-width));
  }
}
</style>
