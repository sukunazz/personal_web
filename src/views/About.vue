<template>
  <main class="about-page">
    <section class="container about-surface">
      <div class="about-top">
        <div class="about-photo-wrap">
          <img
            src="/images/p1.png"
            alt="Developer portrait"
            class="about-photo"
          />
        </div>

        <div class="about-highlights">
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
            <strong>Fun Fact:</strong>
            I enjoy solving tough bugs like puzzle games.
          </p>
        </div>
      </div>

      <section class="about-readme">
        <h2>README</h2>
        <span class="section-rule" aria-hidden="true"></span>

        <p>
          I am a software engineer with strong hands-on experience across modern
          web technologies and scalable backend systems. I focus on writing
          reliable code that is easy to maintain and practical to extend.
        </p>
        <p>
          My work is centered around the JavaScript ecosystem, where I build
          full-stack products with clear architecture, performant APIs, and
          user-centered interfaces.
        </p>
        <p>
          Outside coding, I spend time learning new tools, reading
          documentation, playing chess, and continuously improving my software
          engineering craft.
        </p>
      </section>

      <section class="about-tools">
        <h2>Tools I Use</h2>
        <p>
          Vue.js, React, TailwindCSS, Pinia, NestJS, Node.js, Express,
          PostgreSQL, MongoDB, Redis, Docker, Git, Axios, and Vercel.
        </p>
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
  padding: 14px 0 26px;
}

.about-surface {
  background: #f1efef;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
}

.about-top {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 28px;
  align-items: start;
}

.about-photo-wrap {
  border-radius: 12px;
  overflow: hidden;
}

.about-photo {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.about-highlights ul {
  list-style: none;
  display: grid;
  gap: 10px;
  margin-bottom: 20px;
}

.about-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #50545a;
  font-size: 16px;
  line-height: 1.35;
}

.about-highlights i {
  color: #60646b;
  font-size: 18px;
  line-height: 1.3;
  margin-top: 2px;
}

.fun-fact {
  font-size: 17px;
  color: #4a4e56;
  line-height: 1.7;
}

.about-readme {
  margin-top: 22px;
}

.about-readme h2,
.about-tools h2 {
  font-size: 34px;
  color: #4b4f56;
  margin-bottom: 8px;
}

.section-rule {
  display: block;
  width: 150px;
  height: 4px;
  border-radius: 99px;
  background: #e5524c;
  margin-bottom: 18px;
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

.about-readme p,
.about-tools p {
  color: #50545a;
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.about-tools {
  margin-top: 10px;
}

@media (max-width: 1000px) {
  .about-top {
    grid-template-columns: 1fr;
  }

  .about-photo-wrap {
    max-width: 420px;
  }
}

@media (max-width: 768px) {
  .about-surface {
    padding: 18px;
  }

  .about-highlights li,
  .about-readme p,
  .about-tools p {
    font-size: 16px;
  }

  .about-readme h2,
  .about-tools h2 {
    font-size: 30px;
  }
}
</style>
