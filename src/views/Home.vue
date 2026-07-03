<template>
  <main class="home-page">
    <section class="container section-frame hero">
      <div class="hero-layout">
        <div>
          <p class="eyebrow">It is me</p>
          <h1 class="hero-name">S u j a n<br />S i g d e l</h1>
          <p class="hero-role">Frontend Developer</p>
          <p class="hero-copy">
            Software developer from Pokhara, Nepal. I build practical web
            products with strong frontend architecture, reliable backend
            integration, and a focus on maintainability.
          </p>

          <div class="hero-actions">
            <router-link to="/contact" class="btn-primary">let us talk</router-link>
            <a href="/sujan_resume.pdf" download class="btn-ghost">my resume</a>
          </div>
        </div>

        <div class="hero-visual">
          <img src="/images/sujan.png" alt="Profile placeholder" />
        </div>
      </div>

      <div class="hero-note">
        <p>Currently building production-grade web apps for startups and teams.</p>
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
  padding: 1rem 0 2rem;
}

.section-frame {
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 2rem;
  margin-bottom: 1rem;
}

.eyebrow {
  font-size: 0.86rem;
  color: var(--color-text-500);
  margin-bottom: 0.6rem;
}

.hero-name {
  font-size: clamp(2.1rem, 7vw, 4.2rem);
  line-height: 1;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1.2rem;
  align-items: center;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.hero-visual img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #1f1f1f;
  background: #e8dfd1;
}

.hero-role {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  font-size: 0.83rem;
  color: var(--color-accent-600);
  margin-bottom: 0.8rem;
}

.hero-copy {
  max-width: 760px;
  color: var(--color-text-700);
  margin-bottom: 1.1rem;
}

.hero-actions {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.btn-primary,
.btn-ghost {
  padding: 0.62rem 0.92rem;
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  font-weight: 600;
  text-transform: lowercase;
}

.btn-primary {
  background: var(--color-brand-700);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-brand-600);
}

.btn-ghost {
  border: 1px solid var(--color-border);
  color: var(--color-text-700);
  background: var(--color-surface-soft);
}

.hero-note {
  border-top: 1px dashed var(--color-border);
  padding-top: 0.75rem;
  color: var(--color-text-500);
  font-size: 0.92rem;
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

@media (max-width: 720px) {
  .section-frame {
    padding: 1.2rem;
  }

  .hero-layout {
    grid-template-columns: 1fr;
  }

  .hero-visual img {
    width: min(100%, 260px);
    height: min(100%, 260px);
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
