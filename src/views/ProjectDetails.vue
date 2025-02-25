<!-- <template>
  <section class="project-details">
    <div class="container" v-if="project">
      <div class="project-header">
        <h1>{{ project.title }}</h1>
        <img :src="project.image" :alt="project.title" class="project-image" />
      </div>

      <div class="project-info">
        <div class="info-grid">
          <div class="info-item">
            <h3>Role</h3>
            <p>{{ project.role }}</p>
          </div>
          <div class="info-item">
            <h3>Team Size</h3>
            <p>{{ project.teamSize }}</p>
          </div>
          <div class="info-item">
            <h3>Completed</h3>
            <p>{{ project.completedDate }}</p>
          </div>
        </div>

        <div class="description">
          <h3>Project Description</h3>
          <p>{{ project.description }}</p>
        </div>

        <div class="technologies">
          <h3>Technologies Used</h3>
          <div class="tech-tags">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <router-link to="/" class="back-btn"> ← Back to Projects </router-link>
    </div>

    <div v-else class="error-message">Project not found</div>
  </section>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "ProjectDetails",
  data() {
    return {
      project: null,
    };
  },
  created() {
    const projectId = parseInt(this.$route.params.id);
    this.project = projectsData.projects.find((p) => p.id === projectId);
  },
};
</script>

<style scoped>
.project-details {
  padding: 60px 0;
  background: #f9f9f9;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.project-header {
  margin-bottom: 40px;
  text-align: center;
}

.project-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.project-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.project-info {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.info-item h3 {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 8px;
}

.info-item p {
  font-size: 1.2rem;
  color: #333;
}

.description {
  margin-bottom: 40px;
}

.description h3 {
  font-size: 1.4rem;
  margin-bottom: 16px;
  color: #333;
}

.description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}

.technologies h3 {
  font-size: 1.4rem;
  margin-bottom: 16px;
  color: #333;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-tag {
  background: #4caf50;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  margin-top: 40px;
  padding: 12px 24px;
  color: #4caf50;
  text-decoration: none;
  border: 2px solid #4caf50;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #4caf50;
  color: white;
  transform: translateY(-2px);
}

.error-message {
  text-align: center;
  font-size: 1.4rem;
  color: #666;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .project-details {
    padding: 40px 0;
  }

  .project-header h1 {
    font-size: 2rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .project-info {
    padding: 20px;
  }
}
</style> -->

