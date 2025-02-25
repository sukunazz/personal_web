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

     
        <div class="project-header">
          <h1 class="project-title">{{ project.title }}</h1>

          <div class="project-meta">
            <div class="tag web-tag">
              {{ project.category || "Web" }}
            </div>
            <div class="completion-date">
              Completed: {{ project.completedDate || "November 2024" }}
            </div>
           
          </div>
        
        </div>
        
        
        <div class="project-preview">
          <img
            :src="project.previewImage || '/placeholder-project.jpg'"
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
                  {{ project.role || "Frontend Developer" }}
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
              
              <div class="info-card">
                <h3 class="info-title">Team Size</h3>
                <p class="info-content highlight">
                  {{ project.teamSize || "2 members" }}
                </p>
              </div>
              
             
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
                    target="_blank"
                    rel="noopener noreferrer"
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

        
        <div v-if="nextProject" class="next-project-card">
          <div class="next-project-info">
            <p class="next-label">Next Project</p>
            <p class="next-title highlight">{{ nextProject.title }}</p>
          </div>
          <router-link :to="`/projects/${nextProject.id}`" class="next-arrow"
            >→</router-link
          >
        </div>
     
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
  margin: 80px auto 0 ;
  padding: 0 20px;
}

.navigation {
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
}

.document-icon {
  color: #666;
  font-size: 0.9rem;
  margin: 2rem 0 2rem 0;
}

.back-link {
  color: #666;
  text-decoration: none;
  /* margin-bottom:2rem; */
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

.project-header {
  /* text-align: center; */
  margin: 30px 0;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4caf50; 
  margin: 20px 0 10px 0;
  /* text-align: center; */
}

.project-meta {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 15px;
  margin: 15px 0 30px 0;
}

.tag {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

.web-tag {
  background-color: #4caf50; /* Changed to match the image */
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
  height: 400px; /* Set fixed height to match image */
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the area nicely */
  display: block;
}

.details-section {
  margin: 40px 0;
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
  color: #4caf50; /* Changed to match the image */
  font-weight: 600;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

/* .section-title:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color:#4caf50; 
} */

.overview-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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
  color: #4caf50; /* Changed to match the image */
  padding-left: 5px;
}

.project-link:last-child {
  border-bottom: none;
}

.arrow-icon {
  color: #4caf50; /* Changed to match the image */
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
  color: #4caf50; /* Changed to match the image */
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  transition: transform 0.2s ease, background-color 0.2s ease;
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
  
  .project-preview {
    height: 300px;
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
  
  .project-preview {
    height: 200px;
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
</style> -->

<template>
  <div class="project-details-page">
    <div class="container">
      <!-- Header with project navigation -->
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

      <div v-else>
        <!-- Project Title and Meta -->
        <div class="project-header">
          <h1 class="project-title">{{ project.title }}</h1>

          <div class="project-meta">
            <div class="tag web-tag">
              {{ project.category || "Web" }}
            </div>
            <div class="completion-date">
              Completed: {{ project.completedDate || "November 2024" }}
            </div>
          </div>
        </div>
        
        <!-- Project Preview Image -->
        <div class="project-preview">
          <img
            :src="project.previewImage || '/placeholder-project.jpg'"
            :alt="`${project.title} Preview`"
            class="preview-image"
          />
        </div>

        <!-- Details Section Grid -->
        <div class="details-section">
          <div class="details-grid">
            <!-- Left Column - Project Information -->
            <div class="details-column">
              <!-- Role Section -->
              <div class="info-card">
                <h3 class="info-title">Role</h3>
                <p class="info-content highlight">
                  {{ project.role || "Frontend Developer" }}
                </p>
              </div>

              <!-- Overview Section -->
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

            <!-- Right Column - Project Details -->
            <div class="details-column sidebar">
              <!-- Team Size Section -->
              <div class="info-card">
                <h3 class="info-title">Team Size</h3>
                <p class="info-content highlight">
                  {{ project.teamSize || "2 members" }}
                </p>
              </div>
              
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

        <!-- Project Gallery Section -->
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

        <!-- Next Project Navigation -->
        <div v-if="nextProject" class="next-project-card">
          <div class="next-project-info">
            <p class="next-label">Next Project</p>
            <p class="next-title highlight">{{ nextProject.title }}</p>
          </div>
          <router-link :to="`/projects/${nextProject.id}`" class="next-arrow"
            >→</router-link
          >
        </div>
      </div>
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
  background-color: #fff;
  padding-bottom: 60px;
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 80px auto;
  padding: 0 30px;
}

.navigation {
  padding-top: 10px ;
  border-bottom: 1px solid #eaeaea;
  /* margin-bottom: 40px; */
}

.document-icon {
  color: #666;
  font-weight:bold;
  font-size: 0.9rem;
  margin: 0 0 15px 0;
}

.back-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  display: inline-block;
  margin-bottom: 20px;
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
  margin-top: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.project-header {
  /* margin: 40px 0; */
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  color:  #4caf50;
  /* margin: 0 0 20px 0; */
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 0 25px 0;
}

.tag {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.web-tag {
  background-color:  #4caf50;
  color: #333;
}

.completion-date {
  color: #666;
  font-size: 0.9rem;
}

.project-preview {
  background-color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 50px;
  width: 100%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  height: 450px;
  position: relative;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.details-section {
  margin: 50px 0;
}

.details-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.info-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.info-title {
  color: #555;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 500;
}

.info-content {
  margin: 0;
  font-size: 1.2rem;
}

.highlight {
  color:  #4caf50;
  font-weight: 600;
}

.section-title {
  font-size: 1.6rem;
  margin-bottom: 25px;
  color: #333;
  position: relative;
  padding-bottom: 12px;
}

.overview-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.overview-text {
  line-height: 1.7;
  color: #555;
  font-size: 1.05rem;
}

.challenge-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.challenge-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.challenge-title {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.challenge-solution {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

.tech-list,
.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list li,
.achievements-list li {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  color: #555;
  transition: all 0.2s ease;
}

.tech-list li:hover,
.achievements-list li:hover {
  background-color: #f9f9f9;
  padding-left: 8px;
}

.tech-list li:last-child,
.achievements-list li:last-child {
  border-bottom: none;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-link {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #333;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  transition: all 0.2s ease;
}

.project-link:hover {
  color:  #4caf50;
  padding-left: 8px;
}

.project-link:last-child {
  border-bottom: none;
}

.arrow-icon {
  color: #4caf50;
}

.gallery-section {
  margin: 50px 0;
  background-color: #fff;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.gallery-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.next-project-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 25px 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 50px;
}

.next-project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.next-label {
  color: #666;
  font-size: 0.95rem;
  margin: 0 0 8px 0;
}

.next-title {
  font-size: 1.3rem;
  margin: 0;
}

.next-arrow {
  font-size: 1.6rem;
  color:  #4caf50;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5f5f5;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.next-arrow:hover {
  transform: translateX(8px);
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
  
  .project-preview {
    height: 350px;
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
    align-items: flex-start;
  }

  .project-title {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .next-project-card {
    padding: 20px;
  }
  
  .project-preview {
    height: 250px;
  }
}

@media (max-width: 400px) {
  .container {
    padding: 0 20px;
  }

  .project-preview {
    margin-left: -20px;
    margin-right: -20px;
    width: calc(100% + 40px);
    border-radius: 0;
  }
}
</style>