<template>
  <header class="site-header">
    <div class="container header-frame">
      <router-link to="/" class="brand">
        <span class="brand-s">S</span><span class="brand-dot">/</span
        ><span class="brand-s">S</span>
      </router-link>

      <a href="mailto:sujansigdel03@gmail.com" class="email-link">
        <i class="fas fa-envelope"></i>
        sujansigdel03@gmail.com
      </a>

      <i class="fas fa-sun mini-icon" aria-hidden="true"></i>

      <nav class="nav-links">
        <router-link to="/projects" class="nav-link" active-class="active">
          <i class="fas fa-file-alt"></i> Works
        </router-link>
        <a href="/sujan_resume.pdf" class="nav-link" download>
          <i class="fas fa-user-tie"></i> Resume
        </a>
        <router-link to="/contact" class="nav-link" active-class="active">
          <i class="fas fa-book"></i> Contact
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
  position: relative;
  z-index: 10;
  padding: 1.25rem 0 1.25rem;
}

.header-frame {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 1rem 1.25rem;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.12rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f1f1f;
  letter-spacing: 0.03em;
}

.brand-dot {
  color: #be3f3f;
  font-size: 0.92rem;
  transform: translateY(-0.02rem);
}

.email-link {
  color: var(--color-text-500);
  font-size: 0.92rem;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  gap: 0.48rem;
}

.mini-icon {
  color: var(--color-text-500);
  font-size: 0.96rem;
}

.nav-links {
  display: flex;
  gap: 0.8rem;
}

.nav-link {
  text-transform: none;
  font-size: 0.92rem;
  color: var(--color-text-700);
  padding: 0.32rem 0.45rem;
  border-radius: var(--radius-sm);
  display: inline-flex;
  align-items: center;
  gap: 0.42rem;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text-900);
  background: #f4ece2;
}

@media (max-width: 1180px) {
  .header-frame {
    grid-template-columns: auto 1fr auto;
  }

  .mini-icon {
    display: none;
  }
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

  .email-link,
  .mini-icon {
    justify-content: center;
  }
}
</style>
