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
  padding: 48px 0 44px;
}

.footer-content {
  text-align: center;
  color: #46566a;
}

.footer-content h3 {
  font-size: 40px;
  margin-bottom: 12px;
  color: #42586f;
}

.footer-location {
  font-size: 31px;
  color: #62778f;
  margin-bottom: 8px;
}

.footer-email {
  font-size: 41px;
  font-weight: 700;
  color: #42586f;
  text-decoration: none;
}

.footer-socials {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 24px;
}

.footer-socials a {
  font-size: 39px;
  color: #5d6e80;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-socials a:hover {
  color: #3f556f;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .site-footer {
    padding: 40px 0 36px;
  }

  .footer-content h3 {
    font-size: 30px;
  }

  .footer-location {
    font-size: 22px;
  }

  .footer-email {
    font-size: 25px;
  }

  .footer-socials a {
    font-size: 33px;
  }
}
</style>
