<template>
  <main class="contact-page">
    <section class="container section-frame intro">
      <h1>keep in touch</h1>
      <p>Why not talk to me about your project ideas?</p>
      <div class="contact-lines">
        <p>Pokhara, Nepal</p>
        <p>sujansigdel03@gmail.com</p>
      </div>
    </section>

    <section class="container section-frame form-wrap">
      <h2>send a message</h2>
      <form @submit.prevent="submitForm">
        <div class="field-row">
          <label for="name">name</label>
          <input id="name" type="text" v-model="form.name" required />
        </div>
        <div class="field-row">
          <label for="email">email</label>
          <input id="email" type="email" v-model="form.email" required />
        </div>
        <div class="field-row">
          <label for="message">message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">send</button>
      </form>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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
  padding: 1rem 0 2rem;
}

.section-frame {
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 1.6rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: clamp(1.9rem, 5vw, 3rem);
  margin-bottom: 0.3rem;
}

.intro > p {
  color: var(--color-text-500);
  margin-bottom: 0.85rem;
}

.contact-lines p {
  margin-bottom: 0.2rem;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 0.9rem;
}

form {
  max-width: 700px;
}

.field-row {
  display: grid;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
}

label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-500);
}

input,
textarea {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-surface-soft);
  color: var(--color-text-900);
  padding: 0.6rem 0.7rem;
}

textarea {
  min-height: 140px;
}

button {
  border: none;
  border-radius: var(--radius-sm);
  background: var(--color-brand-700);
  color: #fff;
  padding: 0.58rem 0.95rem;
  font-size: 0.88rem;
  font-weight: 600;
  text-transform: lowercase;
  cursor: pointer;
}

button:hover {
  background: var(--color-brand-600);
}

.success,
.error {
  margin-top: 0.8rem;
  font-size: 0.9rem;
}

.success {
  color: var(--color-success);
}

.error {
  color: var(--color-danger);
}

@media (max-width: 720px) {
  .section-frame {
    padding: 1.1rem;
  }
}
</style>
