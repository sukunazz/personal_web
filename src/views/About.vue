<template>
  <main class="about-page">
    <section class="container about-card">
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

      <section class="about-readme-block">
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
          Outside coding, I spend time learning new tools, reading
          documentation, playing chess, and continuously improving my software
          engineering craft.
        </p>
      </section>

      <section class="about-tools-block">
        <h2 class="section-title">Tools I Use</h2>
        <div class="tools-grid">
          <div class="tool-item"><img src="/images/vue.png" alt="Vue" /><span>Vue.js</span></div>
          <div class="tool-item"><img src="/images/250px-React_Logo_SVG.svg.png" alt="React" /><span>React</span></div>
          <div class="tool-item"><i class="fas fa-wind"></i><span>TailwindCSS</span></div>
          <div class="tool-item"><i class="fas fa-layer-group"></i><span>Pinia</span></div>
          <div class="tool-item"><img src="/images/lg-67786f2e073fb-NestJS.png" alt="NestJS" /><span>NestJS</span></div>
          <div class="tool-item"><img src="/images/node.png" alt="Node.js" /><span>Node.js</span></div>
          <div class="tool-item"><i class="fas fa-server"></i><span>Express</span></div>
          <div class="tool-item"><i class="fas fa-database"></i><span>PostgreSQL</span></div>
          <div class="tool-item"><img src="/images/mongodb.png" alt="MongoDB" /><span>MongoDB</span></div>
          <div class="tool-item"><i class="fas fa-bolt"></i><span>Redis</span></div>
          <div class="tool-item"><i class="fab fa-docker"></i><span>Docker</span></div>
          <div class="tool-item"><i class="fab fa-git-alt"></i><span>Git</span></div>
          <div class="tool-item"><i class="fas fa-cloud"></i><span>Vercel</span></div>
          <div class="tool-item"><i class="fas fa-plug"></i><span>Axios</span></div>
          <div class="tool-item"><img src="/images/javascript.png" alt="JavaScript" /><span>JavaScript</span></div>
          <div class="tool-item"><img src="/images/html.png" alt="HTML" /><span>HTML</span></div>
          <div class="tool-item"><img src="/images/css.png" alt="CSS" /><span>CSS</span></div>
        </div>
      </section>
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
  padding-bottom: 20px;
}

.about-card {
  background: #ffffff;
  border-radius: 0 0 14px 14px;
  margin-top: -2px;
  padding: 40px 44px 46px;
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

.about-readme-block {
  margin-top: 30px;
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

.about-tools-block {
  margin-top: 26px;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px 14px;
  margin-top: 10px;
}

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
  color: #50545a;
}

.tool-item img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.tool-item i {
  font-size: 22px;
  color: #5d6168;
}

.tool-item span {
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  line-height: 1.35;
}

@media (max-width: 1200px) {
  .about-top-layout {
    grid-template-columns: 1fr;
  }

  .about-illustration {
    max-width: 520px;
  }

  .tools-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .about-card {
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

  .tools-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px 10px;
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

  .tools-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
