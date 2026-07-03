<template>
  <section class="contact" id="contact">
    <div class="container contact-layout">
      <div class="contact-copy">
        <p class="kicker">Contact</p>
        <h2>Need a frontend developer who can ship with clarity?</h2>
        <p>
          Share your project goals, timeline, and team setup. I will respond
          with a practical plan and next steps.
        </p>

        <div class="info-list">
          <div class="info-item">
            <span>Location</span>
            <strong>Pokhara, Nepal</strong>
          </div>
          <div class="info-item">
            <span>Email</span>
            <strong>sujansigdel03@gmail.com</strong>
          </div>
          <div class="info-item">
            <span>Phone</span>
            <strong>+977 9825152682</strong>
          </div>
        </div>

        <div class="social-links">
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

      <div class="form-card">
        <h3>Send A Message</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input id="name" type="text" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="message">Project Brief</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Example: Looking for a Vue developer for a dashboard project..."
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
      this.errorMessage = "";

      const message = {
        content:
          `New contact form submission\n\n` +
          `Name: ${this.form.name}\n` +
          `Email: ${this.form.email}\n` +
          `Message:\n${this.form.message}`,
      };

      try {
        const response = await axios.post("/api/discord", {
          message: message.content,
        });

        if (response.status === 200) {
          this.successMessage = "Message sent successfully.";
          this.form = { name: "", email: "", message: "" };
        } else {
          throw new Error("Unexpected response from server.");
        }
      } catch (error) {
        console.error("Error sending message:", error.response?.data || error.message);
        this.errorMessage = "Failed to send message. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 2.2rem 0 4rem;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-copy,
.form-card {
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-soft);
  padding: 1.5rem;
}

.kicker {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--color-accent-600);
  font-weight: 700;
  margin-bottom: 0.35rem;
}

h2 {
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  margin-bottom: 0.8rem;
}

.contact-copy p {
  color: var(--color-text-700);
  margin-bottom: 0.8rem;
}

.info-list {
  display: grid;
  gap: 0.5rem;
  margin: 1rem 0;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-surface-soft);
  padding: 0.7rem 0.8rem;
}

.info-item span {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-text-500);
  font-weight: 700;
}

.info-item strong {
  color: var(--color-text-900);
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 0.6rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-surface-soft);
  color: var(--color-brand-700);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.social-icon:hover {
  color: #fff;
  background: var(--color-brand-700);
}

.form-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.form-group {
  margin-bottom: 0.8rem;
}

label {
  display: block;
  font-size: 0.88rem;
  color: var(--color-text-700);
  font-weight: 600;
  margin-bottom: 0.3rem;
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 0.68rem 0.78rem;
  background: var(--color-surface-soft);
  color: var(--color-text-900);
}

textarea {
  min-height: 130px;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-brand-600);
  box-shadow: 0 0 0 3px rgba(22, 101, 170, 0.12);
}

.submit-btn {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 0.72rem 1rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--color-brand-700),
    var(--color-accent-600)
  );
  cursor: pointer;
}

.success-message,
.error-message {
  margin-top: 0.8rem;
  border-radius: 10px;
  font-weight: 600;
  padding: 0.55rem 0.7rem;
  font-size: 0.92rem;
}

.success-message {
  background: rgba(20, 131, 93, 0.12);
  color: var(--color-success);
}

.error-message {
  background: rgba(191, 63, 63, 0.12);
  color: var(--color-danger);
}

@media (max-width: 880px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}
</style>
