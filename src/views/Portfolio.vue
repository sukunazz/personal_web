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
  min-height: calc(100vh - 120px);
  padding-bottom: 0;
  display: flex;
}

.projects-card {
  flex: 1;
  background: #ffffff;
  border-radius: 0 0 14px 14px;
  margin-top: -2px;
  padding: 40px 44px 46px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.05);
  min-height: calc(100vh - 120px);
}

.skills-title {
  font-size: 58px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 8px;
  color: #4b4f56;
}

.skills-subtitle {
  font-size: 40px;
  line-height: 1;
  color: #4b4f56;
  margin-bottom: 20px;
}

.section-rule {
  display: block;
  width: 130px;
  height: 4px;
  border-radius: 99px;
  background: #e5524c;
  margin-bottom: 26px;
  position: relative;
}

.section-rule::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e5524c;
  position: absolute;
  left: -4px;
  top: -3px;
}

.projects-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 6px;
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

@media (max-width: 1200px) {
  .projects-panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .projects-card {
    padding: 35px 25px;
    min-height: calc(100vh - 110px);
  }

  .skills-title {
    font-size: 42px;
  }

  .skills-subtitle {
    font-size: 30px;
  }

  .projects-panel {
    grid-template-columns: 1fr;
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
