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

      <div class="header-socials" aria-label="social links">
        <a
          href="https://www.linkedin.com/in/sujansigdel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/sukunazz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://x.com/sigdelsujan03"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>

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

.header-socials {
  display: none;
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
  .site-header {
    padding-top: 12px;
  }

  .header-frame {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "brand socials"
      "email socials"
      "nav nav";
    align-items: center;
    row-gap: 8px;
    column-gap: 12px;
    padding: 16px 14px 12px;
    border-radius: 14px 14px 0 0;
  }

  .brand {
    grid-area: brand;
    justify-self: start;
  }

  .email-link {
    grid-area: email;
    order: initial;
    margin-left: 0;
    font-size: 12px;
  }

  .email-link span {
    display: inline-block;
    max-width: min(62vw, 240px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header-socials {
    grid-area: socials;
    display: inline-flex;
    gap: 10px;
    justify-self: end;
    align-self: start;
  }

  .header-socials a {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid #e5ddd0;
    background: #f7f2ea;
    color: #4e4e4e;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    transition: 0.2s ease;
  }

  .header-socials a:hover {
    color: #e5524c;
    border-color: #e8b5af;
  }

  .nav-links {
    grid-area: nav;
    position: static;
    left: auto;
    right: auto;
    bottom: auto;
    z-index: auto;
    background: transparent;
    border-top: 1px solid #ebe5da;
    box-shadow: none;
    justify-content: stretch;
    gap: 4px;
    padding: 10px 0 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .nav-link {
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    min-width: 0;
    min-height: 48px;
    padding: 4px 2px;
    flex: 1 1 auto;
    font-size: 12px;
    line-height: 1;
    border-radius: 8px;
    text-align: center;
  }

  .nav-link i {
    font-size: 16px;
  }

  .nav-link span {
    white-space: nowrap;
    font-size: 11px;
  }

  .nav-link.router-link-exact-active,
  .nav-link.active {
    background: #f7f2ea;
  }
}
</style>
