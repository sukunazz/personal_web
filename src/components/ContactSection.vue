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
              <a
                href="https://www.linkedin.com/in/sujansigdel/"
                class="social-icon"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/sukunazz/"
                class="social-icon"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
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
  padding: 90px 0;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-forest);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
}

/* Contact Info Styles */
.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 60px 30px;
  box-shadow: 0 16px 30px rgba(31, 42, 29, 0.12);
  margin-bottom: 2rem;
  border: 1px solid rgba(31, 42, 29, 0.08);
}

.info-item {
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  font-size: 1.2rem;
  color: var(--color-forest);
  margin-right: 1rem;
  width: 25px;
}

.info-item p {
  color: var(--color-ink-muted);
  font-size: 1.05rem;
}

.social-links {
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 16px 30px rgba(31, 42, 29, 0.12);
  border: 1px solid rgba(31, 42, 29, 0.08);
}

.social-links h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: var(--color-ink);
}

.social-icons {
  display: flex;
  gap: 1.2rem;
}

.social-icon {
  color: var(--color-forest);
  font-size: 1.4rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(31, 111, 92, 0.12);
}

.social-icon:hover {
  color: white;
  background: var(--color-forest);
  transform: translateY(-3px);
}

/* Form Styles */
.form-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 16px 30px rgba(31, 42, 29, 0.12);
  border: 1px solid rgba(31, 42, 29, 0.08);
}

.form-title {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  color: var(--color-ink);
}

.form-group {
  margin-bottom: 1.3rem;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(31, 42, 29, 0.2);
  border-radius: 12px;
  font-family: inherit;
  background: rgba(248, 245, 239, 0.6);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-forest);
  box-shadow: 0 0 0 2px rgba(31, 111, 92, 0.2);
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-btn {
  background: linear-gradient(135deg, var(--color-forest), var(--color-moss));
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0 12px 24px rgba(31, 111, 92, 0.25);
}

.submit-btn span {
  margin-right: 10px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 28px rgba(31, 111, 92, 0.3);
}

.success-message {
  margin-top: 1rem;
  color: var(--color-forest);
  font-weight: 600;
  text-align: center;
  padding: 8px;
  background: rgba(31, 111, 92, 0.1);
  border-radius: 8px;
}

.error-message {
  margin-top: 1rem;
  color: #c0392b;
  font-weight: 600;
  text-align: center;
  padding: 8px;
  background: rgba(192, 57, 43, 0.12);
  border-radius: 8px;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .contact-grid {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 70px 0;
  }

  .section-title {
    font-size: 2.1rem;
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

