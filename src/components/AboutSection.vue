<template>
  <section class="about" id="about">
    <div class="container about-layout">
      <div class="about-copy">
        <p class="section-kicker">Why Hire Me</p>
        <h2>Clear communication, clean architecture, and practical delivery.</h2>
        <p>
          I work best with teams that value product quality and predictable
          execution. My approach is simple: understand the problem, scope a
          realistic solution, and ship with measurable improvements.
        </p>
        <p>
          Beyond coding, I focus on maintainability, usability, and collaboration.
          That helps teams move faster after release, not just at release.
        </p>
      </div>

      <div class="about-panels">
        <article class="panel">
          <h3>Strengths Employers Notice</h3>
          <ul>
            <li>Structured component architecture for scalable frontend code</li>
            <li>Reliable API integration and real-world state handling</li>
            <li>Responsive design that works cleanly across devices</li>
            <li>Consistent communication and milestone updates</li>
          </ul>
        </article>

        <article class="panel">
          <h3>How I Execute</h3>
          <div class="execution-grid">
            <div>
              <span>01</span>
              <p>Clarify requirements and define a lean implementation path.</p>
            </div>
            <div>
              <span>02</span>
              <p>Build core flows first and validate behavior early.</p>
            </div>
            <div>
              <span>03</span>
              <p>Polish UI details, optimize, and prepare for deployment.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about {
  padding: 1rem 0 3.2rem;
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 1.2rem;
}

.about-copy,
.panel {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
  border-radius: var(--radius-lg);
  padding: 1.7rem;
}

.section-kicker {
  text-transform: uppercase;
  color: var(--color-accent-600);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  margin-bottom: 0.55rem;
}

h2 {
  font-size: clamp(1.7rem, 2.5vw, 2.5rem);
  margin-bottom: 0.95rem;
}

.about-copy p {
  color: var(--color-text-700);
  margin-bottom: 0.7rem;
  font-size: 1.04rem;
}

.about-panels {
  display: grid;
  gap: 1rem;
}

h3 {
  margin-bottom: 0.65rem;
  font-size: 1.2rem;
}

ul {
  margin: 0;
  padding-left: 1.2rem;
  display: grid;
  gap: 0.5rem;
  color: var(--color-text-700);
}

.execution-grid {
  display: grid;
  gap: 0.65rem;
}

.execution-grid div {
  border: 1px solid var(--color-border);
  background: var(--color-surface-soft);
  border-radius: var(--radius-sm);
  padding: 0.8rem;
}

.execution-grid span {
  display: inline-flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-brand-700);
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  margin-bottom: 0.4rem;
}

.execution-grid p {
  color: var(--color-text-700);
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
}
</style>
