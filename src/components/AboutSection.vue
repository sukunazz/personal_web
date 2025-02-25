<!-- <template>
  <section class="about" id="about">
    <div class="container">
      <div class="about-content">
        <h2>Hi, I am Julia Anderson</h2>
        <div class="about-text">
          <p>
            I am Julia Anderson - a photographer and a graphic designer. Art is
            my passion and I am in it for more than 10 years. The two-year
            experience with famous brands like Canon and Sony grew me into a
            professional photographer and currently, I work on a freelance
            basis.
          </p>
          <p>
            I have worked with Olympus, Nikon, and many other worldwide brands
            and will be happy to know you are my next client. Scroll down to
            explore more and get in touch.
          </p>
        </div>
        <div class="about-buttons">
         
          <a href="/resume.pdf" download class="btn btn-primary">
            Download CV
          </a>

         

          <a href="#" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  methods: {
    downloadCV() {
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Ensure this file is in the public folder
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
.about {
  padding: 100px 0;
  background: #f9f9f9;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.about-text {
  margin-bottom: 2rem;
}

.about-text p {
  margin-bottom: 1rem;
  color: #666;
  line-height: 1.8;
}

.about-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #4caf50;
  color: white;
}

.btn-secondary {
  background: transparent;
  color: #333;
  border: 1px solid #333;
}

.btn-primary:hover {
  background: #45a049;
}

.btn-secondary:hover {
  background: #f5f5f5;
}

@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .about-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style> 
  -->

<!-- <template>
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
          <img src="@/assets/images/sujan.png" alt="Julia Anderson" />
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
  padding: 80px 0;
  background: #ffffff;
  /* background: #001f3f; */
  /* background-color: #f5e6d3; */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.about-text-content {
  flex: 1;
  max-width: 600px;
}

h2 {
  font-size: 2.5rem;
  /* color: #333; */
  color: #4caf50;

  margin-bottom: 1.5rem;
  font-weight: 600;
}

.about-text {
  margin-bottom: 2rem;
}

.about-text p {
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.about-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
}

.btn-primary {
  background: #4caf50;

  color: white;
  border: none;
}

.btn-secondary {
  background: transparent;
  color: #4caf50;
  border: 1px solid #666;
}

.btn-primary:hover {
  background: #3d6350;
}

.btn-secondary:hover {
  background: #f5f5f5;
}

.about-image {
  flex: 1;
  max-width: 500px;
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 992px) {
  .about-content {
    flex-direction: column-reverse;
    gap: 40px;
  }

  .about-text-content,
  .about-image {
    max-width: 100%;
  }

  .about-image img {
    max-width: 400px;
    margin: 0 auto;
    display: block;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .about-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .about-image img {
    max-width: 100%;
  }
}
</style> -->

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

@media (max-width: 992px) {
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
}

@media (max-width: 768px) {
  .about {
    padding: 50px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .about-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .about-image img {
    max-width: 100%;
  }
}
</style>
