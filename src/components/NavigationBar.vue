<template>
  <header class="navbar">
    <div class="container nav-shell">
      <router-link to="/" class="nav-brand">Sujan Sigdel</router-link>

      <button
        class="menu-toggle"
        type="button"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <nav :class="['nav-links', { open: isMenuOpen }]">
        <router-link
          to="/"
          class="nav-link"
          active-class="active"
          @click="closeMenu"
        >
          Home
        </router-link>
        <router-link
          to="/projects"
          class="nav-link"
          active-class="active"
          @click="closeMenu"
        >
          Projects
        </router-link>
        <router-link
          to="/contact"
          class="nav-link"
          active-class="active"
          @click="closeMenu"
        >
          Contact
        </router-link>
        <router-link to="/contact" class="hire-btn" @click="closeMenu">
          Hire Me
        </router-link>
      </nav>
    </div>
    <div
      v-if="isMenuOpen"
      class="mobile-backdrop"
      aria-hidden="true"
      @click="closeMenu"
    ></div>
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    },
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  inset-inline: 0;
  z-index: 1000;
  padding: 0.9rem 0;
}

.nav-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
  border-radius: var(--radius-lg);
  padding: 0.7rem 0.9rem 0.7rem 1.25rem;
  position: relative;
}

.nav-brand {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-brand-700);
  letter-spacing: 0.01em;
}

.menu-toggle {
  display: none;
  border: none;
  background: transparent;
  color: var(--color-brand-700);
  font-size: 1.1rem;
  cursor: pointer;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.nav-link {
  color: var(--color-text-700);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.42rem 0.55rem;
  border-radius: var(--radius-sm);
  transition: color 0.25s ease, background-color 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-brand-700);
  background: var(--color-bg-200);
}

.hire-btn {
  background: var(--color-brand-700);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.58rem 1rem;
  border-radius: 10px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 6px 14px rgba(20, 80, 132, 0.24);
}

.hire-btn:hover {
  background: var(--color-brand-600);
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(20, 80, 132, 0.26);
}

.mobile-backdrop {
  display: none;
}

@media (max-width: 820px) {
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--color-surface-soft);
    border: 1px solid var(--color-border);
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 0.7rem);
    right: 0;
    width: min(260px, 92vw);
    border-radius: var(--radius-md);
    background: #fff;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-soft);
    padding: 0.9rem;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0.4rem;
    z-index: 1100;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-link {
    border-bottom: none;
    padding: 0.55rem 0.7rem;
    border-radius: var(--radius-sm);
  }

  .nav-link:hover,
  .nav-link.active {
    background: var(--color-bg-200);
  }

  .hire-btn {
    text-align: center;
    margin-top: 0.3rem;
  }

  .mobile-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(16, 36, 58, 0.18);
    z-index: 1050;
  }
}
</style>
