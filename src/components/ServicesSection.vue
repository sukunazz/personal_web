<!-- <template>
  <section class="services" id="services">
    <div class="container">
      <h2>Projects</h2>
      <p class="subtitle">List of all the projects that i have completed</p>
      <div class="services-grid">
        <div class="service-card">
          <img src="@/assets/images/sujan.png" alt="Commercial Photography" />
          <h3>Commercial Photography</h3>
          <p>
            Photography is what I strive most of all. It's in my blood and it's
            a lifestyle. Whether it's for commercial or individual use I will
            capture the best angles of the target.
          </p>
          <a href="#" class="service-link">Check Portfolio</a>
        </div>
        <div class="service-card">
          <img src="@/assets/images/sujan.png" alt="Graphic Design" />
          <h3>Graphic Design</h3>
          <p>
            The worldwide digital reality made it inevitable to integrate me
            into this field full of creativity. The mixture of photography and
            graphic art is the best way to express my fantasy ideas.
          </p>
          <a href="#" class="service-link">Check Portfolio</a>
        </div>
        <div class="service-card">
          <img src="@/assets/images/sujan.png" alt="Branding" />
          <h3>Branding</h3>
          <p>
            My skills in branding is a pure example of how a hobby can grow into
            a profession. Exploring your product and providing with a
            decision-making shortcut is nothing but fun for me.
          </p>
          <a href="#" class="service-link">Check Portfolio</a>
        </div>
      </div>
      <div class="view-all-container">
        <router-link to="/portfolio" class="view-all-btn">
          View All Projects
          <span class="arrow">→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
};
</script>

<style scoped>
.services {
  padding: 100px 0;
  /* background: #fff; */
  background: #f9f9f9;
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
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.service-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.service-link {
  color: #4caf50;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
}

.service-link:hover {
  text-decoration: underline;
}

.view-all-container {
  text-align: center;
  margin-top: 2rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: #4caf50;
  text-decoration: none;
  border: 2px solid #333;
  border-radius: 50px;
  transition: all 0.3s ease;
  background: transparent;
}

.view-all-btn:hover {
  background: #4caf50;
  color: white;
  transform: translateY(-2px);
}

.arrow {
  transition: transform 0.3s ease;
}

.view-all-btn:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .services {
    padding: 60px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .service-card {
    padding: 1.5rem;
  }
}
</style> -->

<!-- <template>
  <section class="services" id="services">
    <div class="container">
      <h2>Projects</h2>
      <p class="subtitle">List of all the projects that i have completed</p>
      <div class="services-grid">
        <div class="service-card">
          <img
            src="@/assets/images/booksville.png"
            alt="Commercial Photography"
          />
          <h3>Booksville Frontend</h3>
          <p>
            Booksville is a web app for book lovers to discover, buy, rent, and
            review books while connecting with others. Built with Vue 3 and
            Vite.
          </p>
          <a href="#" class="service-link">Check Project</a>
        </div>
        <div class="service-card">
          <img src="@/assets/images/sharesansar.png" alt="Graphic Design" />
          <h3>BookScraper</h3>
          <p>
            BookScraper is a web app that scrapes real-time share data, tracks
            stock prices, and provides automated market insights.
          </p>
          <a href="#" class="service-link">Check Project</a>
        </div>
        <div class="service-card">
          <img src="@/assets/images/sujan.png" alt="Branding" />
          <h3>Branding</h3>
          <p>
            My skills in branding is a pure example of how a hobby can grow into
            a profession. Exploring your product and providing with a
            decision-making shortcut is nothing but fun for me.
          </p>
          <a href="#" class="service-link">Check Project</a>
        </div>
      </div>
      <div class="view-all-container">
        <router-link to="/portfolio" class="view-all-btn">
          View All Projects
          <span class="arrow">→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
};
</script> -->
<!-- <template>
  <section class="services" id="services">
    <div class="container">
      <h2>Projects</h2>
      <p class="subtitle">List of all the projects that I have completed</p>
      <div class="services-grid">
        <div class="service-card" v-for="project in projects" :key="project.id">
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <router-link
            :to="{ name: 'ProjectDetails', params: { id: project.id } }"
            class="service-link"
          >
            Check Project
          </router-link>
        </div>
      </div>
      <div class="view-all-container">
        <router-link to="/projects" class="view-all-btn">
          View All Projects
          <span class="arrow">→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import booksville from "@/assets/images/booksville.png";
