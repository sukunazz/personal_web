<template>
  <main class="project-details-page">
    <div class="container page-body">
      <router-link to="/projects" class="back-link">Back to projects</router-link>

      <section v-if="project" class="content">
        <header class="project-header">
          <p class="category-tag">{{ project.category }}</p>
          <h1>{{ project.title }}</h1>
          <p class="intro">{{ project.description }}</p>
          <div class="meta-grid">
            <div>
              <span>Role</span>
              <strong>{{ project.role || "Frontend Developer" }}</strong>
            </div>
            <div>
              <span>Team</span>
              <strong>{{ project.teamSize || "Small Team" }}</strong>
            </div>
            <div>
              <span>Completed</span>
              <strong>{{ project.completedDate || "Recent" }}</strong>
            </div>
          </div>
        </header>

        <div class="preview">
          <img
            :src="project.previewImage || project.image"
            :alt="`${project.title} preview`"
          />
        </div>

        <div class="details-grid">
          <section class="main-column">
            <article class="card" v-if="project.overview">
              <h2>Project Overview</h2>
              <p>{{ project.overview }}</p>
            </article>

            <article
              class="card"
              v-if="project.challenges && project.challenges.length > 0"
            >
              <h2>Challenges And Solutions</h2>
              <div
                v-for="(challenge, index) in project.challenges"
                :key="index"
                class="challenge-item"
              >
                <h3>{{ challenge.title }}</h3>
                <p>{{ challenge.solution }}</p>
              </div>
            </article>

            <article class="card" v-if="project.gallery && project.gallery.length > 0">
              <h2>Gallery</h2>
              <div class="gallery-grid">
                <div
                  v-for="(image, index) in project.gallery"
                  :key="index"
                  class="gallery-item"
                >
                  <img :src="image.src" :alt="image.alt" />
                </div>
              </div>
            </article>
          </section>

          <aside class="side-column">
            <article
              class="card"
              v-if="project.technologies && project.technologies.length > 0"
            >
              <h2>Tech Stack</h2>
              <ul class="list">
                <li v-for="(tech, index) in project.technologies" :key="index">
                  {{ tech }}
                </li>
              </ul>
            </article>

            <article class="card" v-if="project.links && project.links.length > 0">
              <h2>Project Links</h2>
              <div class="links-list">
                <a
                  v-for="(link, index) in project.links"
                  :key="index"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ link.text }}
                </a>
              </div>
            </article>

            <article
              class="card"
              v-if="project.achievements && project.achievements.length > 0"
            >
              <h2>Key Achievements</h2>
              <ul class="list">
                <li v-for="(achievement, index) in project.achievements" :key="index">
                  {{ achievement }}
                </li>
              </ul>
            </article>
          </aside>
        </div>

        <router-link
          v-if="nextProject"
          :to="`/projects/${nextProject.id}`"
          class="next-project"
        >
          <span>Next project</span>
          <strong>{{ nextProject.title }}</strong>
        </router-link>
      </section>

      <section v-else class="not-found">
        <h2>Project not found.</h2>
        <p>The requested project is not available in the portfolio.</p>
      </section>
    </div>
  </main>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "ProjectDetails",
  computed: {
    projects() {
      return projectsData.projects;
    },
    project() {
      const projectId = this.$route.params.id;
      return this.projects.find((p) => String(p.id) === String(projectId));
    },
    nextProject() {
      if (!this.project) return null;
      const currentIndex = this.projects.findIndex(
        (p) => String(p.id) === String(this.project.id)
      );
      if (currentIndex === -1) return null;
      return this.projects[(currentIndex + 1) % this.projects.length];
    },
  },
};
</script>

<style scoped>
.project-details-page {
  min-height: 100vh;
  padding-bottom: 2.8rem;
}

.page-body {
  padding-top: 7.9rem;
}

.back-link {
  display: inline-flex;
  margin-bottom: 1rem;
  color: var(--color-brand-700);
  font-weight: 700;
}

.project-header {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-soft);
  padding: 1.4rem;
  margin-bottom: 1rem;
}

.category-tag {
  display: inline-block;
  margin-bottom: 0.45rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-200);
  color: var(--color-brand-700);
  font-size: 0.76rem;
  font-weight: 700;
  padding: 0.28rem 0.62rem;
}

h1 {
  font-size: clamp(2rem, 3.2vw, 3rem);
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.intro {
  color: var(--color-text-700);
  font-size: 1.05rem;
  margin-bottom: 0.9rem;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.6rem;
}

.meta-grid div {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-surface-soft);
  padding: 0.55rem 0.7rem;
}

.meta-grid span {
  display: block;
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-500);
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.meta-grid strong {
  color: var(--color-text-900);
  font-size: 0.95rem;
}

.preview {
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.preview img {
  width: 100%;
  aspect-ratio: 16 / 8;
  object-fit: cover;
}

.details-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1rem;
}

.main-column,
.side-column {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-soft);
  padding: 1rem;
}

.card h2 {
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
}

.card p {
  color: var(--color-text-700);
}

.challenge-item + .challenge-item {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border);
}

.challenge-item h3 {
  font-size: 1rem;
  margin-bottom: 0.35rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;
}

.gallery-item {
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.list {
  list-style: none;
  display: grid;
  gap: 0.5rem;
  color: var(--color-text-700);
}

.list li {
  position: relative;
  padding-left: 0.9rem;
}

.list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.58rem;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-accent-600);
}

.links-list {
  display: grid;
  gap: 0.45rem;
}

.links-list a {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.5rem 0.65rem;
  font-weight: 600;
  color: var(--color-brand-700);
  background: var(--color-surface-soft);
}

.next-project {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-border);
  background: linear-gradient(
    135deg,
    rgba(15, 76, 129, 0.95),
    rgba(31, 143, 139, 0.95)
  );
  color: #fff;
  border-radius: var(--radius-lg);
  padding: 0.85rem 1rem;
  box-shadow: var(--shadow-soft);
}

.next-project span {
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-size: 0.72rem;
  opacity: 0.88;
}

.next-project strong {
  font-size: 1.1rem;
}

.not-found {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-soft);
  padding: 1.25rem;
}

@media (max-width: 980px) {
  .details-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .page-body {
    padding-top: 7.2rem;
  }

  .meta-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
