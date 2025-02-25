<!-- <template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get in touch</h2>
          <div class="info-item">
            <p>3961 Small Street, New York, United States</p>
          </div>
          <div class="info-item">
            <p>646-675-5974</p>
          </div>
          <div class="info-item">
            <p>info@youraddress.com</p>
          </div>
          <div class="social-links">
            <h3>Connect with us:</h3>
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
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input
                type="text"
                v-model="form.name"
                placeholder="Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                v-model="form.email"
                placeholder="Email"
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
            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log("Form submitted:", this.form);
      // Reset form
      this.form = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 100px 0;
  /* background: #f9f9f9; */
  background: #fff;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.info-item {
  margin-bottom: 1rem;
}

.info-item p {
  color: #666;
}

.social-links {
  margin-top: 2rem;
}

.social-links h3 {
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
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
}

.submit-btn:hover {
  background: #45a049;
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style> -->

<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get in touch</h2>
          <div class="info-item">
            <p>Pokhara,Nepal</p>
          </div>
          <div class="info-item">
            <p>9825152682</p>
          </div>
          <div class="info-item">
            <p>sujansigdel03@gmail.com</p>
          </div>
          <div class="social-links">
            <h3>Connect with us:</h3>
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
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input
                type="text"
                v-model="form.name"
                placeholder="Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                v-model="form.email"
                placeholder="Email"
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
            <button type="submit" class="submit-btn">Submit</button>
          </form>
          <p v-if="successMessage" class="success-message">
            {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
  padding: 100px 0;
  /* background: #fff; */
  background: #f9f9f9;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #4caf50;
}

.info-item {
  margin-bottom: 1rem;
}

.info-item p {
  color: #666;
}

.social-links {
  margin-top: 2rem;
}

.social-links h3 {
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
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
}

.submit-btn:hover {
  background: #45a049;
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

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
