<template>
  <main class="home-page">
    <section class="container hero-card">
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
  color: #e5524c;
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
  color: #2f3135;
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
  background: #e5524c;
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

@media (max-width: 1200px) {
  .hero-layout {
    grid-template-columns: 60px 1fr 420px;
    gap: 30px;
  }

  .hero-title {
    font-size: 60px;
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
    padding: 35px 25px;
  }

  .hero-title {
    font-size: 52px;
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
