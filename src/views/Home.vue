<template>
  <main class="home-page">
    <section class="hero-card">
      <div class="container hero-shell">
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
              backend systems, AI applications, and practical software
              solutions.
            </p>

            <div class="hero-highlights" aria-label="core focus areas">
              <span>Web Apps</span>
              <span>Backend APIs</span>
              <span>AI Workflows</span>
            </div>

            <button type="button" class="talk-button" @click="goToContact">
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
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goToContact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style scoped>
.home-page {
  padding-bottom: 20px;
}

.hero-card {
  background: var(--color-surface-soft);
  border-radius: 0;
  margin-top: -2px;
  padding: 44px 0 50px;
  min-height: calc(100vh - 86px);
  position: relative;
  overflow: hidden;
}

.hero-card::before,
.hero-card::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.hero-card::before {
  width: 420px;
  height: 420px;
  right: -120px;
  top: 80px;
  background: radial-gradient(circle, rgba(194, 216, 241, 0.35) 0%, rgba(194, 216, 241, 0) 72%);
}

.hero-card::after {
  width: 320px;
  height: 320px;
  left: -140px;
  bottom: -60px;
  background: radial-gradient(circle, rgba(233, 170, 130, 0.18) 0%, rgba(233, 170, 130, 0) 72%);
}

.hero-shell {
  padding: 0 60px;
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-layout {
  display: grid;
  grid-template-columns: 70px minmax(380px, 440px) minmax(340px, 440px);
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
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
  color: #000000;
  transition: 0.25s;
}

.hero-socials a:hover {
  color: var(--color-brand-700);
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
  font-size: 62px;
  line-height: 0.95;
  font-weight: 800;
  color: var(--color-heading);
  margin: 0 0 22px;
}

.hero-role {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #6c9580;
  margin-bottom: 28px;
}

.hero-description {
  width: 330px;
  font-size: 15px;
  line-height: 1.9;
  color: #111111;
  margin-bottom: 18px;
}

.hero-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 34px;
}

.hero-highlights span {
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid #d7e2f0;
  background: #ffffff;
  color: #111111;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.talk-button {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: none;
  background: var(--color-accent-600);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.05;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(219, 153, 108, 0.35);
  transition: 0.3s;
}

.talk-button:hover {
  transform: translateY(-6px);
  background: var(--color-brand-600);
  box-shadow: 0 18px 35px rgba(128, 144, 183, 0.3);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-avatar {
  width: 458px;
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
  transform: translate(-38px, -16px);
}

.minion-frame {
  position: relative;
  width: min(324px, 82%);
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

@media (min-width: 1600px) {
  .hero-card {
    padding: 58px 0 62px;
  }

  .hero-shell {
    max-width: none;
    padding-left: max(60px, calc((100vw - 1720px) / 2 + 60px));
    padding-right: max(60px, calc((100vw - 1720px) / 2 + 60px));
  }

  .hero-layout {
    grid-template-columns: 88px minmax(470px, 560px) minmax(460px, 620px);
    column-gap: 34px;
    min-height: 760px;
  }

  .hero-title {
    font-size: 78px;
  }

  .hero-description {
    width: min(460px, 100%);
    font-size: 17px;
  }

  .hero-highlights span {
    font-size: 13px;
    padding: 8px 14px;
  }

  .hero-avatar {
    width: 540px;
  }

  .minion-frame {
    width: min(390px, 86%);
  }

  .talk-button {
    width: 104px;
    height: 104px;
    font-size: 24px;
  }
}

@media (min-width: 2000px) {
  .hero-shell {
    padding-left: max(72px, calc((100vw - 1860px) / 2 + 72px));
    padding-right: max(72px, calc((100vw - 1860px) / 2 + 72px));
  }

  .hero-layout {
    grid-template-columns: 92px minmax(500px, 600px) minmax(500px, 700px);
    min-height: 820px;
  }

  .hero-title {
    font-size: 84px;
  }

  .hero-avatar {
    width: 600px;
  }

  .minion-frame {
    width: min(440px, 86%);
  }
}

@media (max-width: 1200px) {
  .hero-layout {
    grid-template-columns: 60px minmax(340px, 1fr) minmax(300px, 390px);
    gap: 24px;
  }

  .hero-title {
    font-size: 54px;
  }

  .hero-avatar {
    width: 385px;
  }

  .minion-sequence {
    transform: translate(-20px, -13px);
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

  .hero-highlights {
    justify-content: center;
  }

  .hero-socials {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  }

  .hero-image {
    justify-content: center;
    margin-top: 12px;
  }

  .minion-sequence {
    padding: 4px 0 8px;
    transform: translateY(-8px);
  }

  .hero-avatar {
    width: 352px;
    aspect-ratio: auto;
  }
}

@media (max-width: 768px) {
  .hero-card {
    padding: 35px 0;
    min-height: calc(100vh - 92px);
  }

  .hero-shell {
    padding: 0 25px;
  }

  .hero-title {
    font-size: 46px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-highlights {
    justify-content: center;
    margin-bottom: 28px;
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
    font-size: 38px;
  }

  .hero-role {
    font-size: 14px;
  }

  .hero-avatar {
    width: 278px;
  }

  .minion-frame {
    width: min(252px, 86%);
    margin-left: 10%;
  }

  .minion-sequence {
    transform: translateY(-5px);
  }

  .hero-socials a {
    font-size: 28px;
  }
}

@media (max-width: 390px) {
  .hero-shell {
    padding: 0 18px;
  }

  .hero-avatar {
    width: 248px;
  }

  .minion-frame {
    width: min(228px, 86%);
    margin-left: 8%;
  }

  .minion-sequence {
    transform: translateY(-3px);
  }
}
</style>
