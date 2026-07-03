<template>
  <main class="works-page">
    <section class="container section-frame heading">
      <h1>My Works</h1>
      <p>Few of my past and present projects.</p>
    </section>

    <section class="container section-frame works-list">
      <h2>Web Applications</h2>
      <div class="work-item" v-for="project in projects" :key="project.id">
        <img :src="project.image" :alt="project.title" />
        <div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="item-meta">
            <span>{{ project.category }}</span>
            <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }">
              open project
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="container section-frame ingredients">
      <h2>I cook with these ingredients</h2>
      <p>
        Vue.js, React, JavaScript, Node.js, Express, NestJS, MongoDB,
        PostgreSQL, Git, Docker.
      </p>
      <a href="/sujan_resume.pdf" class="resume-link" download>my resume</a>
    </section>
  </main>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "PortfolioPage",
  computed: {
    projects() {
      return projectsData.projects;
    },
  },
};
</script>

<style scoped>
.works-page {
  padding: 1rem 0 2rem;
}

.section-frame {
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 1.6rem;
  margin-bottom: 1rem;
}

.heading h1 {
  font-size: clamp(1.9rem, 5vw, 3rem);
  margin-bottom: 0.25rem;
}

.heading p {
  color: var(--color-text-500);
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 0.9rem;
}

.work-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 0.9rem;
  align-items: start;
  padding: 0.8rem 0;
  border-top: 1px solid var(--color-border);
}

.work-item:first-of-type {
  border-top: none;
  padding-top: 0;
}

.work-item img {
  width: 100%;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  object-fit: cover;
  aspect-ratio: 16/10;
}

.work-item h3 {
  font-size: 1.15rem;
  margin-bottom: 0.2rem;
}

.work-item p {
  color: var(--color-text-700);
}

.item-meta {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-top: 0.45rem;
}

.item-meta span {
  font-size: 0.78rem;
  color: var(--color-text-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.item-meta a {
  color: var(--color-brand-700);
  font-size: 0.85rem;
  text-transform: lowercase;
  font-weight: 600;
}

.ingredients p {
  margin-bottom: 0.8rem;
}

.resume-link {
  color: var(--color-brand-700);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
}

@media (max-width: 720px) {
  .section-frame {
    padding: 1.1rem;
  }

  .work-item {
    grid-template-columns: 1fr;
  }
}
</style>
