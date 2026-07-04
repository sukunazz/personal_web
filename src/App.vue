<template>
  <div id="app">
    <NavigationBar />
    <transition name="route-loader-fade">
      <div v-if="showRouteLoader" class="route-loader" aria-live="polite" aria-busy="true">
        <div class="route-loader-inner">
          <span class="route-spinner" aria-hidden="true"></span>
        </div>
      </div>
    </transition>
    <router-view></router-view>
    <SiteFooter />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import SiteFooter from "./components/SiteFooter.vue";
import projectsData from "@/data.json";

export default {
  name: "App",
  components: {
    NavigationBar,
    SiteFooter,
  },
  data() {
    return {
      isRouteLoading: false,
      routeLoadToken: 0,
    };
  },
  computed: {
    showRouteLoader() {
      return this.isRouteLoading && this.$route.path !== "/";
    },
  },
  watch: {
    $route(to, from) {
      this.handleRouteLoading(to, from);
    },
  },
  methods: {
    async handleRouteLoading(to, from) {
      if (!from || to.path === "/") {
        this.isRouteLoading = false;
        return;
      }

      const token = ++this.routeLoadToken;
      this.isRouteLoading = true;

      await Promise.all([this.delay(780), this.preloadRouteAssets(to)]);

      if (token === this.routeLoadToken) {
        this.isRouteLoading = false;
      }
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async preloadRouteAssets(route) {
      const urls = [];

      if (route.path === "/about") {
        urls.push("/images/skills-what-i-do.svg");
      }

      if (route.path === "/projects") {
        urls.push(...projectsData.projects.map((project) => project.image).filter(Boolean));
      }

      if (route.name === "ProjectDetails") {
        const routeId = String(route.params.id || "").toLowerCase();
        const targetProject = projectsData.projects.find((project) => {
          const idMatch = String(project.id) === routeId;
          const slugMatch =
            String(project.title || "")
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "") === routeId;
          return idMatch || slugMatch;
        });

        if (targetProject) {
          urls.push(targetProject.previewImage || targetProject.image);
          if (Array.isArray(targetProject.gallery)) {
            urls.push(
              ...targetProject.gallery.map((item) => (item && item.src ? item.src : null)).filter(Boolean)
            );
          }
        }
      }

      await this.preloadImages(urls);
    },
    preloadImages(urls) {
      const uniqueUrls = [...new Set((urls || []).filter(Boolean))];
      if (!uniqueUrls.length) {
        return Promise.resolve();
      }

      const loaders = uniqueUrls.map(
        (url) =>
          new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve();
            image.onerror = () => resolve();
            image.src = url;
          })
      );

      const timeout = this.delay(2200);
      return Promise.race([Promise.all(loaders), timeout]);
    },
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

.route-loader {
  position: fixed;
  inset: 0;
  z-index: 120;
  background: rgba(228, 238, 248, 0.62);
  backdrop-filter: blur(10px) saturate(1.02);
  -webkit-backdrop-filter: blur(10px) saturate(1.02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.route-loader-inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(200, 214, 229, 0.82);
}

.route-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #c8d8e7;
  border-top-color: #e5524c;
  border-radius: 50%;
  animation: route-spin 0.85s linear infinite;
}

@keyframes route-spin {
  to {
    transform: rotate(360deg);
  }
}

.route-loader-fade-enter-active,
.route-loader-fade-leave-active {
  transition: opacity 0.2s ease;
}

.route-loader-fade-enter-from,
.route-loader-fade-leave-to {
  opacity: 0;
}
</style>
