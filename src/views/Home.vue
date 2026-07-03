<template>
  <main class="home-page">
    <!-- ================= HERO ================= -->

    <section class="container hero-card">
      <div class="hero-layout">
        <!-- Left Social Icons -->

        <aside class="hero-socials">
          <a
            href="https://www.linkedin.com/in/sujansigdel/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/sukunazz"
            target="_blank"
            aria-label="Github"
          >
            <i class="fab fa-github"></i>
          </a>

          <a
            href="https://x.com/sigdelsujan03"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </aside>

        <!-- Hero Text -->

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

          <router-link to="/contact" class="talk-button">
            let's<br />
            talk
          </router-link>
        </section>

        <!-- Hero Image -->

        <section class="hero-image">
          <img src="/images/sujan.png" alt="Sujan Sigdel" />
        </section>
      </div>
    </section>

    <!-- ================= SKILLS ================= -->

    <section class="container section-card skills-reference">
      <h2 class="skills-title">my top skills</h2>

      <p class="skills-subtitle">what i do</p>

      <div class="skills-list">
        <article class="skill-block">
          <h3>backend</h3>

          <p>
            I build scalable and maintainable backend applications using modern
            technologies like Nest.js, Docker, Redis, PostgreSQL and MongoDB.
          </p>
        </article>

        <article class="skill-block">
          <h3>frontend</h3>

          <p>
            I build client-side applications with semantic structure and modern
            features such as SPA using Vue.js, React, TailwindCSS and Pinia.
          </p>
        </article>
      </div>

      <router-link to="/projects" class="works-link">SEE MY WORKS</router-link>
    </section>

    <!-- ================= README ================= -->

    <section class="container section-card">
      <h2 class="section-title">README</h2>

      <p class="readme-text">
        I enjoy building software that solves real problems. Whether it's AI
        Engineering, backend APIs, authentication systems, frontend applications
        or full-stack products, I focus on writing clean, maintainable and
        scalable code.
      </p>

      <p class="readme-text">
        Outside programming I enjoy learning new technologies, reading
        documentation, playing chess and constantly improving my software
        engineering skills.
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  padding-bottom: 70px;
}

/* ==========================
   HERO CARD
========================== */

.hero-card {
  background: #ffffff;

  border-radius: 14px;

  padding: 50px 60px;

  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.05);
}

/* ==========================
   LAYOUT
========================== */

.hero-layout {
  display: grid;

  grid-template-columns:
    70px
    430px
    1fr;

  align-items: center;

  column-gap: 40px;

  min-height: 680px;
}

/* ==========================
   SOCIALS
========================== */

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

/* ==========================
   CONTENT
========================== */

.hero-content {
  display: flex;

  flex-direction: column;

  justify-content: center;
}

/* ==========================
   SPEECH BUBBLE
========================== */

.speech-bubble {
  position: relative;

  display: inline-block;

  width: max-content;

  background: #2d2d2d;

  color: white;

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

/* ==========================
   NAME
========================== */

.hero-title {
  font-size: 72px;

  line-height: 0.95;

  font-weight: 800;

  color: #444;

  margin: 0 0 22px;
}

/* ==========================
   ROLE
========================== */

.hero-role {
  font-size: 16px;

  font-weight: 700;

  letter-spacing: 1px;

  color: #444;

  margin-bottom: 28px;
}

/* ==========================
   DESCRIPTION
========================== */

.hero-description {
  width: 310px;

  font-size: 15px;

  line-height: 1.9;

  color: #666;

  margin-bottom: 40px;
}

/* ==========================
   TALK BUTTON
========================== */

.talk-button {
  width: 92px;

  height: 92px;

  border-radius: 50%;

  background: #ef7b71;

  color: white;

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

/* ==========================
   IMAGE
========================== */

.hero-image {
  display: flex;

  justify-content: flex-end;

  align-items: center;
}

.hero-image img {
  width: 540px;

  max-width: 100%;

  height: auto;

  object-fit: contain;

  user-select: none;
}
/* ==========================
   SECTION CARD
========================== */

.section-card {
  margin-top: 30px;

  background: #ffffff;

  border-radius: 14px;

  padding: 50px 60px;

  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.05);
}

/* ==========================
   SECTION TITLES
========================== */

.section-title {
  font-size: 34px;

  font-weight: 700;

  color: #3f3f3f;

  margin-bottom: 10px;
}

.section-subtitle {
  color: #888;

  font-size: 15px;

  margin-bottom: 40px;
}

/* ==========================
   SKILLS
========================== */

.skills-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 25px;
}

.skill-card {
  background: #fafafa;

  border: 1px solid #ececec;

  border-radius: 12px;

  padding: 28px;

  transition: 0.3s;
}

.skill-card:hover {
  transform: translateY(-8px);

  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.08);
}

.skill-card h3 {
  font-size: 22px;

  color: #444;

  margin-bottom: 15px;
}

.skill-card p {
  color: #666;

  line-height: 1.8;

  font-size: 15px;
}

.skills-reference .section-title {
  margin-bottom: 0;
}

.skills-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 6px;
  text-transform: lowercase;
}

.skills-subtitle {
  font-size: 17px;
  color: #666;
  margin-bottom: 24px;
  text-transform: lowercase;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.skill-block h3 {
  font-size: 28px;
  font-weight: 700;
  text-transform: lowercase;
  color: #3d3d3d;
  margin-bottom: 10px;
}

.skill-block p {
  color: #666;
  font-size: 15px;
  line-height: 1.9;
}

.works-link {
  margin-top: 26px;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #3f3f3f;
  text-decoration: none;
  text-transform: uppercase;
}

.works-link::after {
  content: "";
  width: 56px;
  height: 2px;
  background: #ef6b61;
  margin-left: 10px;
}

/* ==========================
   README
========================== */

.readme-text {
  font-size: 16px;

  line-height: 2;

  color: #666;

  max-width: 850px;

  margin-bottom: 24px;
}

/* ==========================
   LINKS
========================== */

a {
  text-decoration: none;
}

/* ==========================
   IMAGE EFFECT
========================== */

.hero-image {
  position: relative;
}

.hero-image img {
  transition: 0.4s;
}

.hero-image img:hover {
  transform: translateY(-8px) scale(1.02);
}

/* ==========================
   RESPONSIVE
========================== */

@media (max-width: 1200px) {
  .hero-layout {
    grid-template-columns:
      60px
      1fr
      420px;

    gap: 30px;
  }

  .hero-title {
    font-size: 60px;
  }

  .hero-image img {
    width: 430px;
  }
}

@media (max-width: 992px) {
  .hero-layout {
    grid-template-columns: 1fr;

    text-align: center;
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

    margin-bottom: 30px;
  }

  .hero-image {
    justify-content: center;

    margin-top: 50px;
  }

  .hero-image img {
    width: 380px;
  }

  .skills-grid,
  .skills-list {
    grid-template-columns: 1fr;
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

  .skills-title {
    font-size: 32px;
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

  .skills-title {
    font-size: 28px;
  }

  .skill-card {
    padding: 20px;
  }

  .hero-socials a {
    font-size: 28px;
  }
}
</style>
