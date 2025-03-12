<template>
  <div class="portfolio-page">
    <div class="page-header">
      <div class="container">
        <h1>Projects</h1>
        <p>Explore my creative work and professional projects</p>
      </div>
    </div>

    <div class="container">
      <div class="portfolio-categories">
        <button
          v-for="category in categories"
          :key="category"
          :class="['category-btn', { active: selectedCategory === category }]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="portfolio-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="portfolio-item"
        >
          <div class="card">
            <div class="card-image">
              <img :src="project.image" :alt="project.title" />
              <div class="card-overlay">
                <span class="category-tag">{{ project.category }}</span>
              </div>
            </div>
            <div class="card-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="card-footer">
                <router-link
                  :to="{ name: 'ProjectDetails', params: { id: project.id } }"
                  class="view-project"
                >
                  View Project
                  <span class="arrow">→</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "PortfolioPage",
  data() {
    return {
      selectedCategory: "All",
      categories: projectsData.categories,
      projects: projectsData.projects,
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === "All") {
        return this.projects;
      }
      return this.projects.filter(
        (project) => project.category === this.selectedCategory
      );
    },
  },
};
</script>

<style scoped>
.portfolio-page {
  padding: 2rem 0;
  /* background-color: #f8f9fa; */
  min-height: 100vh;
}

.page-header {
  text-align: center;
  padding: 4rem 0;
  /* background: linear-gradient(to right, #2c3e50, #3498db); */
  background-color: #f8f9fa;
  margin-bottom: 3rem;
  color: #333;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #4caf50;
  font-weight: 700;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  /* background-color: white; */
  padding: 0 2rem;
}

.portfolio-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid #7e8790;
  background: transparent;
  font-size: 1rem;
  color: #4caf50;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  font-weight: 500;
}

.category-btn:hover {
  background-color: #4caf50;
  color: white;
  transform: translateY(-2px);
}

.category-btn.active {
  background-color: #4caf50;
  color: white;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
}

.portfolio-item {
  transition: all 0.3s ease;
  height: 100%;
}

.card {
  /* background: white; */
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.category-tag {
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-content h3 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.card-content p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex: 1;
}

.card-footer {
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
  margin-top: auto;
}

.view-project {
  display: inline-flex;
  align-items: center;
  color: #4caf50;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.arrow {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.view-project:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 0;
    margin-top: 3rem;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  .card {
    margin: 1rem 2rem 2rem 2rem;
  }
  .card-image {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .category-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
