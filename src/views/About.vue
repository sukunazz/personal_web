<template>
  <main class="about-page">
    <section class="container section-card about-top-card">
      <h2 class="skills-title">About Me</h2>
      <p class="skills-subtitle">Who I Am</p>
      <span class="section-rule" aria-hidden="true"></span>

      <div class="about-top-layout">
        <div class="about-illustration">
          <img
            src="/images/skills-what-i-do.svg"
            alt="Software engineering illustration"
          />
        </div>

        <div class="about-summary">
          <ul>
            <li>
              <i class="fas fa-microchip"></i>
              Building scalable backend systems and APIs.
            </li>
            <li>
              <i class="fas fa-users"></i>
              Shipping user-focused frontend interfaces.
            </li>
            <li>
              <i class="fas fa-seedling"></i>
              Exploring practical AI and Web3 integrations.
            </li>
            <li>
              <i class="fas fa-chess-knight"></i>
              Playing chess in my leisure time.
            </li>
          </ul>
          <p class="fun-fact">
            <strong>Fun Fact:</strong> I enjoy solving tough bugs like puzzle
            games.
          </p>
        </div>
      </div>
    </section>

    <section class="container section-card readme-card">
      <h2 class="section-title">README</h2>
      <p class="readme-text">
        I am a software engineer with strong hands-on experience across modern
        web technologies and scalable backend systems. I focus on writing
        reliable code that is easy to maintain and practical to extend.
      </p>
      <p class="readme-text">
        My work is centered around the JavaScript ecosystem, where I build
        full-stack products with clear architecture, performant APIs, and
        user-centered interfaces.
      </p>
      <p class="readme-text">
        Outside coding, I spend time learning new tools, reading documentation,
        playing chess, and continuously improving my software engineering craft.
      </p>
    </section>

    <section class="container section-card tools-card">
      <h2 class="section-title">Tools I Use</h2>
      <div class="tools-panel">
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
};
</script>

<style scoped>
.about-page {
  padding-bottom: 22px;
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
  margin-bottom: 26px;
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

.about-top-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
}

.about-illustration {
  background: #f1efef;
  border-radius: 12px;
  padding: 14px;
}

.about-illustration img {
  width: 100%;
  border-radius: 10px;
}

.about-summary ul {
  list-style: none;
  display: grid;
  gap: 11px;
  margin-bottom: 16px;
}

.about-summary li {
  display: flex;
  gap: 10px;
  color: #50545a;
  font-size: 17px;
  line-height: 1.55;
}

.about-summary i {
  color: #62666d;
  margin-top: 4px;
}

.fun-fact {
  color: #50545a;
  font-size: 17px;
  line-height: 1.6;
}

.section-title {
  font-size: 34px;
  font-weight: 700;
  color: #3f3f3f;
  margin-bottom: 10px;
}

.readme-text {
  font-size: 16px;
  line-height: 1.9;
  color: #666;
  max-width: 980px;
  margin-bottom: 12px;
}

.tools-panel {
  background: #f1efef;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tools-panel span {
  border: 1px solid #ddd6ce;
  border-radius: 999px;
  padding: 6px 12px;
  background: #ffffff;
  color: #50545a;
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 1200px) {
  .about-top-layout {
    grid-template-columns: 1fr;
  }

  .about-illustration {
    max-width: 520px;
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

  .section-title {
    font-size: 28px;
  }

  .about-summary li,
  .fun-fact,
  .readme-text {
    font-size: 15px;
    line-height: 1.75;
  }
}

@media (max-width: 500px) {
  .skills-title {
    font-size: 34px;
  }

  .skills-subtitle {
    font-size: 24px;
  }

  .section-title {
    font-size: 24px;
  }
}
</style>
