<!-- <template>
  <nav class="navbar">
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
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 3rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 600;
  color: #4caf50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  position: relative;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding-bottom: 5px; /* Space for underline */
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #4caf50;
  transition: width 0.4s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #4caf50;
}

/* Active link remains underlined */
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #4caf50;
  font-weight: 600;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-brand {
    font-size: 1.2rem;
  }
}
</style> -->

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
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 3rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 600;
  color: #4caf50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  position: relative;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding-bottom: 5px; /* Space for underline */
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #4caf50;
  transition: width 0.4s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #4caf50;
}

/* Active link remains underlined */
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #4caf50;
  font-weight: 600;
}

/* Mobile Bottom Navbar Styles */
.mobile-navbar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0.5rem 0;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
}

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
  font-size: 0.75rem;
  padding: 0.5rem 0;
  width: 33.33%;
  text-align: center;
}

.mobile-icon {
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  font-style: normal;
}

.mobile-nav-item.active {
  color: #4caf50;
  font-weight: 500;
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

/* Switch to mobile navbar at 584px */
@media (max-width: 584px) {
  .desktop-navbar {
    display: none;
  }

  .mobile-navbar {
    display: flex;
  }

  /* Add padding to bottom of page content to accommodate the navbar */
  body {
    padding-bottom: 70px;
  }
}
</style>
