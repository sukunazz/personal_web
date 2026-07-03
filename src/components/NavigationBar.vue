<template>
  <header class="site-header">
    <div class="container header-frame">
      <router-link to="/" class="brand">SS</router-link>

      <a href="mailto:sujansigdel03@gmail.com" class="email-link">
        sujansigdel03@gmail.com
      </a>

      <nav class="nav-links">
        <router-link to="/projects" class="nav-link" active-class="active">
          works
        </router-link>
        <router-link to="/" class="nav-link" active-class="active">
          resume
        </router-link>
        <router-link to="/contact" class="nav-link" active-class="active">
          contact
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1rem 0 0;
}

.header-frame {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.7rem 0.9rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
}

.brand {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--color-surface);
  background: var(--color-brand-700);
  border-radius: var(--radius-sm);
}

.email-link {
  color: var(--color-text-500);
  font-size: 0.86rem;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  gap: 0.9rem;
}

.nav-link {
  text-transform: lowercase;
  font-size: 0.88rem;
  color: var(--color-text-700);
  padding: 0.3rem 0.45rem;
  border-radius: var(--radius-sm);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text-900);
  background: var(--color-bg-200);
}

@media (max-width: 900px) {
  .header-frame {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .brand {
    margin: 0 auto;
  }

  .nav-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
