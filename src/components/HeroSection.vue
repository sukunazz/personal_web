<template>
  <section class="hero-container">
    <div class="hero-content">
      <div class="left-section">
        <h1 class="title">
          <span class="greeting">Hi, I'm Sujan Sigdel</span>
          <span class="role">Frontend Developer</span>
        </h1>
        <p class="description">
          Crafting beautiful digital experiences through clean and efficient
          code. Specialized in creating modern web applications with attention
          to detail.
        </p>
        <div class="cta-buttons">
          <button class="primary-btn">View Projects</button>
          <button class="secondary-btn">Get in Touch</button>
        </div>
        <div class="social-links">
          <a href="https://github.com/sukunazz" aria-label="Github"
            ><i class="fab fa-github"></i
          ></a>
          <a href="https://x.com/sigdelsujan03" aria-label="Twitter"
            ><i class="fab fa-twitter"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/sujansigdel/"
            aria-label="LinkedIn"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a href="#" aria-label="Dribbble"><i class="fab fa-dribbble"></i></a>
        </div>
      </div>

      <div class="right-section">
        <div class="glowing-ring"></div>
        <div class="floating-dots">
          <span class="dot dot1"></span>
          <span class="dot dot2"></span>
          <span class="dot dot3"></span>
        </div>
        <div class="image-container">
          <img
            src="@/assets/images/sujan1.png"
            alt="Profile"
            class="profile-image"
          />
          <div class="decorative-circle"></div>
        </div>
        <div class="orbiting-icons">
          <i class="fab fa-react icon icon1"></i>
          <i class="fab fa-js icon icon2"></i>
          <i class="fab fa-css3-alt icon icon3"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-container {
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 2rem 6rem;
  display: flex;
  align-items: center;
  position: relative;
  font-family: "Inter", sans-serif;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.left-section {
  max-width: 600px;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.greeting {
  font-size: 1.5rem;
  color: #666;
  font-weight: 400;
}

.role {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  color: #4caf50;
  letter-spacing: -1px;
}

.description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.primary-btn,
.secondary-btn {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: #4caf50;
  color: white;
  border: none;
}

.primary-btn:hover {
  background-color: #444;
  transform: translateY(-2px);
}

.secondary-btn {
  background-color: transparent;
  color: #4caf50;
  border: 2px solid #333;
}

.secondary-btn:hover {
  background-color: #333;
  color: white;
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  color: #666;
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #333;
}

.right-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

/* Decorative Elements */
.glowing-ring {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 6px solid rgba(76, 175, 80, 0.5);
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

.floating-dots {
  position: absolute;
}

.dot {
  width: 10px;
  height: 10px;
  background: #4caf50;
  border-radius: 50%;
  position: absolute;
  animation: float 4s infinite ease-in-out alternate;
}

.dot1 {
  top: -30px;
  left: 40px;
  animation-delay: 0.5s;
}

.dot2 {
  bottom: -40px;
  right: 60px;
  animation-delay: 1s;
}

.dot3 {
  top: 50px;
  right: -20px;
  animation-delay: 1.5s;
}

@keyframes float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}

.orbiting-icons {
  position: absolute;
  width: 400px;
  height: 400px;
  animation: rotate 6s linear infinite;
}

.icon {
  font-size: 2rem;
  color: #4caf50;
  position: absolute;
}

.icon1 {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.icon2 {
  bottom: 10%;
  right: 30%;
}

.icon3 {
  top: 50%;
  left: 10%;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .hero-content {
    display: flex;
    flex-direction: column-reverse; /* Puts the image on top */
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin: 5rem 1rem 1rem 1rem;
  }
  .glowing-ring {
    width: 340px;
    height: 345px;
  }

  .left-section {
    margin: 0rem auto;
    padding-top: 2rem;
  }

  .cta-buttons {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .right-section {
    height: auto;
    /* margin: 2rem; */
  }

  .geometric-element {
    width: 300px;
    height: 300px;
  }

  .image-container {
    width: 250px;
    height: 250px;
  }

  .decorative-circle {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .role {
    font-size: 2.5rem;
  }

  .image-container {
    width: 250px;
    height: 250px;
  }

  .glowing-ring {
    width: 300px;
    height: 300px;
  }
}
</style>
