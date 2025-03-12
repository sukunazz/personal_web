<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container">
        <h1>Contact Me</h1>
        <p>Let's discuss your next project</p>
      </div>
    </div>

    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>Chhoreptatan</p>
            <p>Pokhara,Nepal</p>
          </div>

          <div class="info-card">
            <i class="fas fa-phone"></i>
            <h3>Phone</h3>
            <p>9825152682</p>
          </div>

          <div class="info-card">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>sujansigdel03@gmail.com</p>
          </div>

          <div class="social-links">
            <h3 class="social-links-follow">Follow Me</h3>
            <div class="social-icons">
              <a href="#" class="social-icon"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <h2>Send Message</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <input
                type="text"
                v-model="form.name"
                placeholder="Your Name"
                required
              />
            </div>

            <div class="form-group">
              <input
                type="email"
                v-model="form.email"
                placeholder="Your Email"
                required
              />
            </div>

            <div class="form-group">
              <textarea
                v-model="form.message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">Send Message</button>
            <p v-if="successMessage" class="success-message">
              {{ successMessage }}
            </p>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactSection",
  data() {
    return {
      form: { name: "", email: "", message: "" },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async submitForm() {
      this.successMessage = "";
      this.errorMessage = ""; // Reset messages before submitting

      const message = {
        content: `📩 **New Contact Form Submission**\n\n**Name:** ${this.form.name}\n**Email:** ${this.form.email}\n**Message:**\n${this.form.message}`,
      };

      try {
        const response = await axios.post("/api/discord", {
          message: message.content,
        });

        if (response.status === 200) {
          this.successMessage = "Message sent successfully!";
          this.form = { name: "", email: "", message: "" };
        } else {
          throw new Error("Unexpected response from Discord.");
        }
      } catch (error) {
        console.error(
          "Error sending message:",
          error.response?.data || error.message
        );
        this.errorMessage = "Failed to send message. Please try again.";
      }
    },
  },
};
</script>
<style scoped>
.contact-page {
  padding-top: 80px; /* Account for fixed navbar */
}

.page-header {
  background: #f9f9f9;
  padding: 60px 0;
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #4caf50;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 60px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.social-links-follow {
  padding-top: 1.25rem;
}

.info-card {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
}

.info-card i {
  font-size: 2rem;
  color: #4caf50;
  margin-bottom: 1rem;
}

.info-card h3 {
  margin-bottom: 1rem;
}

.social-links {
  text-align: center;
  margin-top: 2rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
.success-message {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}

.error-message {
  margin-top: 1rem;
  color: red;
  font-weight: bold;
}
.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #4caf50;
  color: white;
}

.contact-form-container {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-form-container h2 {
  margin-bottom: 2rem;
  color: #4caf50;
}

.form-group {
  margin-bottom: 1.5rem;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-btn {
  background: #4caf50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background: #45a049;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-form-container {
    padding: 1.5rem;
  }
}
</style>
