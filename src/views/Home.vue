<template>
  <main class="home-page">
    <div class="container canvas">
      <section class="hero">
        <div class="hero-grid">
          <div class="social-column">
            <a href="https://www.linkedin.com/in/sujansigdel/" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/sukunazz" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://x.com/sigdelsujan03" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
          </div>

          <div class="hero-copy">
            <p class="tag">It's me</p>
            <h1>Sujan<br />Sigdel</h1>
            <p class="role">Frontend Developer</p>
            <p class="intro">
              Software developer from Pokhara, Nepal with strong experience in
              building practical, maintainable, and clean web applications.
            </p>
            <router-link to="/#contact" class="talk-btn">let's talk</router-link>
          </div>

          <div class="hero-image">
            <img src="/images/sujan.png" alt="Profile placeholder" />
          </div>
        </div>
      </section>

      <section class="services">
        <h2>What I Can Do</h2>
        <p class="sub-title">Service Offers</p>
        <div class="services-grid">
          <article>
            <h3>Frontend Development</h3>
            <p>
              Vue.js, React, JavaScript, and CSS implementation with focus on
              performance and usability.
            </p>
          </article>
          <article>
            <h3>Backend Development</h3>
            <p>
              Node.js, Express, NestJS, and database integrations for secure and
              scalable web products.
            </p>
          </article>
        </div>
      </section>

      <section class="works" id="works">
        <h2>My Works</h2>
        <div class="works-list">
          <article class="work-row" v-for="project in featuredProjects" :key="project.id">
            <img :src="project.image" :alt="project.title" />
            <div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }">
                view project
              </router-link>
            </div>
          </article>
        </div>
      </section>

      <section class="contact" id="contact">
        <h2>Contact</h2>
        <p class="sub-title">Let us build something valuable together.</p>
        <div class="contact-grid">
          <div>
            <p><strong>Email:</strong> sujansigdel03@gmail.com</p>
            <p><strong>Phone:</strong> +977 9825152682</p>
            <p><strong>Location:</strong> Pokhara, Nepal</p>
          </div>
          <div class="contact-actions">
            <router-link to="/contact" class="primary">send message</router-link>
            <a href="/sujan_resume.pdf" download class="secondary">download resume</a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "HomePage",
  computed: {
    featuredProjects() {
      return projectsData.projects.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.home-page {
  padding: 1rem 0 2rem;
}

.canvas {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 1.6rem;
}

.hero {
  margin-bottom: 2.4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 58px 1fr 420px;
  gap: 1.2rem;
  align-items: center;
}

.social-column {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-column a {
  width: 34px;
  height: 34px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-700);
  background: var(--color-surface-soft);
}

.social-column a:hover {
  color: var(--color-brand-700);
}

.tag {
  display: inline-flex;
  padding: 0.32rem 0.58rem;
  border-radius: var(--radius-sm);
  background: #2f2c2a;
  color: #fff;
  font-size: 0.82rem;
  margin-bottom: 0.7rem;
}

h1 {
  font-size: clamp(2.2rem, 5.4vw, 4rem);
  line-height: 0.98;
  margin-bottom: 0.55rem;
}

.role {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
  color: var(--color-accent-600);
  margin-bottom: 0.9rem;
}

.intro {
  max-width: 460px;
  margin-bottom: 1rem;
}

.talk-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #ed7e6e;
  color: #fff;
  font-weight: 600;
  text-transform: lowercase;
  line-height: 1;
  text-align: center;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.hero-image img {
  width: min(100%, 390px);
  height: min(100%, 390px);
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #1f1f1f;
  background: #e6dfd4;
}

section + section {
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

h2 {
  font-size: 2rem;
  margin-bottom: 0.35rem;
}

.sub-title {
  color: var(--color-text-500);
  margin-bottom: 0.9rem;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}

.services-grid article {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.9rem;
  background: var(--color-surface-soft);
}

.services-grid h3 {
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
}

.works-list {
  display: grid;
  gap: 0.9rem;
}

.work-row {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 0.8rem;
  align-items: start;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.75rem;
  background: var(--color-surface-soft);
}

.work-row img {
  width: 100%;
  border-radius: var(--radius-sm);
  object-fit: cover;
  aspect-ratio: 16/10;
  border: 1px solid var(--color-border);
}

.work-row h3 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.work-row a {
  display: inline-flex;
  margin-top: 0.5rem;
  color: var(--color-brand-700);
  font-weight: 600;
  text-transform: lowercase;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
}

.contact-grid p {
  margin-bottom: 0.3rem;
}

.contact-actions {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.contact-actions .primary,
.contact-actions .secondary {
  border-radius: var(--radius-sm);
  padding: 0.55rem 0.8rem;
  font-size: 0.88rem;
  text-transform: lowercase;
  font-weight: 600;
}

.contact-actions .primary {
  background: var(--color-brand-700);
  color: #fff;
}

.contact-actions .secondary {
  border: 1px solid var(--color-border);
  color: var(--color-text-700);
  background: var(--color-surface-soft);
}

@media (max-width: 1000px) {
  .hero-grid {
    grid-template-columns: 50px 1fr;
  }

  .hero-image {
    grid-column: 1 / -1;
    justify-content: flex-start;
    margin-left: 52px;
  }
}

@media (max-width: 720px) {
  .canvas {
    padding: 1rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .social-column {
    flex-direction: row;
  }

  .hero-image {
    margin-left: 0;
  }

  .hero-image img {
    width: min(100%, 280px);
    height: min(100%, 280px);
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .work-row {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
