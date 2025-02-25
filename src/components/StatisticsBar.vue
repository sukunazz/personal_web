<template>
  <section class="statistics">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <i class="fas fa-smile"></i>
          <h3>10</h3>
          <p>Happy Clients</p>
        </div>
        <div class="stat-item">
          <i class="fas fa-camera"></i>
          <h3>5</h3>
          <p>Projects Completed</p>
        </div>
        <div class="stat-item">
          <i class="fas fa-calendar"></i>
          <h3>400</h3>
          <p>Working Days</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatisticsBar",
};
</script>

<style scoped>
.statistics {
  padding: 60px 0;
  /* background: #f9f9f9; */
  background: #fff;
  border-top: 1px solid #eee;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-item {
  color: #4caf50;
}

.stat-item i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.stat-item h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: #666;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
