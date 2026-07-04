<template>
  <main class="projects-page">
    <section class="container section-card heading">
      <h1>Projects</h1>
      <p>Selected work. Click any card to open full project details.</p>
    </section>

    <section class="container section-card projects-grid">
      <router-link
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        :to="{ name: 'ProjectDetails', params: { id: project.id } }"
      >
        <div class="project-thumb">
          <img :src="project.image" :alt="project.title" />
        </div>
        <h3>{{ project.title }}</h3>
      </router-link>
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
.projects-page {
  padding: 1rem 0 2rem;
}

.section-card {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e3dfdf;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 22px rgba(44, 41, 38, 0.09);
}

.project-thumb {
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-card h3 {
  padding: 14px;
  font-size: 22px;
  color: #363a40;
}

@media (max-width: 1000px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .section-card {
    padding: 1.1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
