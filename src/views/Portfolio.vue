<template>
  <main class="portfolio-page">
    <section class="page-header">
      <div class="container">
        <p class="kicker">Projects</p>
        <h1>Selected work with clear business impact and technical depth.</h1>
        <p class="subtitle">
          Explore project details, architecture choices, and implementation
          highlights.
        </p>
      </div>
    </section>

    <section class="container">
      <div class="portfolio-categories">
        <button
          v-for="category in categories"
          :key="category"
          :class="['category-btn', { active: selectedCategory === category }]"
          @click="selectedCategory = category"
          type="button"
        >
          {{ category }}
        </button>
      </div>

      <div class="portfolio-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="portfolio-item"
        >
          <img :src="project.image" :alt="project.title" class="item-image" />
          <div class="item-content">
            <p class="category-tag">{{ project.category }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <router-link
              :to="{ name: 'ProjectDetails', params: { id: project.id } }"
              class="view-project"
            >
              View project
            </router-link>
          </div>
        </article>

        <article class="portfolio-item placeholder-item">
          <div class="item-content">
            <p class="category-tag">Next Slot</p>
            <h3>New Project Coming Soon</h3>
            <p>
              This section is intentionally open and ready for your next case
              study.
            </p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "PortfolioPage",
  data() {
    return {
      selectedCategory: "All",
      projects: projectsData.projects,
    };
  },
  computed: {
    categories() {
      const uniqueCategories = [...new Set(this.projects.map((p) => p.category))];
      return ["All", ...uniqueCategories];
    },
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
  min-height: 100vh;
  padding-bottom: 3rem;
}

.page-header {
  padding: 8rem 0 2rem;
}

.kicker {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-accent-600);
  margin-bottom: 0.45rem;
}

h1 {
  font-size: clamp(1.9rem, 3vw, 3rem);
  line-height: 1.12;
  max-width: 900px;
}

.subtitle {
  margin-top: 0.7rem;
  color: var(--color-text-700);
  font-size: 1.05rem;
}

.portfolio-categories {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.category-btn {
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  padding: 0.45rem 0.82rem;
  color: var(--color-text-700);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
}

.category-btn.active,
.category-btn:hover {
  border-color: var(--color-brand-700);
  background: var(--color-brand-700);
  color: #fff;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.portfolio-item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.portfolio-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-strong);
}

.item-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.item-content {
  padding: 1rem;
}

.category-tag {
  display: inline-block;
  margin-bottom: 0.45rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-200);
  color: var(--color-brand-700);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.58rem;
}

h3 {
  font-size: 1.23rem;
  margin-bottom: 0.45rem;
}

.item-content p {
  color: var(--color-text-700);
}

.view-project {
  margin-top: 0.7rem;
  display: inline-flex;
  color: var(--color-brand-700);
  font-weight: 700;
}

.placeholder-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: dashed;
}

@media (max-width: 980px) {
  .portfolio-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 680px) {
  .page-header {
    padding-top: 7.2rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
