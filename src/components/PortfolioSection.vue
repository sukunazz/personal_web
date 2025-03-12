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
  background: #fff;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
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
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid #eaeaea;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.5rem;
}

.icon-container img {
  width: 80%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.portfolio-item:hover .icon-container img {
  transform: scale(1.1);
}

/* Specific styling for each tool icon */
.portfolio-item:nth-child(1) .icon-container img {
  max-width: 100px;
}

.portfolio-item:nth-child(2) .icon-container img {
  max-width: 90px;
}

.portfolio-item:nth-child(3) .icon-container img {
  max-width: 90px;
}

.portfolio-item:nth-child(4) .icon-container img {
  max-width: 100px;
}

@media (max-width: 768px) {
  .portfolio {
    padding: 60px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .portfolio-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .portfolio-item {
    padding: 1rem;
  }

  .icon-container {
    padding: 1rem;
  }
}
</style>
