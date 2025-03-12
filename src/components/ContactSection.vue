<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">Get in touch</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-item">
              <i class="info-icon fas fa-map-marker-alt"></i>
              <p>Pokhara, Nepal</p>
            </div>
            <div class="info-item">
              <i class="info-icon fas fa-phone-alt"></i>
              <p>9825152682</p>
            </div>
            <div class="info-item">
              <i class="info-icon fas fa-envelope"></i>
              <p>sujansigdel03@gmail.com</p>
            </div>
          </div>

          <div class="social-links">
            <h3>Connect with me:</h3>
            <div class="social-icons">
              <a href="#" class="social-icon"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon"
                ><i class="fab fa-linkedin-in"></i
              ></a>
              <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <div class="form-card">
            <h3 class="form-title">Send me a message</h3>
            <form @submit.prevent="submitForm">
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
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-btn">
                <span>Send Message</span>
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
            <p v-if="successMessage" class="success-message">
              {{ successMessage }}
            </p>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.contact {
  padding: 80px 0;
  background: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #4caf50;
  position: relative;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

/* Contact Info Styles */
.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.info-item {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  font-size: 1.2rem;
  color: #4caf50;
  margin-right: 1rem;
  width: 25px;
}

.info-item p {
  color: #666;
  font-size: 1.1rem;
}

.social-links {
  padding: 25px 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.social-links h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #333;
}

.social-icons {
  display: flex;
  gap: 1.2rem;
}

.social-icon {
  color: #4caf50;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(76, 175, 80, 0.1);
}

.social-icon:hover {
  color: white;
  background: #4caf50;
  transform: translateY(-3px);
}

/* Form Styles */
.form-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
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
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.submit-btn span {
  margin-right: 10px;
}

.submit-btn:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.success-message {
  margin-top: 1rem;
  color: #4caf50;
  font-weight: bold;
  text-align: center;
  padding: 8px;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 5px;
}

.error-message {
  margin-top: 1rem;
  color: #f44336;
  font-weight: bold;
  text-align: center;
  padding: 8px;
  background: rgba(244, 67, 54, 0.1);
  border-radius: 5px;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .contact-grid {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .info-card,
  .social-links,
  .form-card {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .info-card,
  .social-links,
  .form-card {
    padding: 20px;
  }

  .info-item {
    flex-direction: column;
    text-align: center;
  }

  .info-icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  .social-links h3 {
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }

  input,
  textarea {
    padding: 0.8rem;
  }

  .submit-btn {
    padding: 0.8rem 1.5rem;
  }
}
</style>
