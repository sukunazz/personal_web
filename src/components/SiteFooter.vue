<template>
  <footer class="site-footer">
    <div class="container footer-frame">
      <p class="footer-copy">© {{ year }} Sujan Sigdel. Built with Vue and care.</p>

      <nav class="footer-links" aria-label="Footer links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.site-footer {
  padding: 8px 0 26px;
}

.footer-frame {
  background: linear-gradient(180deg, #f8f4ee 0%, #f3ece2 100%);
  border: 1px solid #ddd2c3;
  border-radius: 14px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer-copy {
  font-size: 14px;
  color: #645d54;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-links a {
  font-size: 14px;
  color: #4a443b;
  text-decoration: none;
}

.footer-links a:hover,
.footer-links a.router-link-exact-active {
  color: #e5524c;
}

@media (max-width: 768px) {
  .footer-frame {
    flex-direction: column;
    align-items: flex-start;
    padding: 14px 16px;
  }

  .footer-links {
    flex-wrap: wrap;
  }
}
</style>
