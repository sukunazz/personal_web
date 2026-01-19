<template>
  <section class="services" id="services">
    <div class="container">
      <h2>Featured Projects</h2>
      <p class="subtitle">A selection of builds that blend craft and utility.</p>
      <div class="services-grid">
        <div
          class="service-card"
          v-for="project in limitedProjects"
          :key="project.id"
        >
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <RouterLink
            :to="{ name: 'ProjectDetails', params: { id: project.id } }"
            class="service-link"
          >
            Check Project
          </RouterLink>
        </div>
      </div>
      <div class="view-all-container">
        <router-link to="/projects" class="view-all-btn">
          View All Projects
          <span class="arrow">→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    limitedProjects() {
      return this.projects.slice(0, 3);
    },
  },
  created() {
    this.projects = projectsData.projects;
  },
};
</script>

<style scoped>
.services {
  padding: 90px 0 100px;
  background: transparent;
}

h2 {
  text-align: center;
  font-size: 2.8rem;
  color: var(--color-forest);
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: var(--color-ink-muted);
  margin-bottom: 3rem;
  font-size: 1.05rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.service-card {
  padding: 1.8rem;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 20px;
  box-shadow: 0 14px 30px rgba(31, 42, 29, 0.12);
  border: 1px solid rgba(31, 42, 29, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 38px rgba(31, 42, 29, 0.16);
}

.service-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 16px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--color-ink);
}

.service-card p {
  color: var(--color-ink-muted);
  margin: 0;
  font-size: 0.98rem;
}

.service-link {
  color: var(--color-forest);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
}

.service-link::after {
  content: "→";
  transition: transform 0.3s ease;
}

.service-link:hover::after {
  transform: translateX(4px);
}

.view-all-container {
  text-align: center;
  margin-top: 2.8rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 2.2rem;
  font-size: 1rem;
  color: var(--color-ink);
  text-decoration: none;
  border: 1.5px solid rgba(31, 42, 29, 0.3);
  border-radius: 999px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.6);
}

.view-all-btn:hover {
  background: rgba(31, 111, 92, 0.1);
  color: var(--color-forest);
  transform: translateY(-2px);
}

.arrow {
  transition: transform 0.3s ease;
}

.view-all-btn:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .services {
    padding: 60px 0 80px;
  }

  h2 {
    font-size: 2.2rem;
  }

  .service-card {
    padding: 1.4rem;
    margin: 0 1rem;
  }

  .service-card img {
    height: 180px;
  }
}
</style>

