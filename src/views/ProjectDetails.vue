<template>
  <main class="project-page">
    <section class="container section-frame" v-if="project">
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
    </section>

    <section class="container section-frame" v-if="project && project.overview">
      <h2>Project Overview</h2>
      <p>{{ project.overview }}</p>
    </section>

    <section
      class="container section-frame"
      v-if="project && project.challenges && project.challenges.length > 0"
    >
      <h2>Challenges and Solutions</h2>
      <div class="list-block" v-for="(challenge, index) in project.challenges" :key="index">
        <h3>{{ challenge.title }}</h3>
        <p>{{ challenge.solution }}</p>
      </div>
    </section>

    <section
      class="container section-frame"
      v-if="project && project.technologies && project.technologies.length > 0"
    >
      <h2>Tech I used</h2>
      <p class="inline-list">{{ project.technologies.join(", ") }}</p>
    </section>

    <section
      class="container section-frame"
      v-if="project && project.links && project.links.length > 0"
    >
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
  padding: 1rem 0 2rem;
}

.section-frame {
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 1.6rem;
  margin-bottom: 1rem;
}

.back-link {
  display: inline-flex;
  margin-bottom: 0.7rem;
  color: var(--color-brand-700);
  text-transform: lowercase;
  font-size: 0.9rem;
}

h1 {
  font-size: clamp(1.85rem, 4.5vw, 2.9rem);
  margin-bottom: 0.25rem;
}

.subtitle {
  color: var(--color-accent-600);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
}

.intro {
  margin-bottom: 1rem;
}

.hero-image {
  width: 100%;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  margin-bottom: 0.8rem;
}

.gallery-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.65rem;
  margin-bottom: 1rem;
}

.gallery-thumb {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
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
  margin-bottom: 0.2rem;
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.list-block {
  border-top: 1px solid var(--color-border);
  padding-top: 0.7rem;
  margin-top: 0.7rem;
}

.list-block h3 {
  font-size: 1.05rem;
  margin-bottom: 0.3rem;
}

.inline-list {
  color: var(--color-text-700);
}

.link-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.link-list a {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-surface-soft);
  color: var(--color-brand-700);
  font-size: 0.86rem;
  padding: 0.45rem 0.65rem;
}

@media (max-width: 720px) {
  .section-frame {
    padding: 1.1rem;
  }
}
</style>
