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

<style>
.about {
  padding: 70px 0;
  background: #ffffff;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 25px;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}

.about-text-content {
  flex: 1;
  max-width: 550px;
}

h2 {
  font-size: 2.3rem;
  color: #4caf50;
  margin-bottom: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.about-text {
  margin-bottom: 1.75rem;
}

.about-text p {
  color: #666;
  line-height: 1.7;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
}

.about-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.8rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
}

.btn-primary {
  background: #4caf50;
  color: white;
  border: none;
  box-shadow: 0 2px 4px rgba(76, 175, 80, 0.2);
}

.btn-secondary {
  background: transparent;
  color: #4caf50;
  border: 1px solid #4caf50;
}

.btn-primary:hover {
  background: #3d8b40;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(76, 175, 80, 0.3);
}

.btn-secondary:hover {
  background: rgba(76, 175, 80, 0.05);
  transform: translateY(-1px);
}

.about-image {
  flex: 1;
  max-width: 350px;
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-image img:hover {
  transform: translateY(-5px);
}

/* Media Queries */
@media (max-width: 1100px) {
  .container {
    padding: 0 30px;
  }

  .about-content {
    gap: 40px;
  }

  .about-text-content {
    max-width: 500px;
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
    padding: 60px 0;
  }

  .about-content {
    flex-direction: column-reverse;
    gap: 35px;
  }

  .about-text-content,
  .about-image {
    max-width: 100%;
  }

  .about-image img {
    max-width: 380px;
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
    padding: 50px 0;
  }

  .container {
    padding: 0 20px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .about-text p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .about-text {
    margin-bottom: 1.5rem;
  }

  .about-image img {
    max-width: 320px;
  }
}

@media (max-width: 576px) {
  .about {
    padding: 40px 0;
  }

  .container {
    padding: 0 15px;
  }

  .about-content {
    gap: 25px;
  }

  h2 {
    font-size: 1.8rem;
  }

  .about-text p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .about-image img {
    max-width: 280px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  .about-buttons {
    flex-direction: column;
    gap: 0.8rem;
    max-width: 280px;
    margin: 0 auto;
  }

  .btn {
    width: 100%;
    text-align: center;
    padding: 0.7rem 1.5rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 35px 0;
  }

  h2 {
    font-size: 1.6rem;
  }

  .about-text p {
    font-size: 0.9rem;
  }

  .about-image img {
    max-width: 240px;
  }

  .about-buttons {
    max-width: 240px;
  }

  .btn {
    padding: 0.65rem 1.2rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 400px) {
  .about {
    padding: 30px 0;
  }

  .container {
    padding: 0 12px;
  }

  .about-content {
    gap: 20px;
  }

  h2 {
    font-size: 1.5rem;
  }

  .about-text p {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  .about-text {
    margin-bottom: 1.2rem;
  }

  .about-image img {
    max-width: 220px;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  }

  .about-buttons {
    max-width: 210px;
  }

  .btn {
    padding: 0.6rem 1rem;
    font-size: 0.7rem;
    letter-spacing: 0.3px;
  }
}

@media (max-width: 320px) {
  .about {
    padding: 25px 0;
  }

  .container {
    padding: 0 10px;
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }

  .about-text p {
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
  }

  .about-text {
    margin-bottom: 1rem;
  }

  .about-image img {
    max-width: 200px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .about-buttons {
    max-width: 180px;
    gap: 0.7rem;
  }

  .btn {
    padding: 0.55rem 0.9rem;
    font-size: 0.65rem;
  }
}

@media (max-width: 300px) {
  .about {
    padding: 20px 0;
  }

  h2 {
    font-size: 1.3rem;
  }

  .about-text p {
    font-size: 0.75rem;
  }

  .about-image img {
    max-width: 180px;
  }

  .about-buttons {
    max-width: 160px;
    gap: 0.6rem;
  }

  .btn {
    padding: 0.5rem 0.8rem;
    font-size: 0.6rem;
  }
}
</style>
