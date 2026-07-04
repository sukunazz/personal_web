<template>
  <header class="site-header">
    <div class="container header-frame">
      <router-link to="/" class="brand">
        <span class="logo-red">&lt;</span>
        <span class="logo-black">S</span>
        <span class="logo-red">/</span>
        <span class="logo-black">S</span>
      </router-link>

      <a href="mailto:sujansigdel03@gmail.com" class="email-link">
        <i class="fas fa-envelope"></i>
        <span>sujansigdel03@gmail.com</span>
      </a>

      <nav class="nav-links">
        <router-link to="/" class="nav-link">
          <i class="fas fa-house"></i>
          <span>Home</span>
        </router-link>

        <router-link to="/about" class="nav-link">
          <i class="fas fa-user"></i>
          <span>About</span>
        </router-link>

        <router-link to="/projects" class="nav-link">
          <i class="fas fa-file-alt"></i>
          <span>Projects</span>
        </router-link>

        <a href="/sujan_resume.pdf" class="nav-link" download>
          <i class="fas fa-download"></i>
          <span>Resume</span>
        </a>

        <router-link to="/contact" class="nav-link">
          <i class="fas fa-book"></i>
          <span>Contact</span>
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
  padding-top: 20px;
  padding-bottom: 0;
}

.header-frame {
  min-height: 82px;

  background: #ffffff;

  border-radius: 14px 14px 0 0;

  padding: 0 34px;

  display: grid;
  grid-template-columns: auto auto 1fr;

  align-items: center;

  column-gap: 26px;

  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 12px 30px rgba(0, 0, 0, 0.05);
}

/* ---------------- Logo ---------------- */

.brand {
  display: flex;

  align-items: center;

  text-decoration: none;

  font-size: 28px;

  font-weight: 800;

  letter-spacing: 0.5px;

  transition: 0.25s;
}

.logo-red {
  color: #ef6b61;
}

.logo-black {
  color: #333;
}

.brand:hover {
  transform: scale(1.03);
}

/* ---------------- Email ---------------- */

.email-link {
  display: flex;

  align-items: center;

  gap: 10px;

  color: #4f4f4f;

  font-size: 14px;

  font-weight: 500;

  text-decoration: none;

  transition: 0.25s;

  margin-left: 6px;
}

.email-link i {
  font-size: 14px;
}

.email-link:hover {
  color: #ef6b61;
}

/* ---------------- Navigation ---------------- */

.nav-links {
  display: flex;

  align-items: center;

  gap: 28px;

  justify-self: end;
}

.nav-link {
  display: flex;

  align-items: center;

  gap: 8px;

  text-decoration: none;

  color: #4b4b4b;

  font-size: 15px;

  font-weight: 500;

  transition: 0.25s;
}

.nav-link i {
  font-size: 14px;
}

.nav-link:hover {
  color: #ef6b61;
}

.nav-link.active {
  color: #ef6b61;
}

.nav-link.router-link-exact-active {
  color: #ef6b61;
}

/* ---------------- Responsive ---------------- */

@media (max-width: 950px) {
  .header-frame {
    display: flex;
    flex-direction: column;

    height: auto;

    gap: 18px;

    border-radius: 14px;

    padding: 22px;
  }

  .email-link {
    order: 3;
  }

  .nav-links {
    flex-wrap: wrap;

    justify-content: center;

    gap: 16px;
  }
}

@media (max-width: 600px) {
  .brand {
    font-size: 24px;
  }

  .email-link {
    font-size: 13px;
  }

  .nav-link {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .header-frame {
    padding: 18px 18px 14px;
    gap: 12px;
  }

  .email-link {
    font-size: 12px;
  }

  .nav-links {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 70;
    background: #ffffff;
    border-top: 1px solid #e7e1d6;
    box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.08);
    justify-content: space-around;
    gap: 0;
    padding: 8px 10px calc(8px + env(safe-area-inset-bottom, 0px));
  }

  .nav-link {
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    min-width: 54px;
    font-size: 11px;
    line-height: 1;
  }

  .nav-link i {
    font-size: 15px;
  }
}
</style>
