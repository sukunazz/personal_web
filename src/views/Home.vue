<template>
  <main class="home-page">
    <section class="container section-frame hero">
      <div class="hero-layout">
        <div class="hero-socials">
          <a
            href="https://www.linkedin.com/in/sujansigdel/"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/sukunazz" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://x.com/sigdelsujan03" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
        </div>

        <div class="hero-main">
          <p class="eyebrow">It's me</p>
          <h1 class="hero-name">Sujan<br />Sigdel</h1>
          <p class="hero-role">FRONTEND DEVELOPER</p>
          <p class="hero-copy">
            AKA Sukunazz. Software Developer from Pokhara, Nepal with experience
            in building practical applications with modern web technologies.
          </p>

          <div class="hero-actions">
            <router-link to="/contact" class="btn-primary"
              >let's talk</router-link
            >
          </div>
        </div>

        <div class="hero-visual">
          <img src="/images/sujan.png" alt="Profile placeholder" />
        </div>
      </div>
    </section>

    <section class="container section-frame skills">
      <h2>my top skills</h2>
      <p class="section-subtitle">what i do</p>
      <div class="skills-grid">
        <article>
          <h3>backend</h3>
          <p>
            I build scalable APIs and service layers using Node.js, Express,
            NestJS, MongoDB, and PostgreSQL.
          </p>
        </article>
        <article>
          <h3>frontend</h3>
          <p>
            I build fast and clean interfaces with Vue.js, React, JavaScript,
            and CSS focused on accessibility and usability.
          </p>
        </article>
      </div>
      <router-link to="/projects" class="text-link">see my works</router-link>
    </section>

    <section class="container section-frame readme">
      <h2>README</h2>
      <p>
        I am a disciplined software engineer with a strong habit of learning and
        shipping. My work style is simple: clarify the problem, design the
        cleanest implementation path, and deliver code that teams can maintain.
      </p>
      <p>
        Outside coding, I enjoy chess, football, and continuous upskilling
        through newsletters and technical writing.
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  padding: 0 0 2rem;
}

.section-frame {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 2rem;
  margin-bottom: 1rem;
}

.eyebrow {
  font-size: 0.86rem;
  display: inline-flex;
  align-items: center;
  background: #2f2c2a;
  color: #fff;
  padding: 0.34rem 0.56rem;
  border-radius: var(--radius-sm);
  margin-bottom: 0.6rem;
}

.hero-name {
  font-size: clamp(2.2rem, 5.4vw, 3.9rem);
  line-height: 0.96;
  margin-bottom: 0.55rem;
}

.hero-layout {
  display: grid;
  grid-template-columns: 48px 1fr 420px;
  gap: 1.5rem;
  align-items: center;
  min-height: calc(100vh - 220px);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.hero-visual img {
  width: 390px;
  height: 390px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #1f1f1f;
  background: #e8dfd1;
}

.hero-role {
  text-transform: none;
  letter-spacing: 0.08em;
  font-weight: 600;
  font-size: 0.78rem;
  color: var(--color-accent-600);
  margin-bottom: 0.8rem;
}

.hero-copy {
  max-width: 500px;
  color: var(--color-text-700);
  margin-bottom: 1.3rem;
}

.hero-actions {
  margin-bottom: 0;
}

.btn-primary {
  border-radius: 999px;
  width: 96px;
  height: 96px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.08rem;
  font-weight: 600;
  text-transform: lowercase;
  line-height: 0.95;
}

.btn-primary {
  background: #ed7e6e;
  color: #fff;
}

.btn-primary:hover {
  background: #e26d5c;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
}

.section-subtitle {
  color: var(--color-text-500);
  margin-bottom: 0.9rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
  margin-bottom: 0.9rem;
}

.skills-grid article {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.85rem;
  background: var(--color-surface-soft);
}

.skills-grid h3 {
  text-transform: lowercase;
  font-size: 1.04rem;
  margin-bottom: 0.35rem;
}

.text-link {
  display: inline-flex;
  color: var(--color-brand-700);
  font-size: 0.92rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.readme p {
  max-width: 850px;
  margin-bottom: 0.7rem;
}

.hero-socials {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.hero-socials a {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-700);
  font-size: 1.3rem;
}

.hero-socials a:hover {
  color: var(--color-brand-700);
}

.hero-main {
  padding-left: 0.15rem;
}

@media (max-width: 720px) {
  .section-frame {
    padding: 1.2rem;
  }

  .hero-layout {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-socials {
    flex-direction: row;
    margin-bottom: 0.5rem;
  }

  .hero-visual img {
    width: min(100%, 260px);
    height: min(100%, 260px);
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 721px) and (max-width: 1200px) {
  .hero-layout {
    grid-template-columns: 42px 1fr 330px;
    min-height: calc(100vh - 240px);
  }

  .hero-visual img {
    width: 310px;
    height: 310px;
  }
}
</style>
