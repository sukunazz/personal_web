<template>
  <section class="about" id="about">
    <div class="container">
      <div class="about-content">
        <div class="about-text-content">
          <h2>Hi, I am Sujan Sigdel</h2>
          <div class="about-text">
            <p>
              Hi, I am Sujan Sigdel, a Frontend Developer specializing in Vue.js
              with 2 years of experience. I build responsive, dynamic, and
              user-friendly web applications, focusing on clean code and
              seamless functionality. My expertise includes Vue.js, JavaScript,
              HTML, CSS, and modern frontend tools that bring ideas to life.
            </p>
            <p>
              I have built interactive dashboards and e-commerce platforms,
              ensuring seamless performance across all devices. Passionate about
              UI/UX, I create smooth and engaging experiences. Excited to
              collaborate—scroll down to explore my work and get in touch.
            </p>
          </div>
          <div class="about-buttons">
            <a href="/resume.pdf" download class="btn btn-primary">
              Download CV
            </a>
            <a href="#" class="btn btn-secondary">LEARN MORE</a>
          </div>
        </div>
        <div class="about-image">
          <img src="@/assets/images/p2.png" alt="Julia Anderson" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about {
  padding: 90px 0;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-lg);
  margin: 0 2rem;
  box-shadow: 0 24px 50px rgba(31, 42, 29, 0.1);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.about-text-content {
  flex: 1;
  max-width: 560px;
}

h2 {
  font-size: 2.4rem;
  color: var(--color-forest);
  margin-bottom: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.about-text {
  margin-bottom: 2rem;
}

.about-text p {
  color: var(--color-ink-muted);
  line-height: 1.7;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
}

.about-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.8rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
}

.btn-primary {
  background: var(--color-forest);
  color: #fff;
  border: none;
  box-shadow: 0 10px 20px rgba(31, 111, 92, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.75);
  color: var(--color-forest);
  border: 1px solid rgba(31, 111, 92, 0.4);
}

.btn-primary:hover {
  background: #1a5b4c;
  transform: translateY(-1px);
  box-shadow: 0 14px 22px rgba(31, 111, 92, 0.25);
}

.btn-secondary:hover {
  background: rgba(31, 111, 92, 0.12);
  transform: translateY(-1px);
}

.about-image {
  flex: 1;
  max-width: 360px;
  position: relative;
}

.about-image::before {
  content: "";
  position: absolute;
  inset: -18px;
  border-radius: 40px;
  border: 2px dashed rgba(31, 111, 92, 0.35);
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 28px;
  box-shadow: 0 18px 35px rgba(31, 42, 29, 0.18);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.about-image img:hover {
  transform: translateY(-5px);
}

@media (max-width: 1100px) {
  .about {
    margin: 0 1.5rem;
  }

  .about-content {
    gap: 40px;
  }

  .about-image {
    max-width: 320px;
  }

  h2 {
    font-size: 2.1rem;
  }
}

@media (max-width: 992px) {
  .about {
    padding: 70px 0;
  }

  .about-content {
    flex-direction: column-reverse;
    gap: 35px;
  }

  .about-text-content,
  .about-image {
    max-width: 100%;
  }

  .about-image::before {
    inset: -10px;
  }

  .about-image img {
    max-width: 360px;
    margin: 0 auto;
    display: block;
  }

  h2 {
    text-align: center;
  }

  .about-text p {
    text-align: center;
  }

  .about-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 60px 0;
    margin: 0 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .about {
    padding: 50px 0;
  }

  .about-content {
    gap: 25px;
  }

  h2 {
    font-size: 1.8rem;
  }

  .about-text p {
    font-size: 0.95rem;
  }

  .about-image img {
    max-width: 280px;
  }

  .about-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 240px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .about {
    margin: 0 0.75rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  .about-image img {
    max-width: 240px;
  }
}
</style>
