<template>
  <footer class="site-footer">
    <div class="container footer-content">
      <h3>Keep In Touch</h3>
      <p class="footer-location">Pokhara, Nepal</p>
      <a href="mailto:sujansigdel03@gmail.com" class="footer-email"
        >sujansigdel03@gmail.com</a
      >

      <div class="footer-socials" aria-label="social links">
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
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>

<style scoped>
.site-footer {
  padding: 12px 0 28px;
  background: linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%);
  border-top: 1px solid #dbe6f4;
}

.footer-content {
  text-align: center;
  color: #111111;
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
}

.footer-content h3 {
  font-size: clamp(1.7rem, 2.6vw, 2.1rem);
  margin-bottom: 8px;
  color: var(--color-heading);
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
  font-weight: 700;
}

.footer-location {
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  color: #111111;
  margin-bottom: 10px;
}

.footer-email {
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight: 700;
  color: #111111;
  text-decoration: none;
}

.footer-socials {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 18px;
}

.footer-socials a {
  font-size: clamp(1.4rem, 1.8vw, 1.7rem);
  color: #111111;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-socials a:hover {
  color: #8abae5;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .site-footer {
    padding: 10px 0 22px;
  }
}
</style>
