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
          <a href="/projects" class="primary-btn">View Projects</a>
          <a href="/contact" class="secondary-btn">Get in Touch</a>
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
  background: radial-gradient(circle at top, rgba(248, 245, 239, 0.95), rgba(236, 246, 239, 0.85));
  padding: 3.5rem 6rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(31, 111, 92, 0.12), transparent 55%);
  pointer-events: none;
}

.hero-container::after {
  content: "";
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(242, 197, 114, 0.5), transparent 70%);
  top: -120px;
  right: -160px;
  opacity: 0.6;
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 7rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
  position: relative;
  z-index: 1;
}

.left-section {
  max-width: 620px;
  animation: fadeUp 0.8s ease-out;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.8rem;
}

.greeting {
  font-size: 1.2rem;
  color: var(--color-ink-muted);
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.role {
  font-size: 3.3rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-forest);
  letter-spacing: -0.03em;
  font-family: "Fraunces", "Times New Roman", serif;
}

.description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-ink-soft);
  margin-bottom: 2.2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  padding: 0.95rem 2rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease,
    background 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
}

.primary-btn {
  background: linear-gradient(135deg, #1f6f5c, #4b8f6f);
  color: #fff;
  border: none;
  box-shadow: 0 12px 24px rgba(31, 111, 92, 0.25);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 30px rgba(31, 111, 92, 0.3);
}

.secondary-btn {
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--color-ink);
  border: 1.5px solid rgba(31, 42, 29, 0.35);
  box-shadow: 0 10px 18px rgba(31, 42, 29, 0.08);
}

.secondary-btn:hover {
  background-color: rgba(31, 111, 92, 0.12);
  color: var(--color-forest);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-links a {
  color: var(--color-ink-muted);
  font-size: 1.1rem;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 0.55rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 10px 18px rgba(31, 42, 29, 0.08);
}

.social-links a:hover {
  color: var(--color-forest);
  transform: translateY(-3px);
}

.right-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: floatIn 0.9s ease-out;
}

.image-container {
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 42% 58% 60% 40% / 48% 38% 62% 52%;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(31, 42, 29, 0.2);
  border: 6px solid rgba(248, 245, 239, 0.9);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.profile-image:hover {
  transform: scale(1.06);
}

/* Decorative Elements */
.glowing-ring {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  border: 5px solid rgba(31, 111, 92, 0.35);
  animation: pulse 2.6s infinite ease-in-out;
}

.floating-dots {
  position: absolute;
}

.dot {
  width: 12px;
  height: 12px;
  background: var(--color-sun);
  border-radius: 50%;
  position: absolute;
  animation: float 4s infinite ease-in-out alternate;
}

.dot1 {
  top: -30px;
  left: 30px;
  animation-delay: 0.5s;
}

.dot2 {
  bottom: -40px;
  right: 50px;
  animation-delay: 1s;
}

.dot3 {
  top: 60px;
  right: -30px;
  animation-delay: 1.5s;
}

.orbiting-icons {
  position: absolute;
  width: 360px;
  height: 360px;
  animation: rotate 10s linear infinite;
}

.icon {
  font-size: 1.8rem;
  color: var(--color-moss);
  position: absolute;
}

.icon1 {
  top: 6%;
  left: 50%;
  transform: translateX(-50%);
}

.icon2 {
  bottom: 8%;
  right: 26%;
}

.icon3 {
  top: 48%;
  left: 6%;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

@keyframes float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
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
    padding: 3rem 4rem;
  }

  .hero-content {
    gap: 5rem;
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
    width: 340px;
    height: 340px;
  }
}

@media (max-width: 1200px) {
  .hero-container {
    padding: 2.5rem 3rem;
  }

  .hero-content {
    gap: 4rem;
  }

  .role {
    font-size: 2.9rem;
  }

  .greeting {
    font-size: 1.1rem;
  }

  .description {
    font-size: 1.05rem;
  }

  .image-container {
    width: 300px;
    height: 300px;
  }

  .glowing-ring {
    width: 350px;
    height: 350px;
  }

  .orbiting-icons {
    width: 320px;
    height: 320px;
  }
}

@media (max-width: 1024px) {
  .hero-container {
    padding: 2.5rem 2rem;
  }

  .hero-content {
    gap: 3rem;
  }

  .role {
    font-size: 2.6rem;
  }

  .description {
    font-size: 1rem;
  }

  .primary-btn,
  .secondary-btn {
    padding: 0.85rem 1.6rem;
  }

  .image-container {
    width: 280px;
    height: 280px;
  }

  .glowing-ring {
    width: 320px;
    height: 320px;
  }

  .orbiting-icons {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .left-section {
    margin: 0 auto;
  }

  .cta-buttons,
  .social-links {
    justify-content: center;
  }

  .right-section {
    margin-top: 2rem;
  }
}

@media (max-width: 600px) {
  .hero-container {
    padding: 2rem 1.5rem 3rem;
  }

  .role {
    font-size: 2.2rem;
  }

  .image-container {
    width: 240px;
    height: 240px;
  }

  .glowing-ring {
    width: 280px;
    height: 280px;
  }

  .orbiting-icons {
    width: 260px;
    height: 260px;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 1.8rem 1.2rem 3rem;
  }

  .title {
    margin-bottom: 1.4rem;
  }

  .greeting {
    font-size: 0.95rem;
  }

  .role {
    font-size: 2rem;
  }

  .description {
    font-size: 0.95rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    max-width: 240px;
  }
}
</style>
