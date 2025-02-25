<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="testimonial-card">
        <div class="testimonial-content">
          <p>
            "Sujan is one of the best frontend developers I have ever worked
            with. He is skilled, efficient, and detail-oriented. If you need a
            fast and high-quality web solution, I highly recommend hiring
            sujan."
          </p>
          <div class="testimonial-author">
            <img
              src="@/assets/images/ash.png"
              alt="Lena Andrews"
              class="author-image"
            />
            <div class="author-info">
              <h4>Ash Ketchum</h4>
              <p>Python Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialSection",
};
</script>

<style scoped>
.testimonials {
  padding: 100px 0;
  background: #f9f9f9;
  /* background: #fff; */
}

.testimonial-card {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  /* background: #f9f9f9; */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.testimonial-content p {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  margin: 0;
  color: #333;
}

.author-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .testimonials {
    padding: 60px 0;
  }

  .testimonial-card {
    padding: 1.5rem;
  }
}
</style>
