<template>
  <div>
    <!-- Desktop/Tablet Navbar -->
    <nav class="navbar desktop-navbar">
      <div class="container nav-container">
        <router-link to="/" class="nav-brand">Sujan Sigdel</router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link" active-class="active"
            >Home</router-link
          >
          <router-link to="/projects" class="nav-link" active-class="active"
            >Projects</router-link
          >
          <router-link to="/contact" class="nav-link" active-class="active"
            >Contact</router-link
          >
        </div>
      </div>
    </nav>

    <!-- Mobile Top Header for Name/Logo -->
    <div class="mobile-header">
      <router-link to="/" class="mobile-brand">Sujan Sigdel</router-link>
    </div>

    <!-- Mobile Bottom Navbar -->
    <nav class="mobile-navbar">
      <router-link to="/" class="mobile-nav-item" active-class="active">
        <i class="mobile-icon">🏠</i>
        <span>Home</span>
      </router-link>
      <router-link to="/projects" class="mobile-nav-item" active-class="active">
        <i class="mobile-icon">📂</i>
        <span>Projects</span>
      </router-link>
      <router-link to="/contact" class="mobile-nav-item" active-class="active">
        <i class="mobile-icon">✉️</i>
        <span>Contact</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
/* Desktop/Tablet Navbar Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(248, 245, 239, 0.9);
  padding: 1.1rem 4.5rem;
  z-index: 1000;
  box-shadow: 0 12px 30px rgba(31, 42, 29, 0.12);
  backdrop-filter: blur(12px);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--color-forest);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  position: relative;
  color: var(--color-ink);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  padding-bottom: 6px;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-forest);
  transition: width 0.4s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--color-forest);
}

.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--color-forest);
  font-weight: 700;
}

/* Mobile Top Header for Name/Logo */
.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(248, 245, 239, 0.95);
  box-shadow: 0 10px 25px rgba(31, 42, 29, 0.12);
  z-index: 1000;
  height: 52px;
  padding-left: 1rem;
  backdrop-filter: blur(12px);
}

.mobile-brand {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 52px;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-forest);
  text-decoration: none;
}

/* Mobile Bottom Navbar Styles */
.mobile-navbar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(248, 245, 239, 0.95);
  box-shadow: 0 -8px 20px rgba(31, 42, 29, 0.15);
  z-index: 1000;
  padding: 0.6rem 0;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(31, 42, 29, 0.08);
}

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--color-ink-muted);
  font-size: 0.75rem;
  padding: 0.5rem 0;
  width: 33.33%;
  text-align: center;
  transition: color 0.3s ease;
}

.mobile-icon {
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
  font-style: normal;
}

.mobile-nav-item.active {
  color: var(--color-forest);
  font-weight: 600;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 2rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-brand {
    font-size: 1.2rem;
  }
}

@media (max-width: 584px) {
  .desktop-navbar {
    display: none;
  }

  .mobile-navbar {
    display: flex;
  }

  .mobile-header {
    display: block;
  }

  body {
    padding-bottom: 72px;
    padding-top: 64px;
  }
}
</style>