<!-- <template>
  <div class="project-details-page">
    
    <div class="container">
      <div class="navigation">
        <p class="document-icon">
          📄 Project Details: {{ project?.title || "Loading..." }}
        </p>
        <router-link to="/projects" class="back-link"
          >← Back to Projects</router-link
        >
      </div>

      <div v-if="loading" class="loading-state">Loading project details...</div>

      <div v-else-if="!project" class="error-state">
        Project not found.
        <router-link to="/projects">Return to projects</router-link>
      </div>

      <template v-else>
        <h1 class="project-title">{{ project.title }}</h1>

        <div class="project-meta">
          <div class="tag web-tag">
            {{ project.category || "Uncategorized" }}
          </div>
          <div class="completion-date">
            Completed: {{ project.completedDate || "Unknown" }}
          </div>
        </div>

        
        <div class="project-preview" v-if="project.previewImage">
          <img
            :src="project.previewImage"
            :alt="`${project.title} Preview`"
            class="preview-image"
          />
        </div>

       
        <div class="details-section">
          <div class="details-grid">
           
            <div class="details-column">
             
              <div class="info-card">
                <h3 class="info-title">Role</h3>
                <p class="info-content highlight">
                  {{ project.role || "Not specified" }}
                </p>
              </div>

              
              <div class="info-card">
                <h3 class="info-title">Team Size</h3>
                <p class="info-content highlight">
                  {{ project.teamSize || "Not specified" }}
                </p>
              </div>

              
              <div class="overview-section" v-if="project.overview">
                <h2 class="section-title">Project Overview</h2>
                <p class="overview-text">{{ project.overview }}</p>
              </div>

              <div
                class="challenges-section"
                v-if="project.challenges && project.challenges.length > 0"
              >
                <h2 class="section-title">Challenges & Solutions</h2>
                <div
                  v-for="(challenge, index) in project.challenges"
                  :key="index"
                  class="challenge-card"
                >
                  <h3 class="challenge-title highlight">
                    {{ challenge.title }}
                  </h3>
                  <p class="challenge-solution">{{ challenge.solution }}</p>
                </div>
              </div>
            </div>

           
            <div class="details-column sidebar">
              
              <div
                class="info-card"
                v-if="project.technologies && project.technologies.length > 0"
              >
                <h3 class="info-title">Technologies Used</h3>
                <ul class="tech-list">
                  <li
                    v-for="(tech, index) in project.technologies"
                    :key="index"
                  >
                    {{ tech }}
                  </li>
                </ul>
              </div>

           
              <div
                class="info-card"
                v-if="project.links && project.links.length > 0"
              >
                <h3 class="info-title">Project Links</h3>
                <div class="links-list">
                  <a
                    v-for="(link, index) in project.links"
                    :key="index"
                    :href="link.url"
                    class="project-link"
                  >
                    {{ link.text }} <span class="arrow-icon">→</span>
                  </a>
                </div>
              </div>

              
              <div
                class="info-card"
                v-if="project.achievements && project.achievements.length > 0"
              >
                <h3 class="info-title">Key Achievements</h3>
                <ul class="achievements-list">
                  <li
                    v-for="(achievement, index) in project.achievements"
                    :key="index"
                  >
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div
          class="gallery-section"
          v-if="project.gallery && project.gallery.length > 0"
        >
          <h2 class="section-title">Project Gallery</h2>
          <div class="gallery-grid">
            <img
              v-for="(image, index) in project.gallery"
              :key="index"
              :src="image.src"
              :alt="image.alt"
              class="gallery-image"
            />
          </div>
        </div>

        
        <div v-if="project.nextProject" class="next-project-card">
          <div class="next-project-info">
            <p class="next-label">Next Project</p>
            <p class="next-title highlight">{{ project.nextProject.title }}</p>
          </div>
          <router-link
            :to="`/projects/${project.nextProject.id}`"
            class="next-arrow"
            >→</router-link
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  data() {
    return {
      project: null,
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      this.loading = true;

      // Import the JSON file dynamically
      const response = await import("@/data.json");

      // Access the projects array from the imported data
      // Handle both possible formats: direct array or nested in projects property
      let projects = [];

      if (
        response.default.projects &&
        Array.isArray(response.default.projects)
      ) {
        projects = response.default.projects;
      } else if (Array.isArray(response.default)) {
        projects = response.default;
      } else {
        throw new Error("Invalid data format in data.json");
      }

      const projectId = this.$route.params.id;

      if (!projectId) {
        throw new Error("Project ID is missing from route params");
      }

      this.project = projects.find((p) => String(p.id) === String(projectId));

      if (!this.project) {
        console.warn(`Project with ID ${projectId} not found.`);
        // Don't redirect automatically, let the template handle it
      }
    } catch (error) {
      console.error("Error loading project data:", error);
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.project-details-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f5f5f5;
  padding-bottom: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.document-icon {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.back-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
}

.back-link:hover {
  color: #333;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffa500;
  margin: 10px 0;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.tag {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

.web-tag {
  background-color: #ffa500;
  color: #fff;
}

.completion-date {
  color: #666;
  font-size: 0.9rem;
}

.project-preview {
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 40px;
  text-align: center;
  padding: 40px;
}

.preview-image {
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.details-section {
  margin-bottom: 40px;
}

.details-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.info-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.info-title {
  color: #666;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 500;
}

.info-content {
  margin: 0;
  font-size: 1.1rem;
}

.highlight {
  color: #ffa500;
  font-weight: 600;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.overview-section {
  margin-bottom: 30px;
}

.overview-text {
  line-height: 1.6;
  color: #555;
}

.challenge-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.challenge-title {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.challenge-solution {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.tech-list,
.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list li,
.achievements-list li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  color: #555;
}

.tech-list li:last-child,
.achievements-list li:last-child {
  border-bottom: none;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-link {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #333;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.project-link:last-child {
  border-bottom: none;
}

.arrow-icon {
  color: #999;
}

.gallery-section {
  margin-bottom: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.02);
}

.next-project-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.next-label {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 5px 0;
}

.next-title {
  font-size: 1.2rem;
  margin: 0;
}

.next-arrow {
  font-size: 1.5rem;
  color: #ffa500;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .details-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .project-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .navigation {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .project-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style> -->

<template>
  <div class="project-details-page">
    <!-- Header with project title and navigation -->
    <div class="container">
      <div class="navigation">
        <p class="document-icon">
          📄 Project Details: {{ project?.title || "Loading..." }}
        </p>
        <router-link to="/projects" class="back-link"
          >← Back to Projects</router-link
        >
      </div>

      <div v-if="loading" class="loading-state">Loading project details...</div>

      <div v-else-if="!project" class="error-state">
        Project not found.
        <router-link to="/projects">Return to projects</router-link>
      </div>

      <template v-else>
        <h1 class="project-title">{{ project.title }}</h1>

        <!-- Added back to projects button below heading -->
        <div class="back-to-projects-container">
          <router-link to="/projects" class="back-to-projects-btn">
            Back to Projects
          </router-link>
        </div>

        <div class="project-meta">
          <div class="tag web-tag">
            {{ project.category || "Uncategorized" }}
          </div>
          <div class="completion-date">
            Completed: {{ project.completedDate || "Unknown" }}
          </div>
        </div>

        <!-- Welcome Card / Project Preview -->
        <div class="project-preview" v-if="project.previewImage">
          <img
            :src="project.previewImage"
            :alt="`${project.title} Preview`"
            class="preview-image"
          />
        </div>

        <!-- Project Details Section -->
        <div class="details-section">
          <div class="details-grid">
            <!-- Left Column -->
            <div class="details-column">
              <!-- Role Section -->
              <div class="info-card">
                <h3 class="info-title">Role</h3>
                <p class="info-content highlight">
                  {{ project.role || "Not specified" }}
                </p>
              </div>

              <!-- Team Size Section -->
              <div class="info-card">
                <h3 class="info-title">Team Size</h3>
                <p class="info-content highlight">
                  {{ project.teamSize || "Not specified" }}
                </p>
              </div>

              <!-- Project Overview -->
              <div class="overview-section" v-if="project.overview">
                <h2 class="section-title">Project Overview</h2>
                <p class="overview-text">{{ project.overview }}</p>
              </div>

              <!-- Challenges & Solutions -->
              <div
                class="challenges-section"
                v-if="project.challenges && project.challenges.length > 0"
              >
                <h2 class="section-title">Challenges & Solutions</h2>
                <div
                  v-for="(challenge, index) in project.challenges"
                  :key="index"
                  class="challenge-card"
                >
                  <h3 class="challenge-title highlight">
                    {{ challenge.title }}
                  </h3>
                  <p class="challenge-solution">{{ challenge.solution }}</p>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="details-column sidebar">
              <!-- Technologies Used -->
              <div
                class="info-card"
                v-if="project.technologies && project.technologies.length > 0"
              >
                <h3 class="info-title">Technologies Used</h3>
                <ul class="tech-list">
                  <li
                    v-for="(tech, index) in project.technologies"
                    :key="index"
                  >
                    {{ tech }}
                  </li>
                </ul>
              </div>

              <!-- Project Links -->
              <div
                class="info-card"
                v-if="project.links && project.links.length > 0"
              >
                <h3 class="info-title">Project Links</h3>
                <div class="links-list">
                  <a
                    v-for="(link, index) in project.links"
                    :key="index"
                    :href="link.url"
                    class="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ link.text }} <span class="arrow-icon">→</span>
                  </a>
                </div>
              </div>

              <!-- Key Achievements -->
              <div
                class="info-card"
                v-if="project.achievements && project.achievements.length > 0"
              >
                <h3 class="info-title">Key Achievements</h3>
                <ul class="achievements-list">
                  <li
                    v-for="(achievement, index) in project.achievements"
                    :key="index"
                  >
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Gallery - Only show for Booksville project -->
        <div
          class="gallery-section"
          v-if="isBooksville && project.gallery && project.gallery.length > 0"
        >
          <h2 class="section-title">Project Gallery</h2>
          <div class="gallery-grid">
            <div
              v-for="(image, index) in project.gallery"
              :key="index"
              class="gallery-item"
            >
              <img :src="image.src" :alt="image.alt" class="gallery-image" />
            </div>
          </div>
        </div>

        <!-- Next Project -->
        <div v-if="nextProject" class="next-project-card">
          <div class="next-project-info">
            <p class="next-label">Next Project</p>
            <p class="next-title highlight">{{ nextProject.title }}</p>
          </div>
          <router-link :to="`/projects/${nextProject.id}`" class="next-arrow"
            >→</router-link
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  data() {
    return {
      project: null,
      projects: [],
      loading: true,
      error: null,
    };
  },
  computed: {
    isBooksville() {
      return (
        this.project &&
        (this.project.title === "Booksville" ||
          this.project.title.toLowerCase().includes("booksville"))
      );
    },
    nextProject() {
      if (!this.project || !this.projects.length) return null;

      const currentIndex = this.projects.findIndex(
        (p) => String(p.id) === String(this.project.id)
      );

      if (currentIndex === -1 || currentIndex === this.projects.length - 1) {
        // If current project is the last one, go to the first project
        return this.projects[0];
      }

      return this.projects[currentIndex + 1];
    },
  },
  async created() {
    try {
      this.loading = true;

      // Import the JSON file dynamically
      const response = await import("@/data.json");

      // Access the projects array from the imported data
      // Handle both possible formats: direct array or nested in projects property
      if (
        response.default.projects &&
        Array.isArray(response.default.projects)
      ) {
        this.projects = response.default.projects;
      } else if (Array.isArray(response.default)) {
        this.projects = response.default;
      } else {
        throw new Error("Invalid data format in data.json");
      }

      const projectId = this.$route.params.id;

      if (!projectId) {
        throw new Error("Project ID is missing from route params");
      }

      this.project = this.projects.find(
        (p) => String(p.id) === String(projectId)
      );

      if (!this.project) {
        console.warn(`Project with ID ${projectId} not found.`);
      }
    } catch (error) {
      console.error("Error loading project data:", error);
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  },
  watch: {
    // Watch for route changes to update the project
    "$route.params.id": {
      handler(newId) {
        if (newId && this.projects.length) {
          this.project = this.projects.find(
            (p) => String(p.id) === String(newId)
          );
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.project-details-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f8f8f8;
  padding-bottom: 60px;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
}

.document-icon {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.back-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #4caf50;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4caf50; /* Changed from #ffa500 to #4caf50 as requested */
  margin: 20px 0 10px 0;
  text-align: center;
}

.back-to-projects-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.back-to-projects-btn {
  display: inline-block;
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.back-to-projects-btn:hover {
  background-color: #45a049;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.tag {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

.web-tag {
  background-color: #4caf50; /* Changed from #ffa500 to match heading */
  color: #fff;
}

.completion-date {
  color: #666;
  font-size: 0.9rem;
}

.project-preview {
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 40px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.preview-image {
  width: 100%;
  height: auto;
  display: block;
}

.details-section {
  margin-bottom: 40px;
}

.details-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.info-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.info-title {
  color: #666;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 500;
}

.info-content {
  margin: 0;
  font-size: 1.1rem;
}

.highlight {
  color: #4caf50; /* Changed from #ffa500 to match heading */
  font-weight: 600;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

.section-title:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #4caf50;
}

.overview-section {
  margin-bottom: 30px;
}

.overview-text {
  line-height: 1.6;
  color: #555;
}

.challenge-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.challenge-card:hover {
  transform: translateY(-3px);
}

.challenge-title {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.challenge-solution {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.tech-list,
.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list li,
.achievements-list li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  color: #555;
  transition: background-color 0.2s ease;
}

.tech-list li:hover,
.achievements-list li:hover {
  background-color: #f9f9f9;
  padding-left: 5px;
}

.tech-list li:last-child,
.achievements-list li:last-child {
  border-bottom: none;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-link {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #333;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  transition: all 0.2s ease;
}

.project-link:hover {
  color: #4caf50;
  padding-left: 5px;
}

.project-link:last-child {
  border-bottom: none;
}

.arrow-icon {
  color: #4caf50;
}

.gallery-section {
  margin: 40px 0;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.gallery-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.next-project-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  margin-top: 40px;
}

.next-project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.next-label {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 5px 0;
}

.next-title {
  font-size: 1.2rem;
  margin: 0;
}

.next-arrow {
  font-size: 1.5rem;
  color: #4caf50;
  transition: transform 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
}

.next-arrow:hover {
  transform: translateX(5px);
  background-color: #e9e9e9;
}

/* Responsive Styles */
@media (max-width: 900px) {
  .details-grid {
    grid-template-columns: 1fr;
  }

  .project-title {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .navigation {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .project-meta {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .project-title {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .next-project-card {
    padding: 15px;
  }
}

@media (max-width: 400px) {
  .container {
    padding: 0 15px;
  }

  .project-preview {
    margin-left: -15px;
    margin-right: -15px;
    width: calc(100% + 30px);
    border-radius: 0;
  }
}
</style>
