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
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="about-summary">
          <ul>
            <li v-for="item in highlights" :key="item.text">
              <i :class="item.icon" aria-hidden="true"></i>
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <p class="fun-fact">
            <strong>Fun Fact:</strong> I enjoy solving tough bugs like puzzle
            games.
          </p>
        </div>
      </div>

      <section class="about-readme-block">
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
        <div class="tools-cloud">
          <div class="tool-token" v-for="tool in tools" :key="tool.name">
            <img
              v-if="tool.image"
              :src="tool.image"
              :alt="tool.name"
              loading="lazy"
              decoding="async"
            />
            <i v-else :class="tool.icon" aria-hidden="true"></i>
            <span>{{ tool.name }}</span>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      highlights: [
        {
          icon: "fas fa-microchip",
          text: "Building scalable backend systems and APIs.",
        },
        {
          icon: "fas fa-users",
          text: "Shipping user-focused frontend interfaces.",
        },
        {
          icon: "fas fa-seedling",
          text: "Exploring practical AI and Web3 integrations.",
        },
        {
          icon: "fas fa-chess-knight",
          text: "Playing chess in my leisure time.",
        },
      ],
      tools: [
        { name: "Vue.js", image: "/images/vue.png" },
        { name: "React", image: "/images/250px-React_Logo_SVG.svg.png" },
        { name: "TailwindCSS", icon: "fas fa-wind" },
        { name: "Pinia", icon: "fas fa-layer-group" },
        { name: "NestJS", image: "/images/lg-67786f2e073fb-NestJS.png" },
        { name: "Node.js", image: "/images/node.png" },
        { name: "Express", icon: "fas fa-server" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "MongoDB", image: "/images/mongodb.png" },
        { name: "Redis", icon: "fas fa-bolt" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Vercel", icon: "fas fa-cloud" },
        { name: "Axios", icon: "fas fa-plug" },
        { name: "JavaScript", image: "/images/javascript.png" },
        { name: "HTML", image: "/images/html.png" },
        { name: "CSS", image: "/images/css.png" },
      ],
    };
  },
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
  min-height: calc(100vh - 86px);
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
  grid-template-columns: minmax(290px, 1.03fr) minmax(340px, 0.97fr);
  gap: 28px;
  align-items: center;
}

.about-illustration {
  width: 100%;
  min-height: 0;
}

.about-illustration img {
  width: 100%;
  max-width: 620px;
  border-radius: 12px;
  border: 1px solid #e7e2dc;
}

.about-summary ul {
  list-style: none;
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
}

.about-summary li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  color: #50545a;
  font-size: 18px;
  line-height: 1.55;
}

.about-summary i {
  color: #62666d;
  margin-top: 5px;
  width: 18px;
  text-align: center;
}

.fun-fact {
  color: #50545a;
  font-size: 18px;
  line-height: 1.7;
}

.about-readme-block {
  margin-top: 26px;
  max-width: 760px;
  content-visibility: auto;
  contain-intrinsic-size: 300px;
}

.section-title {
  font-size: 34px;
  font-weight: 700;
  color: #3f3f3f;
  margin-bottom: 10px;
}

.readme-text {
  font-size: 17px;
  line-height: 1.85;
  color: #666;
  max-width: none;
  margin-bottom: 12px;
}

.about-tools-block {
  margin-top: 28px;
  content-visibility: auto;
  contain-intrinsic-size: 340px;
}

.tools-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 26px;
  margin-top: 12px;
}

.tool-token {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #50545a;
  min-width: 140px;
  padding: 2px 0;
}

.tool-token img {
  width: 23px;
  height: 23px;
  object-fit: contain;
  flex-shrink: 0;
}

.tool-token i {
  font-size: 22px;
  color: #5d6168;
  width: 23px;
  text-align: center;
  flex-shrink: 0;
}

.tool-token span {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
}

@media (max-width: 1200px) {
  .about-top-layout {
    grid-template-columns: 1fr;
  }

  .about-illustration {
    max-width: 620px;
  }
}

@media (max-width: 768px) {
  .about-card {
    padding: 35px 25px 40px;
    min-height: calc(100vh - 92px);
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
    font-size: 16px;
    line-height: 1.75;
  }

  .tools-cloud {
    gap: 12px 18px;
  }

  .tool-token {
    min-width: 130px;
  }

  .tool-token span {
    font-size: 14px;
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

  .tool-token {
    min-width: 120px;
  }
}
</style>
