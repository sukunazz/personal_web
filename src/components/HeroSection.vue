<template>
  <section class="hero-container">
    <div class="container hero-content">
      <div class="hero-copy">
        <p class="eyebrow">Frontend Developer | Vue.js, React, JavaScript</p>
        <h1>
          I build reliable product interfaces that are easy to use and easy to
          maintain.
        </h1>
        <p class="description">
          I am Sujan Sigdel, a frontend-focused full stack developer based in
          Nepal. I deliver fast, responsive web applications with clean code,
          clear communication, and attention to business goals.
        </p>

        <div class="quick-points">
          <span>2+ Years Experience</span>
          <span>4 Production Projects</span>
          <span>Available for Hiring</span>
        </div>

        <div class="cta-buttons">
          <router-link to="/projects" class="primary-btn">View Projects</router-link>
          <a href="/sujan_resume.pdf" class="secondary-btn" download>
            Download Resume
          </a>
          <router-link to="/contact" class="ghost-btn">Let's Talk</router-link>
        </div>

        <div class="social-links">
          <a href="https://github.com/sukunazz" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://x.com/sigdelsujan03" aria-label="X">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/sujansigdel/" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div class="hero-panel">
        <p class="status-chip">Open To Full-time And Contract Roles</p>
        <div class="panel-grid">
          <article class="panel-card">
            <h3>Product-Ready Frontend</h3>
            <p>
              Component architecture, API integration, clean state management,
              and consistent UI behavior across pages.
            </p>
          </article>
          <article class="panel-card">
            <h3>Performance + UX</h3>
            <p>
              Focus on load speed, responsive layouts, accessibility basics, and
              smooth user journeys from landing to conversion.
            </p>
          </article>
          <article class="panel-card">
            <h3>Delivery Discipline</h3>
            <p>
              Clear milestones, practical tradeoff decisions, and reliable
              communication during implementation.
            </p>
          </article>
        </div>

        <div class="availability-box">
          <h4>Hiring Snapshot</h4>
          <ul>
            <li>
              <span>Location</span>
              <strong>Pokhara, Nepal</strong>
            </li>
            <li>
              <span>Preferred Work</span>
              <strong>Remote / Hybrid</strong>
            </li>
            <li>
              <span>Primary Stack</span>
              <strong>Vue, React, Node.js</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-container {
  padding: 8.6rem 0 4.5rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  gap: 2.5rem;
  align-items: start;
}

.hero-copy {
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(204, 218, 232, 0.9);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-soft);
  padding: 2.2rem;
}

.eyebrow {
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.09em;
  color: var(--color-accent-600);
  font-weight: 700;
  margin-bottom: 0.8rem;
}

h1 {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  line-height: 1.08;
  margin-bottom: 1.1rem;
}

.description {
  font-size: 1.12rem;
  color: var(--color-text-700);
  margin-bottom: 1.3rem;
}

.quick-points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.quick-points span {
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  background: var(--color-bg-200);
  border: 1px solid var(--color-border);
  font-size: 0.83rem;
  color: var(--color-text-700);
  font-weight: 600;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
}

.primary-btn,
.secondary-btn,
.ghost-btn {
  min-width: 150px;
  text-align: center;
  border-radius: 12px;
  padding: 0.74rem 1.1rem;
  font-weight: 700;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.primary-btn {
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--color-brand-700),
    var(--color-accent-600)
  );
  box-shadow: 0 12px 24px rgba(15, 76, 129, 0.22);
}

.secondary-btn {
  color: var(--color-brand-700);
  border: 1px solid var(--color-brand-700);
  background: rgba(255, 255, 255, 0.92);
}

.ghost-btn {
  color: var(--color-text-700);
  border: 1px solid var(--color-border);
  background: var(--color-surface-soft);
}

.primary-btn:hover,
.secondary-btn:hover,
.ghost-btn:hover {
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  gap: 0.8rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-brand-700);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.88);
  transition: all 0.25s ease;
}

.social-links a:hover {
  background: var(--color-brand-700);
  color: #fff;
}

.hero-panel {
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: linear-gradient(145deg, #0f4c81, #1f8f8b);
  box-shadow: var(--shadow-strong);
  color: #fff;
}

.status-chip {
  display: inline-block;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.36);
  padding: 0.4rem 0.72rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.panel-grid {
  display: grid;
  gap: 0.9rem;
}

.panel-card {
  background: rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 1rem;
}

.panel-card h3 {
  font-size: 1.05rem;
  margin-bottom: 0.45rem;
  color: #fff;
}

.panel-card p {
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.95rem;
}

.availability-box {
  margin-top: 1rem;
  background: rgba(8, 28, 44, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: var(--radius-md);
  padding: 1rem;
}

.availability-box h4 {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.65rem;
}

.availability-box ul {
  list-style: none;
  display: grid;
  gap: 0.5rem;
}

.availability-box li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.9rem;
}

.availability-box span {
  color: rgba(255, 255, 255, 0.75);
}

.availability-box strong {
  color: #fff;
}

@media (max-width: 980px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-container {
    padding-top: 7.8rem;
  }
}

@media (max-width: 600px) {
  .hero-copy,
  .hero-panel {
    padding: 1.25rem;
  }

  .cta-buttons > * {
    width: 100%;
  }
}
</style>
