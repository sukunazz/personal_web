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

          <router-link :to="{ path: '/', hash: '#contact' }" class="talk-button">
            let's<br />
            talk
          </router-link>
        </section>

        <section class="hero-image">
          <img src="/images/sujan.png" alt="Sujan Sigdel" />
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

          <router-link
            :to="{ path: '/', hash: '#projects' }"
            class="works-link"
          >
            SEE MY PROJECTS
          </router-link>
        </div>

        <div class="skills-illustration" aria-hidden="true">
          <img src="/images/p1.png" alt="Developer working illustration" />
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
      <p class="skills-subtitle">Featured Projects</p>
      <span class="section-rule" aria-hidden="true"></span>

      <div class="projects-panel">
        <article
          v-for="project in featuredProjects"
          :key="project.id"
          class="project-item"
        >
          <img :src="project.image" :alt="project.title" />

          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <div class="project-meta">
              <span>{{ project.category }}</span>
              <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }">
                View Details
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="container section-card contact-section">
      <h2 class="skills-title">Contact</h2>
      <p class="skills-subtitle">Let's Build Something</p>
      <span class="section-rule" aria-hidden="true"></span>

      <div class="contact-panel">
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
            <a href="https://www.linkedin.com/in/sujansigdel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/sukunazz" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/sigdelsujan03" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "HomePage",
  computed: {
    featuredProjects() {
      return projectsData.projects.slice(0, 3);
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
  border-radius: 14px;
  padding: 50px 60px;
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
  background: #ef7b71;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.05;
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

.hero-image img {
  width: 540px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  user-select: none;
  transition: 0.4s;
}

.hero-image img:hover {
  transform: translateY(-8px) scale(1.02);
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
  font-size: 26px;
  line-height: 1.52;
}

.works-link {
  margin-top: 6px;
  width: 206px;
  height: 206px;
  border-radius: 50%;
  background: #efb8b3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #1f2023;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 700;
  text-decoration: none;
}

.skills-illustration {
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills-illustration img {
  width: min(100%, 560px);
  border-radius: 18px;
  object-fit: cover;
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
  padding: 32px;
  display: grid;
  gap: 16px;
}

.project-item {
  background: #f8f7f7;
  border: 1px solid #e7e4e4;
  border-radius: 10px;
  padding: 14px;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;
}

.project-item img {
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 16/10;
  object-fit: cover;
}

.project-content h3 {
  font-size: 24px;
  margin-bottom: 8px;
}

.project-content p {
  font-size: 16px;
  line-height: 1.7;
  color: #626262;
}

.project-meta {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.project-meta span {
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #666;
}

.project-meta a {
  font-size: 13px;
  color: #e5524c;
  font-weight: 700;
  text-decoration: none;
}

.contact-panel {
  background: #f1efef;
  border-radius: 12px;
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
    font-size: 22px;
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

  .hero-image img {
    width: 430px;
  }

  .skills-panel {
    grid-template-columns: 1fr;
  }

  .project-item {
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

  .hero-image img {
    width: 380px;
  }

  .contact-panel {
    grid-template-columns: 1fr;
  }

  .skill-block p {
    font-size: 20px;
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
    font-size: 17px;
    line-height: 1.58;
  }

  .works-link {
    width: 148px;
    height: 148px;
    font-size: 24px;
  }

  .projects-panel,
  .contact-panel {
    padding: 20px;
  }
}

@media (max-width: 500px) {
  .hero-title {
    font-size: 42px;
  }

  .hero-role {
    font-size: 14px;
  }

  .hero-image img {
    width: 300px;
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
    font-size: 16px;
  }

  .works-link {
    width: 126px;
    height: 126px;
    font-size: 21px;
  }
}
</style>
