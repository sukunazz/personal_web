<template>
  <main class="contact-page">
    <section class="page-header">
      <div class="container">
        <p class="kicker">Contact</p>
        <h1>Tell me what you are building and what support you need.</h1>
        <p>
          Share scope, timeline, and goals. I will reply with practical next
          steps.
        </p>
      </div>
    </section>

    <ContactSection />
  </main>
</template>

<script>
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "ContactPage",
  components: {
    ContactSection,
  },
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.page-header {
  padding: 8rem 0 0.8rem;
}

.kicker {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--color-accent-600);
  font-weight: 700;
  margin-bottom: 0.4rem;
}

h1 {
  font-size: clamp(1.9rem, 3vw, 3rem);
  line-height: 1.1;
  max-width: 860px;
  margin-bottom: 0.65rem;
}

p {
  color: var(--color-text-700);
  font-size: 1.03rem;
}

@media (max-width: 680px) {
  .page-header {
    padding-top: 7.2rem;
  }
}
</style>