import sharesansar from "@/assets/images/sharesansar.png";
import sujan from "@/assets/images/sujan.png";
export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Booksville Frontend",
          description:
            "Booksville is a web app for book lovers to discover, buy, rent, and review books while connecting with others. Built with Vue 3 and Vite.",
          image: booksville,
          role: "Frontend Developer",
          teamSize: "2 members",
          technologies: ["Vue 3", "Vite", "Vercel", "Vuex"],
          completedDate: "November 2024",
        },
        {
          id: 2,
          title: "BookScraper",
          description:
            "BookScraper is a web app that scrapes real-time share data, tracks stock prices, and provides automated market insights.",
          image: sharesansar,
        },
        {
          id: 3,
          title: "Branding",
          description:
            "My skills in branding is a pure example of how a hobby can grow into a profession. Exploring your product and providing with a decision-making shortcut is nothing but fun for me.",
          image: sujan,
        },
      ],
    };
  },
};
</script>


<style scoped>
.services {
  padding: 80px 0;
  background: #f9f9f9;
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
  margin-bottom: 2.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.service-card {
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.service-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1.25rem;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
}

.service-card p {
  color: #666;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

.service-link {
  color: #4caf50;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  font-size: 0.95rem;
}

.service-link:hover {
  text-decoration: underline;
}

.view-all-container {
  text-align: center;
  margin-top: 2rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: #4caf50;
  text-decoration: none;
  border: 2px solid #333;
  border-radius: 50px;
  transition: all 0.3s ease;
  background: transparent;
}

.view-all-btn:hover {
  background: #4caf50;
  color: white;
  transform: translateY(-2px);
}

.arrow {
  transition: transform 0.3s ease;
}

.view-all-btn:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .services {
    padding: 50px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .service-card {
    padding: 1.25rem;
  }

  .service-card img {
    height: 160px;
  }
}
</style> -->

<template>
  <section class="services" id="services">
    <div class="container">
      <h2>Projects</h2>
      <p class="subtitle">List of all the projects that I have completed</p>
      <div class="services-grid">
        <div
          class="service-card"
          v-for="project in limitedProjects"
          :key="project.id"
        >
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <RouterLink
            :to="{ name: 'ProjectDetails', params: { id: project.id } }"
            class="service-link"
          >
            Check Project
          </RouterLink>
        </div>
      </div>
      <div class="view-all-container">
        <router-link to="/projects" class="view-all-btn">
          View All Projects
          <span class="arrow">→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import projectsData from "@/data.json";

export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    limitedProjects() {
      return this.projects.slice(0, 3);
    },
  },
  created() {
    this.projects = projectsData.projects;
  },
};
</script>

<style scoped>
.services {
  padding: 80px 0;
  background: #f9f9f9;
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
  margin-bottom: 2.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.service-card {
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.service-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1.25rem;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
}

.service-card p {
  color: #666;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

.service-link {
  color: #4caf50;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  font-size: 0.95rem;
}

.service-link:hover {
  text-decoration: underline;
}

.view-all-container {
  text-align: center;
  margin-top: 2rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: #4caf50;
  text-decoration: none;
  border: 2px solid #333;
  border-radius: 50px;
  transition: all 0.3s ease;
  background: transparent;
}

.view-all-btn:hover {
  background: #4caf50;
  color: white;
  transform: translateY(-2px);
}

.arrow {
  transition: transform 0.3s ease;
}

.view-all-btn:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .services {
    padding: 50px 0;
  }

  h2 {
    font-size: 2rem;
  }

  .service-card {
    padding: 1.25rem;
  }

  .service-card img {
    height: 160px;
  }
}
</style>
