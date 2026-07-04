<template>
  <main class="home-page">
    <section id="home" class="container hero-card">
      <div class="hero-layout">
        <aside class="hero-socials" aria-label="social links">
          <a
            href="https://www.linkedin.com/in/sujansigdel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/sukunazz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>

          <a
            href="https://x.com/sigdelsujan03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </aside>

        <section class="hero-content">
          <div class="speech-bubble">It's me</div>

          <h1 class="hero-title">
            Sujan <br />
            Sigdel
          </h1>

          <h4 class="hero-role">SOFTWARE ENGINEER</h4>

          <p class="hero-description">
            AKA <strong>Sukunazz</strong>. Software Developer from Pokhara,
            Nepal with experience building modern web applications, scalable
            backend systems, AI applications, and practical software solutions.
          </p>

          <button
            type="button"
            class="talk-button"
            @click="scrollToSection('contact')"
          >
            let's<br />
            talk
          </button>
        </section>

        <section class="hero-image">
          <div
            class="hero-avatar minion-sequence"
            role="img"
            aria-label="Waving minion character"
          >
            <img
              class="minion-frame"
              src="/images/minion-wave.webp"
              alt=""
              aria-hidden="true"
            />
          </div>
        </section>
      </div>
    </section>

    <section id="what-i-do" class="container section-card skills-reference">
      <h2 class="skills-title">My Top Skills</h2>
      <p class="skills-subtitle">What I Do</p>
      <span class="section-rule" aria-hidden="true"></span>

      <div class="skills-panel">
        <div class="skills-copy">
          <article class="skill-block">
            <h3>BACKEND</h3>
            <p>
              I build scalable and maintainable backend applications using
              cutting-edge technologies like Nest.js, Docker, Redis,
              PostgreSQL, and MongoDB.
            </p>
          </article>

          <article class="skill-block">
            <h3>FRONTEND</h3>
            <p>
              I build client-side applications with modern SPA patterns,
              semantic structure, and maintainable architecture using Vue.js,
              React, TailwindCSS, and Pinia.
            </p>
          </article>

          <button
            type="button"
            class="works-link"
            @click="scrollToSection('projects')"
          >
            SEE MY PROJECTS
          </button>
        </div>

        <div class="skills-illustration" aria-hidden="true">
          <img
            class="what-i-do-image"
            src="/images/p1.png"
            alt="Developer working illustration"
          />
        </div>
      </div>
    </section>

    <section id="readme" class="container section-card">
      <h2 class="section-title">README</h2>
      <p class="readme-text">
        I enjoy building software that solves real problems. Whether it is AI
        engineering, backend APIs, authentication systems, frontend
        applications, or full-stack products, I focus on writing clean,
        maintainable, and scalable code.
      </p>
      <p class="readme-text">
        Outside programming, I enjoy learning new technologies, reading
        documentation, playing chess, and constantly improving my software
        engineering skills.
      </p>
    </section>

    <section id="projects" class="container section-card projects-section">
      <h2 class="skills-title">My Works</h2>
      <p class="skills-subtitle">Project Highlights</p>
      <span class="section-rule" aria-hidden="true"></span>

      <div class="projects-panel">
        <router-link
          v-for="project in showcaseProjects"
          :key="project.id"
          class="project-card"
          :to="{ name: 'ProjectDetails', params: { id: project.id } }"
        >
          <div class="project-thumb">
            <img :src="project.image" :alt="project.title" />
          </div>

          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <div class="project-meta">
              <span>{{ project.category }}</span>
              <strong>Open</strong>
            </div>
            <p>{{ project.description }}</p>
          </div>
        </router-link>
      </div>
    </section>

    <section id="contact" class="container section-card contact-section">
      <h2 class="skills-title">Contact</h2>
      <p class="skills-subtitle">Let's Build Something</p>
      <span class="section-rule" aria-hidden="true"></span>

      <div class="contact-panel">
        <div class="contact-info">
          <div class="contact-item">
            <h3>Email</h3>
            <a href="mailto:sujansigdel03@gmail.com">sujansigdel03@gmail.com</a>
          </div>
          <div class="contact-item">
            <h3>Location</h3>
            <p>Pokhara, Nepal</p>
          </div>
          <div class="contact-item">
            <h3>Profiles</h3>
            <div class="contact-links">
              <a
                href="https://www.linkedin.com/in/sujansigdel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sukunazz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com/sigdelsujan03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitContactForm">
          <h3>Send Message</h3>
          <label for="contact-name">Name</label>
          <input id="contact-name" v-model="form.name" type="text" required />

          <label for="contact-email">Email</label>
          <input id="contact-email" v-model="form.email" type="email" required />

          <label for="contact-message">Message</label>
          <textarea
            id="contact-message"
            v-model="form.message"
            rows="6"
            required
          ></textarea>

          <button type="submit" :disabled="sending">
            {{ sending ? "Sending..." : "Send Message" }}
          </button>

          <p v-if="successMessage" class="form-feedback success">
            {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="form-feedback error">
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import projectsData from "@/data.json";

export default {
  name: "HomePage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      sending: false,
      successMessage: "",
      errorMessage: "",
    };
  },
  computed: {
    showcaseProjects() {
      return projectsData.projects;
    },
  },
  mounted() {
    if (window.location.hash) {
      const cleanPath = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", cleanPath);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (!section) return;

      section.scrollIntoView({ behavior: "smooth", block: "start" });

      if (window.location.hash) {
        const cleanPath = window.location.pathname + window.location.search;
        window.history.replaceState(null, "", cleanPath);
      }
    },
    async submitContactForm() {
      this.successMessage = "";
      this.errorMessage = "";
      this.sending = true;

      try {
        const response = await axios.post("/api/discord", {
          message:
            `New contact form submission\n\n` +
            `Name: ${this.form.name}\n` +
            `Email: ${this.form.email}\n` +
            `Message:\n${this.form.message}`,
        });

        if (response.status === 200) {
          this.successMessage = "Message sent successfully.";
          this.form = { name: "", email: "", message: "" };
        } else {
          this.errorMessage = "Failed to send message.";
        }
      } catch (error) {
        this.errorMessage = "Failed to send message.";
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>

<style scoped>
.home-page {
  padding-bottom: 70px;
}

.hero-card {
  background: #ffffff;
  border-radius: 0 0 14px 14px;
  margin-top: -2px;
  padding: 44px 60px 50px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.05);
}

.hero-layout {
  display: grid;
  grid-template-columns: 70px 430px 1fr;
  align-items: center;
  column-gap: 40px;
  min-height: 680px;
}

.hero-socials {
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-self: center;
}

.hero-socials a {
  font-size: 34px;
  color: #555;
  transition: 0.25s;
}

.hero-socials a:hover {
  color: #ef6b61;
  transform: translateX(5px);
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.speech-bubble {
  position: relative;
  display: inline-block;
  width: max-content;
  background: #2d2d2d;
  color: #ffffff;
  padding: 10px 18px;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 28px;
}

.speech-bubble::after {
  content: "";
  position: absolute;
  left: 20px;
  bottom: -8px;
  border-top: 8px solid #2d2d2d;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.hero-title {
  font-size: 72px;
  line-height: 0.95;
  font-weight: 800;
  color: #444;
  margin: 0 0 22px;
}

.hero-role {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #444;
  margin-bottom: 28px;
}

.hero-description {
  width: 330px;
  font-size: 15px;
  line-height: 1.9;
  color: #666;
  margin-bottom: 40px;
}

.talk-button {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: none;
  background: #ef7b71;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.05;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(239, 123, 113, 0.35);
  transition: 0.3s;
}

.talk-button:hover {
  transform: translateY(-6px);
  background: #eb6a5e;
  box-shadow: 0 18px 35px rgba(239, 123, 113, 0.45);
}

.hero-image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}

.hero-avatar {
  width: 430px;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
}

.minion-sequence {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: visible;
  padding: 12px 0 18px;
  user-select: none;
  background: transparent;
  box-shadow: none;
  transform: translateX(-38px);
}

.minion-frame {
  position: relative;
  width: min(300px, 80%);
  height: auto;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
  margin-left: 16%;
  filter: drop-shadow(0 10px 12px rgba(21, 26, 34, 0.22));
  animation: minion-entrance 0.9s ease-out both;
}

@keyframes minion-entrance {
  from {
    opacity: 0;
    transform: translateX(36px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.section-card {
  margin-top: 30px;
  background: #ffffff;
  border-radius: 14px;
  padding: 50px 60px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 34px;
  font-weight: 700;
  color: #3f3f3f;
  margin-bottom: 10px;
}

.section-subtitle {
  color: #666;
  font-size: 16px;
  margin-bottom: 28px;
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
  margin-bottom: 32px;
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

.skills-panel {
  background: #f1efef;
  border-radius: 12px;
  padding: 38px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 28px;
  align-items: center;
}

.skills-copy {
  display: grid;
  gap: 26px;
}

.skill-block h3 {
  font-size: 34px;
  font-weight: 700;
  color: #50545a;
  margin-bottom: 14px;
}

.skill-block p {
  color: #60656e;
  font-size: 16px;
  line-height: 1.8;
}

.works-link {
  margin-top: 6px;
  width: 206px;
  height: 206px;
  border-radius: 50%;
  border: none;
  background: #efb8b3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #1f2023;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 700;
  cursor: pointer;
}

.skills-illustration {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.skills-illustration img {
  width: min(100%, 470px);
  border-radius: 16px;
  object-fit: contain;
}

.what-i-do-image {
  filter: saturate(0.92) contrast(1.03);
  transform: translateY(0);
  opacity: 0.96;
}

.readme-text {
  font-size: 16px;
  line-height: 1.9;
  color: #666;
  max-width: 900px;
  margin-bottom: 18px;
}

.projects-panel {
  background: #f1efef;
  border-radius: 12px;
  padding: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
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

.project-content h3 {
  font-size: 22px;
  margin-bottom: 6px;
}

.project-content {
  padding: 14px;
}

.project-content p {
  font-size: 14px;
  line-height: 1.65;
  color: #626262;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-meta {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.project-meta span {
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #666;
}

.project-meta strong {
  font-size: 12px;
  color: #e5524c;
  font-weight: 700;
}

.contact-panel {
  background: #f1efef;
  border-radius: 12px;
  padding: 32px;
  display: grid;
  grid-template-columns: minmax(300px, 0.9fr) minmax(360px, 1.1fr);
  gap: 18px;
}

.contact-info {
  display: grid;
  gap: 16px;
}

.contact-item {
  background: #f8f7f7;
  border: 1px solid #e7e4e4;
  border-radius: 10px;
  padding: 20px;
}

.contact-item h3 {
  font-size: 17px;
  margin-bottom: 10px;
}

.contact-item a,
.contact-item p {
  font-size: 15px;
  color: #606060;
  text-decoration: none;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.contact-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #e2dddd;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #4e4e4e;
}

.contact-links i {
  font-size: 16px;
  color: #e5524c;
}

.contact-form {
  background: #f8f7f7;
  border: 1px solid #e7e4e4;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  gap: 10px;
  align-content: start;
}

.contact-form h3 {
  font-size: 20px;
  margin-bottom: 2px;
}

.contact-form label {
  font-size: 13px;
  color: #666;
  font-weight: 600;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid #ddd;
  background: #ffffff;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 15px;
  color: #333;
}

.contact-form textarea {
  resize: vertical;
  min-height: 140px;
}

.contact-form button {
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background: #e5524c;
  cursor: pointer;
  transition: 0.2s;
}

.contact-form button:hover {
  background: #d44843;
}

.contact-form button:disabled {
  background: #c9a4a2;
  cursor: not-allowed;
}

.form-feedback {
  font-size: 14px;
  margin-top: 4px;
}

.form-feedback.success {
  color: #1c8f59;
}

.form-feedback.error {
  color: #bf3f3f;
}

@media (max-width: 1550px) {
  .skills-title {
    font-size: 52px;
  }

  .skills-subtitle {
    font-size: 34px;
  }

  .skill-block h3 {
    font-size: 30px;
  }

  .skill-block p {
    font-size: 16px;
  }

  .works-link {
    width: 178px;
    height: 178px;
    font-size: 29px;
  }
}

@media (max-width: 1200px) {
  .hero-layout {
    grid-template-columns: 60px 1fr 420px;
    gap: 30px;
  }

  .hero-title {
    font-size: 60px;
  }

  .hero-avatar {
    width: 360px;
  }

  .minion-sequence {
    transform: translateX(-20px);
  }

  .skills-panel {
    grid-template-columns: 1fr;
  }

  .skills-illustration img {
    width: min(100%, 390px);
  }

  .projects-panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 992px) {
  .hero-layout {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: 0;
  }

  .hero-content {
    align-items: center;
  }

  .hero-description {
    width: 100%;
    max-width: 550px;
  }

  .hero-socials {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  }

  .hero-image {
    justify-content: center;
    margin-top: 20px;
  }

  .minion-sequence {
    transform: translateX(0);
  }

  .hero-avatar {
    width: 330px;
  }

  .contact-panel {
    grid-template-columns: 1fr;
  }

  .skill-block p {
    font-size: 16px;
  }

  .skills-illustration img {
    width: min(100%, 330px);
  }
}

@media (max-width: 768px) {
  .hero-card,
  .section-card {
    padding: 35px 25px;
  }

  .hero-title {
    font-size: 52px;
  }

  .section-title {
    font-size: 28px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-socials a {
    font-size: 30px;
  }

  .talk-button {
    width: 82px;
    height: 82px;
    font-size: 19px;
  }

  .skills-title {
    font-size: 42px;
  }

  .skills-subtitle {
    font-size: 30px;
  }

  .skill-block h3 {
    font-size: 25px;
  }

  .skill-block p {
    font-size: 15px;
    line-height: 1.75;
  }

  .works-link {
    width: 148px;
    height: 148px;
    font-size: 24px;
  }

  .skills-illustration img {
    width: min(100%, 300px);
  }

  .projects-panel,
  .contact-panel {
    padding: 20px;
  }

  .projects-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .hero-title {
    font-size: 42px;
  }

  .hero-role {
    font-size: 14px;
  }

  .hero-avatar {
    width: 260px;
  }

  .minion-frame {
    width: min(235px, 84%);
    margin-left: 10%;
  }

  .section-title {
    font-size: 24px;
  }

  .hero-socials a {
    font-size: 28px;
  }

  .skills-title {
    font-size: 34px;
  }

  .skills-subtitle {
    font-size: 24px;
  }

  .skill-block h3 {
    font-size: 22px;
  }

  .skill-block p {
    font-size: 15px;
  }

  .works-link {
    width: 126px;
    height: 126px;
    font-size: 21px;
  }
}
</style>
