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
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <i class="fab fa-telegram"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram"></i>
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
  padding: 44px 0 40px;
}

.footer-content {
  text-align: center;
  color: #4c5a6a;
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
}

.footer-content h3 {
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  margin-bottom: 8px;
  color: #3f4f63;
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
  font-weight: 700;
}

.footer-location {
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  color: #6a7789;
  margin-bottom: 10px;
}

.footer-email {
  font-size: clamp(1.2rem, 2.2vw, 1.9rem);
  font-weight: 700;
  color: #3f4f63;
  text-decoration: none;
}

.footer-socials {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 18px;
}

.footer-socials a {
  font-size: clamp(1.55rem, 2vw, 1.9rem);
  color: #5f6e80;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-socials a:hover {
  color: #42586f;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .site-footer {
    padding: 36px 0 32px;
  }
}
</style>
