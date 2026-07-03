<template>
  <section class="testimonial-section">
    <div class="container testimonial-layout">
      <article class="quote-card">
        <p class="kicker">Recommendation</p>
        <blockquote>
          "Sujan is one of the most dependable frontend developers I have worked
          with. He delivers quickly, writes clean code, and stays focused on the
          product outcome."
        </blockquote>
        <div class="author">
          <h4>Ashim</h4>
          <p>Python Enthusiast</p>
        </div>
      </article>

      <article class="collab-card">
        <h3>What collaboration with me looks like</h3>
        <ul>
          <li>Requirements translated into practical implementation steps</li>
          <li>Regular progress updates with clear blockers and next actions</li>
          <li>Readable code that your team can extend confidently</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialSection",
};
</script>

<style scoped>
.testimonial-section {
  padding: 2rem 0 2.8rem;
}

.testimonial-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;
}

.quote-card,
.collab-card {
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow-soft);
  padding: 1.5rem;
}

.kicker {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--color-accent-600);
  margin-bottom: 0.45rem;
}

blockquote {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-text-900);
  margin-bottom: 1.1rem;
}

.author h4 {
  font-size: 1.05rem;
  margin-bottom: 0.1rem;
}

.author p {
  color: var(--color-text-500);
  font-size: 0.95rem;
}

.collab-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
}

.collab-card ul {
  padding-left: 1rem;
  display: grid;
  gap: 0.5rem;
  color: var(--color-text-700);
}

@media (max-width: 860px) {
  .testimonial-layout {
    grid-template-columns: 1fr;
  }
}
</style>
