<template>
  <section class="stack-section">
    <div class="container stack-layout">
      <div class="stack-copy">
        <p class="kicker">Tech Stack</p>
        <h2>Tools I use to ship clean, scalable web products.</h2>
        <p>
          I choose technology based on product requirements, team familiarity,
          and maintainability. The focus is always on reliable delivery, not
          tool hype.
        </p>
      </div>

      <div class="stack-grid">
        <article class="stack-card">
          <h3>Frontend</h3>
          <ul>
            <li>Vue.js</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5 + CSS3</li>
          </ul>
        </article>

        <article class="stack-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>NestJS</li>
            <li>MongoDB</li>
          </ul>
        </article>

        <article class="stack-card">
          <h3>Deployment</h3>
          <ul>
            <li>Vercel</li>
            <li>GitHub</li>
            <li>REST APIs</li>
            <li>Performance tuning</li>
          </ul>
        </article>

        <article class="stack-card">
          <h3>Workflow</h3>
          <ul>
            <li>Requirement alignment</li>
            <li>Milestone-driven delivery</li>
            <li>Code readability first</li>
            <li>Post-release support</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioSection",
};
</script>

<style scoped>
.stack-section {
  padding: 2rem 0 3rem;
}

.stack-layout {
  display: grid;
  gap: 1rem;
}

.stack-copy {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.4rem;
  box-shadow: var(--shadow-soft);
}

.kicker {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent-600);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

h2 {
  font-size: clamp(1.7rem, 2.5vw, 2.5rem);
  margin-bottom: 0.7rem;
}

.stack-copy p {
  font-size: 1.03rem;
  color: var(--color-text-700);
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
}

.stack-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: var(--shadow-soft);
  padding: 1rem;
}

.stack-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-brand-700);
}

.stack-card ul {
  list-style: none;
  display: grid;
  gap: 0.42rem;
  color: var(--color-text-700);
}

.stack-card li {
  position: relative;
  padding-left: 0.95rem;
}

.stack-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.56rem;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-accent-600);
}

@media (max-width: 980px) {
  .stack-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 620px) {
  .stack-grid {
    grid-template-columns: 1fr;
  }
}
</style>
