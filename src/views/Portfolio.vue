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
}

.card {
  /* background: white; */
  background: #f8f9fa;

  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
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
}

.card-footer {
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
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
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
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

<!-- <template>
  <div class="portfolio-page">
    <div class="page-header">
      <div class="container">
        <h1>Portfolio</h1>
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
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="portfolio-item"
        >
          <div class="portfolio-card">
            <div class="portfolio-image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="portfolio-content">
              <span class="project-category">{{ project.category }}</span>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-meta">
                <span class="project-date">{{ project.date }}</span>
                <a :href="project.link" class="view-project">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";

// Import images
import sujan from "@/assets/images/sujan.png";

export default {
  name: "Portfolio",
  setup() {
    const selectedCategory = ref("All");

    const categories = [
      "All",
      "Web Design",
      "Mobile Apps",
      "UI/UX Design",
      "Branding",
    ];

    const projects = [
      {
        title: "Modern E-commerce Platform",
        category: "Web Design",
        image: sujan,
        description:
          "A fully responsive e-commerce platform built with Vue.js and modern web technologies.",
        date: "March 2024",
        link: "#",
        tags: ["Vue.js", "E-commerce", "Responsive"],
      },
      {
        title: "Health & Fitness App",
        category: "Mobile Apps",
        image: sujan,
        description:
          "A comprehensive mobile application for tracking fitness goals and maintaining healthy habits.",
        date: "February 2024",
        link: "#",
        tags: ["Mobile", "Healthcare", "UX Design"],
      },
      {
        title: "Corporate Brand Identity",
        category: "Branding",
        image: sujan,
        description:
          "Complete brand identity design including logo, typography, and brand guidelines.",
        date: "January 2024",
        link: "#",
        tags: ["Branding", "Design", "Identity"],
      },
      {
        title: "User Experience Design",
        category: "UI/UX Design",
        image: sujan,
        description:
          "Comprehensive UX research and design for a financial technology platform.",
        date: "December 2023",
        link: "#",
        tags: ["UX", "Research", "Design"],
      },
    ];

    const filteredProjects = computed(() => {
      if (selectedCategory.value === "All") {
        return projects;
      }
      return projects.filter(
        (project) => project.category === selectedCategory.value
      );
    });

    const filterByCategory = (category) => {
      selectedCategory.value = category;
    };

    return {
      selectedCategory,
      categories,
      projects,
      filteredProjects,
      filterByCategory,
    };
  },
};
</script>
<style scoped>
.portfolio-page {
  padding: 2rem 0;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  margin-bottom: 3rem;
  color: white;
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.page-header p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
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
  border: none;
  background: white;
  font-size: 0.95rem;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-weight: 500;
}

.category-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-btn.active {
  background: #2c3e50;
  color: white;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  transition: all 0.3s ease;
}

.portfolio-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.portfolio-image {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-card:hover .portfolio-image img {
  transform: scale(1.05);
}

.portfolio-content {
  padding: 1.5rem;
}

.project-category {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: #f0f4f8;
  color: #2c3e50;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.project-title {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.3;
}

.project-description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #f0f4f8;
}

.project-date {
  color: #94a3b8;
  font-size: 0.9rem;
}

.view-project {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-project:hover {
  background: #3498db;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 992px) {
  .container {
    padding: 0 1.5rem;
  }

  .page-header h1 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .page-header {
    padding: 3rem 0;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .portfolio-categories {
    gap: 0.75rem;
  }

  .category-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1.1rem;
  }

  .portfolio-content {
    padding: 1.25rem;
  }
}
</style> -->
