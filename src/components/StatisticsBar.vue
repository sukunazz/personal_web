<template>
  <section class="statistics">
    <div class="container">
      <div class="stats-grid">
        <article class="stat-item">
          <span class="label">Production Projects</span>
          <h3>4+</h3>
          <p>Built and deployed full-featured web applications.</p>
        </article>
        <article class="stat-item">
          <span class="label">Core Experience</span>
          <h3>2+ yrs</h3>
          <p>Frontend-first delivery with practical full stack capability.</p>
        </article>
        <article class="stat-item">
          <span class="label">Tech Stack</span>
          <h3>10+</h3>
          <p>Modern tools across UI, API, database, and deployment.</p>
        </article>
        <article class="stat-item">
          <span class="label">Work Style</span>
          <h3>Fast + Clear</h3>
          <p>Consistent updates, transparent tradeoffs, reliable handover.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatisticsBar",
};
</script>

<style scoped>
.statistics {
  padding: 0.8rem 0 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
}

.stat-item {
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow-soft);
  padding: 1rem;
}

.label {
  display: inline-block;
  color: var(--color-accent-600);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.76rem;
  font-weight: 700;
  margin-bottom: 0.28rem;
}

h3 {
  font-size: 1.7rem;
  margin-bottom: 0.3rem;
}

p {
  color: var(--color-text-700);
  font-size: 0.95rem;
}

@media (max-width: 980px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 580px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
