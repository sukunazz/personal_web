<template>
  <section class="services" id="services">
    <div class="container">
      <h2>Projects</h2>
      <p class="subtitle">List of all the projects that I have completed</p>
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
  padding: 80px 0;
  background: #f9f9f9;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.service-card {
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.service-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1.25rem;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
}

.service-card p {
  color: #666;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

.service-link {
  color: #4caf50;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  font-size: 0.95rem;
}

.service-link:hover {
  text-decoration: underline;
}

.view-all-container {
  text-align: center;
  margin-top: 2rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: #4caf50;
  text-decoration: none;
  border: 2px solid #333;
  border-radius: 50px;
  transition: all 0.3s ease;
  background: transparent;
}

.view-all-btn:hover {
  background: #4caf50;
  color: white;
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
    padding: 50px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .service-card {
    padding: 1.25rem;
    margin: 2rem 2rem 3rem 2rem;
  }

  .service-card img {
    height: 160px;
  }
}
</style>
