<template>
  <section class="featured-work" id="projects">
    <div class="container">
      <div class="section-header">
        <p class="kicker">Featured Work</p>
        <h2>Recent projects that demonstrate production-level execution.</h2>
      </div>

      <div class="work-grid">
        <article
          v-for="project in featuredProjects"
          :key="project.id"
          class="work-card"
        >
          <img :src="project.image" :alt="project.title" />
          <div class="work-content">
            <p class="tag">{{ project.category }}</p>
            <h3>{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
            <RouterLink
              :to="{ name: 'ProjectDetails', params: { id: project.id } }"
              class="detail-link"
            >
              See details
            </RouterLink>
          </div>
        </article>
      </div>

      <div class="section-footer">
        <router-link to="/projects" class="all-projects-btn">
          Explore all projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "ServicesSection",
  computed: {
    featuredProjects() {
      return projectsData.projects.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.featured-work {
  padding: 3rem 0;
}

.section-header {
  max-width: 780px;
  margin-bottom: 1.4rem;
}

.kicker {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-accent-600);
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
}

h2 {
  font-size: clamp(1.7rem, 2.5vw, 2.6rem);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.work-card {
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-strong);
}

.work-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.work-content {
  padding: 1rem;
}

.tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--color-brand-700);
  background: var(--color-bg-200);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.3rem 0.55rem;
  margin-bottom: 0.6rem;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.description {
  color: var(--color-text-700);
  margin-bottom: 0.8rem;
}

.detail-link {
  color: var(--color-brand-700);
  font-weight: 700;
}

.section-footer {
  margin-top: 1.25rem;
}

.all-projects-btn {
  display: inline-flex;
  border: 1px solid var(--color-brand-700);
  color: var(--color-brand-700);
  border-radius: 10px;
  padding: 0.58rem 0.95rem;
  font-weight: 700;
}

.all-projects-btn:hover {
  background: var(--color-brand-700);
  color: #fff;
}

@media (max-width: 980px) {
  .work-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>
