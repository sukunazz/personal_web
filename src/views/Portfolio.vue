<template>
  <main class="projects-page">
    <section class="container projects-card">
      <h2 class="skills-title">My Works</h2>
      <p class="skills-subtitle">Project Highlights</p>
      <span class="section-rule" aria-hidden="true"></span>

      <div class="projects-panel">
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
      </div>
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
  min-height: calc(100vh - 24px);
  padding-bottom: 26px;
  overflow-x: hidden;
}

.projects-card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface-soft);
  border-radius: 0;
  margin-top: -2px;
  padding: 40px 44px 54px;
  min-height: calc(100vh - 86px);
}

.skills-title {
  font-size: 58px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-heading);
}

.skills-subtitle {
  font-size: 40px;
  line-height: 1;
  color: var(--color-heading);
  margin-bottom: 20px;
}

.section-rule {
  display: block;
  width: 130px;
  height: 4px;
  border-radius: 99px;
  background: var(--color-accent-600);
  margin-bottom: 26px;
  position: relative;
}

.section-rule::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-accent-600);
  position: absolute;
  left: -4px;
  top: -3px;
}

.projects-panel {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 20px;
  margin-top: auto;
  padding-top: clamp(34px, 8vh, 88px);
  align-items: stretch;
}

.project-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d5e1eb;
  border-radius: 12px;
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
  aspect-ratio: 3/2;
  overflow: hidden;
  background: #edf3f8;
}

.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-card h3 {
  padding: 16px 16px 18px;
  font-size: 24px;
  line-height: 1.25;
  color: #363a40;
}

@media (max-width: 1200px) {
  .projects-panel {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
}

@media (max-width: 768px) {
  .projects-card {
    padding: 35px 25px 42px;
    min-height: calc(100vh - 92px);
  }

  .skills-title {
    font-size: 42px;
  }

  .skills-subtitle {
    font-size: 30px;
  }

  .projects-panel {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 0;
    padding-top: 30px;
  }
}

@media (max-width: 500px) {
  .skills-title {
    font-size: 34px;
  }

  .skills-subtitle {
    font-size: 24px;
  }
}
</style>
