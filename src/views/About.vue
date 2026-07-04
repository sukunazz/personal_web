<template>
  <main class="about-page">
    <section class="container section-card about-intro">
      <h1 class="section-title">About</h1>
      <p class="section-subtitle">
        I design and build practical software systems with strong focus on
        maintainability, performance, and product usability.
      </p>
    </section>

    <section id="what-i-do" class="container section-card about-skills">
      <h2 class="skills-title">My Top Skills</h2>
      <p class="skills-subtitle">What I Do</p>
      <span class="section-rule" aria-hidden="true"></span>

      <div class="skills-layout">
        <div class="skills-copy">
          <article class="skill-block">
            <h3>BACKEND</h3>
            <p>
              I build scalable and maintainable backend applications using
              Nest.js, Docker, Redis, PostgreSQL, and MongoDB.
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

          <button type="button" class="works-link" @click="goToProjects">
            SEE MY PROJECTS
          </button>
        </div>

        <div class="skills-illustration" aria-hidden="true">
          <img
            class="what-i-do-image"
            src="/images/skills-what-i-do.svg"
            alt="Software engineering workflow illustration"
          />
        </div>
      </div>
    </section>

    <section class="container section-card tools-section">
      <h2 class="section-title">Tools I Use</h2>
      <p class="section-subtitle">
        My regular stack for frontend, backend, data, and deployment.
      </p>

      <div class="tools-list">
        <span>Vue.js</span>
        <span>React</span>
        <span>TailwindCSS</span>
        <span>Pinia</span>
        <span>NestJS</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>PostgreSQL</span>
        <span>MongoDB</span>
        <span>Redis</span>
        <span>Docker</span>
        <span>Git</span>
        <span>Vercel</span>
        <span>Axios</span>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AboutPage",
  methods: {
    goToProjects() {
      this.$router.push("/projects");
    },
  },
};
</script>

<style scoped>
.about-page {
  padding: 14px 0 26px;
}

.section-card {
  margin-top: 20px;
  background: #ffffff;
  border-radius: 14px;
  padding: 40px 44px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 34px;
  font-weight: 700;
  color: #3f3f3f;
  margin-bottom: 12px;
}

.section-subtitle {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
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

.skills-layout {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 28px;
  align-items: center;
}

.skills-copy {
  display: grid;
  gap: 22px;
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
  filter: none;
  transform: translateY(0);
  opacity: 0.98;
}

.tools-section {
  margin-top: 24px;
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.tools-list span {
  border: 1px solid #e0d8ce;
  background: #faf7f2;
  color: #5e615f;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 1200px) {
  .skills-layout {
    grid-template-columns: 1fr;
  }

  .skills-illustration img {
    width: min(100%, 390px);
  }
}

@media (max-width: 768px) {
  .section-card {
    padding: 35px 25px;
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
}

@media (max-width: 500px) {
  .section-title {
    font-size: 26px;
  }

  .skills-title {
    font-size: 34px;
  }

  .skills-subtitle {
    font-size: 24px;
  }

  .works-link {
    width: 126px;
    height: 126px;
    font-size: 21px;
  }
}
</style>
