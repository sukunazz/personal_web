<template>
  <main class="project-page">
    <section class="container details-card" v-if="project">
      <router-link to="/projects" class="back-link">back to projects</router-link>
      <h1>{{ project.title }}</h1>
      <p class="subtitle">{{ project.category }}</p>
      <p class="intro">{{ project.description }}</p>

      <img
        v-if="activeGalleryImage"
        :src="activeGalleryImage.src"
        :alt="activeGalleryImage.alt || project.title"
        class="hero-image"
      />

      <div class="gallery-strip" v-if="galleryImages.length > 1">
        <button
          v-for="(image, index) in galleryImages"
          :key="`${image.src}-${index}`"
          type="button"
          class="gallery-thumb"
          :class="{ active: index === activeGalleryIndex }"
          :aria-label="`Show screenshot ${index + 1}`"
          @click="selectGallery(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt || `${project.title} screenshot ${index + 1}`"
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>

      <div class="meta-lines">
        <p><strong>Role:</strong> {{ project.role || "Frontend Developer" }}</p>
        <p><strong>Team:</strong> {{ project.teamSize || "Small Team" }}</p>
        <p><strong>Completed:</strong> {{ project.completedDate || "Recent" }}</p>
      </div>

      <section class="content-block" v-if="project.overview">
        <h2>Project Overview</h2>
        <p>{{ project.overview }}</p>
      </section>

      <section class="content-block" v-if="project.challenges && project.challenges.length > 0">
        <h2>Challenges and Solutions</h2>
        <div class="list-block" v-for="(challenge, index) in project.challenges" :key="index">
          <h3>{{ challenge.title }}</h3>
          <p>{{ challenge.solution }}</p>
        </div>
      </section>

      <section class="content-block" v-if="project.technologies && project.technologies.length > 0">
        <h2>Tech I used</h2>
        <p class="inline-list">{{ project.technologies.join(", ") }}</p>
      </section>

      <section class="content-block" v-if="project.links && project.links.length > 0">
        <h2>Project links</h2>
        <div class="link-list">
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
      </section>
    </section>
  </main>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "ProjectDetails",
  data() {
    return {
      activeGalleryIndex: 0,
    };
  },
  computed: {
    project() {
      const id = this.$route.params.id;
      return projectsData.projects.find((item) => String(item.id) === String(id));
    },
    galleryImages() {
      if (!this.project) {
        return [];
      }

      const gallery = Array.isArray(this.project.gallery)
        ? this.project.gallery.filter((item) => item && item.src)
        : [];

      const preview = this.project.previewImage || this.project.image;
      if (!preview) {
        return gallery;
      }

      if (!gallery.some((item) => item.src === preview)) {
        return [{ src: preview, alt: `${this.project.title} preview` }, ...gallery];
      }

      return gallery;
    },
    activeGalleryImage() {
      return this.galleryImages[this.activeGalleryIndex] || null;
    },
  },
  watch: {
    "$route.params.id"() {
      this.activeGalleryIndex = 0;
    },
    galleryImages(newImages) {
      if (!newImages.length) {
        this.activeGalleryIndex = 0;
        return;
      }
      if (this.activeGalleryIndex >= newImages.length) {
        this.activeGalleryIndex = 0;
      }
    },
  },
  methods: {
    selectGallery(index) {
      this.activeGalleryIndex = index;
    },
  },
};
</script>

<style scoped>
.project-page {
  padding-bottom: 20px;
}

.details-card {
  background: #ffffff;
  border-radius: 0 0 14px 14px;
  margin-top: -2px;
  padding: 40px 44px 46px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.05);
  min-height: calc(100vh - 86px);
}

.back-link {
  display: inline-flex;
  margin-bottom: 10px;
  color: #4f545c;
  text-transform: lowercase;
  font-size: 15px;
}

h1 {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  line-height: 1;
  color: #4b4f56;
  margin-bottom: 8px;
}

.subtitle {
  font-size: clamp(1.5rem, 3vw, 2.3rem);
  line-height: 1;
  color: #4b4f56;
  margin-bottom: 20px;
}

.intro {
  font-size: 16px;
  line-height: 1.8;
  color: #595d63;
  margin-bottom: 18px;
}

.hero-image {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ddd4c9;
  margin-bottom: 12px;
}

.gallery-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 16px;
}

.gallery-thumb {
  border: 1px solid #ddd4c9;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: #fff;
  padding: 0;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.gallery-thumb img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.gallery-thumb:hover {
  transform: translateY(-2px);
}

.gallery-thumb.active {
  border-color: #e5524c;
  box-shadow: 0 0 0 2px rgba(229, 82, 76, 0.2);
}

.meta-lines p {
  font-size: 16px;
  line-height: 1.75;
  color: #595d63;
  margin-bottom: 4px;
}

.content-block {
  margin-top: 26px;
  padding-top: 24px;
  border-top: 1px solid #e4ddcf;
}

h2 {
  font-size: 32px;
  color: #43464b;
  margin-bottom: 10px;
}

.list-block {
  border-top: 1px solid #ece6da;
  padding-top: 12px;
  margin-top: 12px;
}

.list-block h3 {
  font-size: 20px;
  color: #43464b;
  margin-bottom: 6px;
}

.list-block p {
  font-size: 16px;
  color: #595d63;
  line-height: 1.8;
}

.inline-list {
  color: #595d63;
  font-size: 16px;
  line-height: 1.8;
}

.link-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.link-list a {
  border: 0;
  border-bottom: 1px solid transparent;
  background: transparent;
  color: #4b4f56;
  font-size: 15px;
  font-weight: 600;
  padding: 0 0 2px;
}

.link-list a:hover {
  color: #e5524c;
  border-bottom-color: #e5524c;
}

@media (max-width: 980px) {
  .gallery-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .details-card {
    padding: 35px 25px 40px;
    min-height: calc(100vh - 92px);
  }

  h1 {
    font-size: 42px;
  }

  .subtitle {
    font-size: 30px;
  }

  h2 {
    font-size: 26px;
  }
}

@media (max-width: 520px) {
  .gallery-strip {
    grid-template-columns: 1fr;
  }
}
</style>
