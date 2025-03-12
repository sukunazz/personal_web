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

<style>
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
@media (max-width: 1400px) {
  .hero-container {
    padding: 2rem 4rem;
  }

  .hero-content {
    gap: 8rem;
  }

  .left-section {
    max-width: 500px;
  }

  .image-container {
    width: 320px;
    height: 320px;
  }

  .glowing-ring {
    width: 380px;
    height: 380px;
  }

  .orbiting-icons {
    width: 360px;
    height: 360px;
  }
}

@media (max-width: 1200px) {
  .hero-container {
    padding: 2rem 3rem;
  }

  .hero-content {
    gap: 6rem;
  }

  .left-section {
    max-width: 450px;
  }

  .role {
    font-size: 2.8rem;
  }

  .greeting {
    font-size: 1.4rem;
  }

  .description {
    font-size: 1.2rem;
  }

  .image-container {
    width: 300px;
    height: 300px;
  }

  .glowing-ring {
    width: 360px;
    height: 360px;
  }

  .orbiting-icons {
    width: 340px;
    height: 340px;
  }
}

@media (max-width: 1024px) {
  .hero-container {
    padding: 2rem 2rem;
  }

  .hero-content {
    gap: 4rem;
  }

  .left-section {
    max-width: 400px;
  }

  .role {
    font-size: 2.5rem;
  }

  .greeting {
    font-size: 1.3rem;
  }

  .description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .cta-buttons {
    margin-bottom: 2.5rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 0.9rem 1.8rem;
  }

  .image-container {
    width: 280px;
    height: 280px;
  }

  .glowing-ring {
    width: 330px;
    height: 330px;
  }

  .orbiting-icons {
    width: 320px;
    height: 320px;
  }

  .icon {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 1.5rem;
    min-height: auto;
  }

  .hero-content {
    display: flex;
    flex-direction: column-reverse; /* Puts the image on top */
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin: 4rem 1rem 1rem 1rem;
  }

  .left-section {
    margin: 0 auto;
    padding-top: 1.5rem;
    max-width: 450px;
  }
  .right-section {
    margin-top: 3rem;
  }
  .cta-buttons {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .role {
    font-size: 2.3rem;
  }

  .greeting {
    font-size: 1.2rem;
  }

  .image-container {
    width: 250px;
    height: 250px;
  }

  .glowing-ring {
    width: 300px;
    height: 300px;
    border-width: 5px;
  }

  .orbiting-icons {
    width: 280px;
    height: 280px;
  }
}

@media (max-width: 574px) {
  .hero-container {
    padding: 1rem;
  }

  .hero-content {
    margin: 0 0.5rem;
    gap: 1rem;
  }

  .right-section {
    margin-top: 8rem;
  }

  .left-section {
    padding-top: 1rem;
    margin-top: 2rem;
  }

  .role {
    font-size: 2rem;
  }

  .greeting {
    font-size: 1.1rem;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .cta-buttons {
    gap: 1rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }

  .social-links {
    gap: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 1rem 0.75rem;
  }

  .hero-content {
    margin: 0 0.25rem;
  }

  .left-section {
    width: 100%;
  }

  .role {
    font-size: 1.8rem;
  }

  .greeting {
    font-size: 1rem;
  }

  .description {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    max-width: 220px;
    margin: 0 auto 1.5rem auto;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }

  .social-links {
    gap: 1rem;
  }

  .social-links a {
    font-size: 1.1rem;
  }

  .title {
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
}

@media (max-width: 400px) {
  .role {
    font-size: 1.6rem;
  }

  .greeting {
    font-size: 0.9rem;
  }

  .description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .cta-buttons {
    max-width: 200px;
    margin-bottom: 1.2rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 0.65rem 0.9rem;
    font-size: 0.85rem;
  }

  .social-links a {
    font-size: 1rem;
  }
}

@media (max-width: 320px) {
  .hero-container {
    padding: 0.75rem 0.5rem;
  }

  .hero-content {
    margin: 0;
  }

  .left-section {
    padding-top: 0.5rem;
    margin-top: 1.5rem;
  }

  .role {
    font-size: 1.4rem;
  }

  .greeting {
    font-size: 0.85rem;
  }

  .description {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 0.8rem;
  }

  .cta-buttons {
    gap: 0.6rem;
    max-width: 180px;
    margin-bottom: 1rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }

  .social-links {
    gap: 0.8rem;
  }

  .social-links a {
    font-size: 0.95rem;
  }

  .title {
    gap: 0.4rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 300px) {
  .role {
    font-size: 1.3rem;
  }

  .greeting {
    font-size: 0.8rem;
  }

  .description {
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
  }

  .cta-buttons {
    max-width: 160px;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 0.55rem 0.7rem;
    font-size: 0.75rem;
  }

  .social-links {
    gap: 0.7rem;
  }

  .social-links a {
    font-size: 0.9rem;
  }
}
</style>
