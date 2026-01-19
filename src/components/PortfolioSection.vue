<template>
  <section class="portfolio" id="portfolio">
    <div class="container">
      <h2>Tools</h2>
      <p class="subtitle">for the love of nature</p>
      <div class="portfolio-grid">
        <div class="portfolio-item">
          <div class="icon-container">
            <img src="@/assets/images/html.png" alt="HTML5 logo" />
          </div>
        </div>
        <div class="portfolio-item">
          <div class="icon-container">
            <img src="@/assets/images/css.png" alt="CSS3 logo" />
          </div>
        </div>
        <div class="portfolio-item">
          <div class="icon-container">
            <img src="@/assets/images/javascript.png" alt="JavaScript logo" />
          </div>
        </div>
        <div class="portfolio-item">
          <div class="icon-container">
            <img src="@/assets/images/vue.png" alt="Vue.js logo" />
          </div>
        </div>
        <div class="portfolio-item">
          <div class="icon-container">
            <img src="@/assets/images/node.png" alt="node.js logo" />
          </div>
        </div>
        <div class="portfolio-item">
          <div class="icon-container">
            <img src="@/assets/images/mongodb.png" alt="mongodb logo" />
          </div>
        </div>
        <div class="portfolio-item">
          <div class="icon-container">
            <img src="/images/250px-Nextjs-logo.svg.png" alt="Next.js logo" />
          </div>
        </div>
        <div class="portfolio-item">
          <div class="icon-container">
            <img src="/images/lg-67786f2e073fb-NestJS.png" alt="NestJS logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioSection",
};
</script>

<style scoped>
.portfolio {
  padding: 100px 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 245, 239, 0.9));
}

h2 {
  text-align: center;
  font-size: 2.6rem;
  color: var(--color-forest);
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: var(--color-ink-muted);
  margin-bottom: 3rem;
  font-size: 1.05rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.portfolio-item {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1.4rem;
  padding: 1.8rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(31, 42, 29, 0.08);
  box-shadow: 0 16px 30px rgba(31, 42, 29, 0.12);
}

.portfolio-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 36px rgba(31, 42, 29, 0.15);
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.5rem;
}

.icon-container img {
  width: auto;
  height: 72px;
  max-width: 120px;
  object-fit: contain;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 8px 12px rgba(31, 42, 29, 0.1));
}

.portfolio-item:hover .icon-container img {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .portfolio {
    padding: 70px 0;
  }

  h2 {
    font-size: 2.1rem;
  }

  .portfolio-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .portfolio-item {
    padding: 1.2rem;
  }

  .icon-container {
    padding: 1rem;
  }
}
</style>

