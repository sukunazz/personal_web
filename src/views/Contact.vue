<template>
  <main class="contact-page">
    <section class="container contact-card">
      <h2 class="skills-title">Contact</h2>
      <p class="skills-subtitle">Let's Build Something</p>
      <span class="section-rule" aria-hidden="true"></span>

      <section class="contact-intro">
        <h3>Let's Connect</h3>
        <p>
          Have a project in mind or just want to chat? Feel free to reach out.
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
      </section>

      <div class="contact-panel">
        <div class="contact-info">
          <div class="contact-item">
            <h3>Email</h3>
            <a href="mailto:sujansigdel03@gmail.com">sujansigdel03@gmail.com</a>
          </div>
          <div class="contact-item">
            <h3>Location</h3>
            <p>Pokhara, Nepal</p>
          </div>
          <div class="contact-item">
            <h3>Profiles</h3>
            <div class="contact-links">
              <a
                href="https://www.linkedin.com/in/sujansigdel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sukunazz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com/sigdelsujan03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <h3>Send Message</h3>
          <label for="name">Name</label>
          <input id="name" type="text" v-model="form.name" required />

          <label for="email">Email</label>
          <input id="email" type="email" v-model="form.email" required />

          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            required
          ></textarea>

          <button type="submit">send</button>

          <p v-if="successMessage" class="success">{{ successMessage }}</p>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactPage",
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
      try {
        const response = await axios.post("/api/discord", {
          message:
            `New contact form submission\n\n` +
            `Name: ${this.form.name}\n` +
            `Email: ${this.form.email}\n` +
            `Message:\n${this.form.message}`,
        });
        if (response.status === 200) {
          this.successMessage = "Message sent successfully.";
          this.form = { name: "", email: "", message: "" };
          return;
        }
        this.errorMessage = "Failed to send message.";
      } catch (error) {
        this.errorMessage = "Failed to send message.";
      }
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding-bottom: 20px;
}

.contact-card {
  background: #ffffff;
  border-radius: 0 0 14px 14px;
  margin-top: -2px;
  padding: 40px 44px 46px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 18px 40px rgba(0, 0, 0, 0.05);
}

.skills-title {
  font-size: 58px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 8px;
  color: #4b4f56;
}

.skills-subtitle {
  font-size: 40px;
  line-height: 1;
  color: #4b4f56;
  margin-bottom: 20px;
}

.section-rule {
  display: block;
  width: 130px;
  height: 4px;
  border-radius: 99px;
  background: #e5524c;
  margin-bottom: 26px;
  position: relative;
}

.section-rule::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e5524c;
  position: absolute;
  left: -4px;
  top: -3px;
}

.contact-panel {
  display: grid;
  grid-template-columns: minmax(300px, 0.9fr) minmax(360px, 1.1fr);
  gap: 28px;
}

.contact-intro {
  margin-bottom: 22px;
  max-width: 860px;
}

.contact-intro h3 {
  font-size: 30px;
  line-height: 1.1;
  margin-bottom: 8px;
  color: #4b4f56;
}

.contact-intro p {
  font-size: 16px;
  line-height: 1.8;
  color: #5d6168;
}

.contact-info {
  display: grid;
  gap: 16px;
}

.contact-item {
  padding: 0 0 14px;
  border-bottom: 1px solid #d5e1eb;
}

.contact-item h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.contact-item a,
.contact-item p {
  font-size: 15px;
  color: #606060;
  text-decoration: none;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.contact-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #eef3f8;
  border: 1px solid #d4e0ea;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #4e4e4e;
}

.contact-links i {
  font-size: 16px;
  color: #e5524c;
}

.contact-form {
  padding: 0;
  display: grid;
  gap: 10px;
  align-content: start;
}

.contact-form h3 {
  font-size: 20px;
  margin-bottom: 2px;
}

.contact-form label {
  font-size: 13px;
  color: #666;
  font-weight: 600;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid #d3dfe9;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  background: #ffffff;
}

.contact-form textarea {
  min-height: 145px;
  resize: vertical;
}

.contact-form button {
  margin-top: 6px;
  border: none;
  border-radius: 9px;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 700;
  text-transform: lowercase;
  color: #ffffff;
  background: #e5524c;
  cursor: pointer;
  transition: 0.2s;
}

.contact-form button:hover {
  background: #d44843;
}

.success,
.error {
  margin-top: 4px;
  font-size: 14px;
}

.success {
  color: #1c8f59;
}

.error {
  color: #bf3f3f;
}

@media (max-width: 1200px) {
  .contact-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-card {
    padding: 35px 25px;
  }

  .skills-title {
    font-size: 42px;
  }

  .skills-subtitle {
    font-size: 30px;
  }

  .contact-panel {
    gap: 22px;
  }

  .contact-intro h3 {
    font-size: 26px;
  }

  .contact-intro p {
    font-size: 15px;
    line-height: 1.75;
  }
}

@media (max-width: 500px) {
  .skills-title {
    font-size: 34px;
  }

  .skills-subtitle {
    font-size: 24px;
  }
}
</style>
